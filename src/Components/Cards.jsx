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
    <div className="px-5">
      <h1 className="font-bold text-white text-4xl m-5">{props.title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar" >
        {images.map((image, index) => (
          <img className="max-h-96 px-2.5 w-100% hover:scale-110 hover:opacity-100 duration-500" key={index} src={`https://image.tmdb.org/t/p/original${image.poster_path}`} alt={`Poster ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
