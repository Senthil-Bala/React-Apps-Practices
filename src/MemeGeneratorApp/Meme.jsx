import React, { useEffect, useState } from "react";
import axios from 'axios'

function Meme() {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setAllImages(res.data.data.memes); // Set the memes array properly
      })
      .catch((e) => console.log(e));
  }, []); // Add an empty dependency array to execute the effect only once

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "top" ? setTop(value) : setBottom(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let rand = allImages[Math.floor(Math.random() * allImages.length)].url; // Fix random image selection
    setRandomImage(rand);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="top" value={top} onChange={handleChange} />
        <input type="text" name="bottom" value={bottom} onChange={handleChange} />
        <button type="submit">Generate</button>
      </form>

      {randomImage !== "" && (
        <div className="meme">
          <img src={randomImage} alt="meme" />
          <h2 className="top">{top}</h2>
          <h2 className="bottom">{bottom}</h2>
        </div>
      )}
    </div>
  );
}

export default Meme;
