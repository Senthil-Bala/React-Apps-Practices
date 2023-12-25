import Axios from 'axios'; 
import { useState } from 'react'; 

function App() { 
  const [artist, setArtist] = useState(""); 
  const [song, setSong] = useState(""); 
  const [lyrics, setLyrics] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");

  function searchLyrics() { 
    if (artist === "" || song === "") { 
      return; 
    } 
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(res => { 
        console.log(res.data.lyrics); 
        setLyrics(res.data.lyrics); 
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setLyrics("");
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setErrorMessage(`Error: ${error.response.status} - ${error.response.data.error}`);
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage("Error: No response received");
        } else {
          // Something happened in setting up the request that triggered an error
          setErrorMessage("Error: Request failed");
        }
      });
  } 

  return ( 
    <div className="App"> 
      <h1>Lyrics Finder</h1> 
      <input 
        className="inp" 
        type="text"
        placeholder='Artist name'
        onChange={(e) => { setArtist(e.target.value) }} 
      /> 
      <input 
        className="inp" 
        type="text"
        placeholder='Song name'
        onChange={(e) => { setSong(e.target.value) }} 
      /> 
      <button 
        className="btn"
        onClick={() => searchLyrics()}
      > 
        Search
      </button> 
      <hr /> 
      <div>
        {errorMessage && <h4>{errorMessage}</h4>}
        {lyrics && <p>{lyrics}</p>}
      </div>
    </div> 
  ); 
} 

export default App;
