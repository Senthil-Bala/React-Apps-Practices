import React, { useEffect, useState } from "react";
import axios from "axios";

function Dictionary() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
        setSearch("");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {info.map((entry, index) => (
        <div key={index}>
          <h2>Word: {entry.word}</h2>
          {entry.meanings.map((meaning, idx) => (
            <div key={idx}>
              <h3>Part of Speech: {meaning.partOfSpeech}</h3>
              <ul>
                {meaning.definitions.map((definition, i) => (
                  <li key={i}>
                    <strong>Definition:</strong> {definition.definition}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dictionary;
