import React, { useState, useEffect } from "react";
import axios from "axios";
function Country() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    if (countryName) {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`
        )
        .then((res) => {
          if (res.data) {
            setCountryData(res.data);
            console.log(res.data);
            setErrorMessage(null);
          } else {
            setErrorMessage(res.message);
            setCountryData(null);
          }
        })
        .catch((e) => {
          console.log(e);
          setErrorMessage(e.message);
          setCountryData(null);
        });
    }
    setCountryName("");
  };

  return (
    <div>
      <h1>Country App</h1>
      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="countryInfo">
        <h1>{errorMessage}</h1>

        <div className="countryInfo">
          <h1>{errorMessage}</h1>

          <div>
          {countryData.length > 0 && (
            <div>
              <h1>{countryData[0].capital}</h1>
              <img src={countryData[0].flags.png} alt="" />
              <h1>Continents : {countryData[0].continents}</h1>
              <h2>Rupee : {countryData[0].currencies.INR.name}</h2>
              <h2>Symbol : {countryData[0].currencies.INR.symbol}</h2>
              <h6>Languages : {countryData[0].languages.map((ele,index)=>(
                <li key={index}>{ele}</li>
              ))}</h6>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
