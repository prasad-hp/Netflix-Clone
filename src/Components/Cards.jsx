import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

function Cards(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await axios.get(props.url);
        setImages(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getImages();
  }, []);
  console.log(images)
  return (
    <div>
      <h1 className="font-bold text-white text-4xl m-5  ">{props.title}</h1>
      <div className="flex overflow-x-scroll">
        {images.map((image, index) => (
          <img className="w-24 mx-5" key={index} src={`https://image.tmdb.org/t/p/original${image.poster_path}`} alt={`Poster ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
