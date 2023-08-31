import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [api, setApi] = useState("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=fJ7rtYEGS9BMKHopE8bQ6Wffub29mTIX&rating=g&limit=3");
 
    

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((gifs) => setGifs(gifs.data));
  }, [api]);

  function handleSearch(search) {
    setApi(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=fJ7rtYEGS9BMKHopE8bQ6Wffub29mTIX&rating=g&limit=3`)
  }
  

  
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        <GifList gifs={gifs} />
      </div>
      <div className="col">
        <GifSearch handleSearch={handleSearch} />
      </div>
    </div>
    </div>
  );
}

export default GifListContainer;
