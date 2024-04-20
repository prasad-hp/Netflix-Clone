import React from "react";

function LoginScreen(){
    return(
        <div className="bg-[url('../../Images/LoginScreenBg.jpg')] h-screen bg-no-repeat">
            <div className="flex justify-between p-10">
                <img src="../../Images/Netflix_Logo_RGB.png" className="w-52 " />
                <button className="bg-red-700 w-36 text-white h-10 font-semibold rounded">SignIn</button>
            </div>
            <form className="justify-self-center items-center">
                <input type="email" placeholder="Enter Email" className="h-10 w-1/5 w-max-52"/>
                <button className="bg-red-700 w-36 text-white h-10 font-semibold rounded pl-3">GET STARTED</button>
            </form>
        </div>
    )
}

export default LoginScreen;