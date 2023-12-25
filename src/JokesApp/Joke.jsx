import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Joke.css";
function Joke() {
  const [joke, setJoke] = useState([]);

  const generate = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data);
        setJoke(res.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    generate();
  },[]);
  return (
    <div className="whole">
    <div className="Container">
      <h1 className="heading">Random Joke Generator</h1>
      <h3 className="jokebar">{joke.value}</h3>
      <button className="btn" onClick={generate}>Click here to get New Joke</button>
    </div>
    </div>
  );
}

export default Joke;
