import React from "react";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Cards from "../Components/Cards";
// import requests from "../Request";
import DataBase from "../DataBase";

function HomePage(){
    return(
        <div>
            <Navbar />
            <Banner />
            <Cards title="Netflix Originals" url={DataBase.netflix}/>
            <Cards title="Trending" url={DataBase.trending}/>
            <Cards title="Top Rated" url={DataBase.topRated}/>
            <Cards title="Action" url={DataBase.action}/>
            <Cards title="Comedy" url={DataBase.comedy}/>
            <Cards title="Horror" url={DataBase.horror}/>
            <Cards title="Romance" url={DataBase.romance}/>
            <Cards title="Documentory" url={DataBase.docu}/>
        </div>
    )
}

export default HomePage;