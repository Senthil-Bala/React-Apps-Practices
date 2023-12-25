import React, { useState, useEffect } from "react";
import MovieTrailers from "movie-trailer";
import ReactPlayer from "react-player";

function MovieTrailer() {
  const [video, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    MovieTrailers(video)
      .then((res) => {
        setUrl(res);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error: Trailer not found");
        setUrl(""); // Clear the URL if trailer is not found
      });

    setVideo("");
  };

  return (
    <div>
      <input
        type="text"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {errorMessage && <h1>{errorMessage}</h1>}
      {url && <ReactPlayer url={url} controls={true} />}
    </div>
  );
}

export default MovieTrailer;
