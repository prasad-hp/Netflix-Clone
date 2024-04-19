import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

function Banner(){
    const [banner, setBanner] = useState("")

    useEffect(()=>{
        async function getData(){
            try{
                const response = await axios.get(requests.netflix)
                const random = Math.floor(Math.random()*(response.data.results.length-1))
                setBanner(response.data.results[random])
            } catch(data) {
                console.error("error fetching data", data) 
            }
        }
        getData();
    },[])
    let description = banner?.overview || "";
    let outputText = description.length > 150 ? `${description.slice(0, 150)}` + "..." : description;
    
    return(
        <header style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${banner.backdrop_path}")`}} className={`bg-cover center bg-center h-screen object-contain`}>
            <div className=" h-screen translate-y-1/3 px-20">
                <h1 className="text-white text-8xl font-semibold ">{banner.name}</h1>
                <button className="h-10 bg-gray-800 w-32 rounded-md text-white text-xl items-center">Play</button>
                <button className="h-10 bg-gray-800 w-32 rounded-md text-white text-xl items-center m-10">My List</button>
                <h2 className="text-white text-3xl">{outputText}</h2>
            </div>
        </header>
    )
}

export default Banner;