import React from "react";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Cards from "../Components/Cards";
import requests from "../Request";

function HomePage(){
    return(
        <div>
            <Navbar />
            <Banner />
            <Cards title="Netflix Originals" url={requests.netflix}/>
            <Cards title="Trending" url={requests.trending}/>
            <Cards title="Top Rated" url={requests.topRated}/>
            <Cards title="Action" url={requests.action}/>
            <Cards title="Comedy" url={requests.comedy}/>
            <Cards title="Horror" url={requests.horror}/>
            <Cards title="Romance" url={requests.romance}/>
            <Cards title="Documentory" url={requests.docu}/>
        </div>
    )
}

export default HomePage;