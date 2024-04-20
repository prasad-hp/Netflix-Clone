import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import DataBase from "../DataBase";

function Banner(){
    const response = DataBase.netflix;
    const random = Math.floor(Math.random()*(response.length-1))

    const newBanner= response[random]
    // console.log(response[random])

    let description = newBanner?.overview || "";
    let outputText = description.length > 150 ? `${description.slice(0, 150)}` + "..." : description;
    
    return(
        <header style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${newBanner.backdrop_path}")`}} className={`bg-cover center bg-center h-screen object-contain`}>
            <div className=" pt-20 translate-y-2/3 px-20">
                <h1 className="text-white text-8xl font-semibold ">{newBanner.name}</h1>
                <button className="h-10 bg-gray-800 w-32 rounded-md text-white text-xl items-center">Play</button>
                <button className="h-10 bg-gray-800 w-32 rounded-md text-white text-xl items-center m-10">My List</button>
                <h2 className="text-white text-3xl">{outputText}</h2>
            </div>
        </header>
    )
}

export default Banner;