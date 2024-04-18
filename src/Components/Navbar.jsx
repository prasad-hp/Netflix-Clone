import React, {ReactDOM, useState} from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Navbar(){
    const [searchBar, setSearchBar] = useState(false)
    return(
        <div className="flex h-24 bg-black text-gray-100 font-semibold items-center justify-between px-16 font-sans text-xl">
            <div className="flex items-center justify-around w-2/5">
                <img className="w-36 h-26" src="../../Images/netflix-logo1.png"/>
                <h2>Home</h2>
                <h2>Series</h2>
                <h2>Films</h2>
                <h2>Recently Added</h2>
                <h2>My List</h2>
            </div>
            <div className="flex items-center justify-end w-2/5 space-x-6">
                {searchBar && <textarea />}
                <button onClick={()=> setSearchBar(!searchBar)}>    
                    <img src="../../svg/search_white_24dp.svg" className="w-10"/>
                </button>
                <h2>CHILDREN</h2>
                <img src="../../svg/notifications_white_24dp.svg" className="w-10"/>
                <button className="flex items-center">
                    <img className="h-12" src="../../Images/profile-icon.png"/>
                    <img src="../../svg/arrow_drop_down_white_24dp.svg" className="w-10"/>
                </button>
            </div>

        </div>
    )
}

export default Navbar;