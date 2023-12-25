// Description :
// Implement a button and timmer that will start from 10 and ends at 0 and tracks the counter untill the timer expires and button should disapper once timer expires

import React, { useState, useEffect, useRef } from "react";

function Max() {
  const [count, setcount] = useState(0);
  const [timeLeft, settimeLeft] = useState(20);
  const idRef = useRef(null);

  const clear = () => window.clearInterval(idRef.current);

  const increment = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    idRef.current = window.setInterval(() => {
      settimeLeft((prevTimeLeft)=> (prevTimeLeft > 0 ? prevTimeLeft-1 : 0));
    }, 500);

    return clear;
  },[]);

  useEffect(() => {
    if (timeLeft === 0) {
      clear();
    }
  }, [timeLeft]);
  return (
    <div>
      <h1>Count : {count}</h1>
      
      {timeLeft === 0 ? `Time Over your Max Count is ${count}` : (
        <div>
          <h1>TimeLeft : {timeLeft} Seconds</h1>
      <button onClick={increment}>+</button>
      </div>
      )}
    </div>
  );
}

export default Max;
