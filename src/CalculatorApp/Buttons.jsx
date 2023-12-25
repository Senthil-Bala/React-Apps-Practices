import React, { useState } from "react";
import "./Calculator.css";

function Buttons() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" value={value} />
        </div>
        <div className="buttons">
        <div className="row1">
          <input
            type="button"
            value="DE"
            onClick={(e) => setValue(value.slice(0, -1))}
          />
          <input type="button" value="AC" onClick={(e) => setValue("")} />
          <input
            type="button"
            value="/"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="."
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="row2">
          <input
            type="button"
            value="7"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="8"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="9"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="*"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="row3">
          <input
            type="button"
            value="4"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="5"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="6"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="+"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="row4">
          <input
            type="button"
            value="1"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="2"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="3"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="-"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="row5">
          <input
            type="button"
            value="00"
            onClick={(e) => setValue(value + e.target.value)}
          />

          <input
            type="button"
            value="0"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="="
            onClick={(e) => setValue(eval(value))}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
