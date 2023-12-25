import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Filter() {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let searchString = 'https://jsonplaceholder.typicode.com/posts';

    if (inputValue) {
      searchString = `https://jsonplaceholder.typicode.com/posts?userId=${inputValue}`;
    }

    axios
      .get(searchString)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((e) => console.log(e));
  }, [inputValue]);

  return (
    <div>
      <h1>Filter Search</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <hr />
      {inputValue ? (
        <div>
          <p>{datas.length > 0 ? datas.body : 'No data found'}</p>
        </div>
      ) : (
        datas.map((ele) => (
          <div key={ele.id}>
            <ul>
              <li>{ele.body}</li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Filter;
