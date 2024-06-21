import React, {useEffect, useState} from "react";

function Navbar(){
    const [searchBar, setSearchBar] = useState(false)
    const [show, setShow] = useState(false)


    const transisionNavBar = ()=>{
        if(window.scrollY > 100) {
            setShow(true);
        }else {
            setShow(false)
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", transisionNavBar)
        return () => window.removeEventListener("scroll", transisionNavBar);
    },[])


    return(
            <div className={`flex h-24 text-gray-100 font-semibold items-center justify-between px-16 font-sans text-xl w-screen fixed ${show && "bg-black"}`}>
                <div className="flex items-center justify-around w-2/5">
                    <img className="w-36 h-26 cursor-pointer" src="../../Images/Netflix_Logo_RGB.png"/>
                    <h2 className="hover:cursor-pointer">Home</h2>
                    <h2 className="hover:cursor-pointer">Series</h2>
                    <h2 className="hover:cursor-pointer">Films</h2>
                    <h2 className="hover:cursor-pointer">Recently Added</h2>
                    <h2 className="hover:cursor-pointer">My List</h2>
                </div>
                <div className="flex items-center justify-end w-2/5 space-x-6">
                    {searchBar && <textarea />}
                    <button onClick={()=> setSearchBar(!searchBar)}>    
                        <img src="../../svg/search_white_24dp.svg" className="w-10"/>
                    </button>
                    <h2 className="hover:cursor-pointer">CHILDREN</h2>
                    <img src="../../svg/notifications_white_24dp.svg" className="w-10"/>
                    <button className="flex items-center cursor-pointer">
                        <img className="h-12" src="../../Images/profile-icon.png"/>
                        <img src="../../svg/arrow_drop_down_white_24dp.svg" className="w-10"/>
                    </button>
                </div>
            </div>
    )
}

export default Navbar;