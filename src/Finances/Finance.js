import React from "react";
import Image from "../assests/atm.png";
import "./Finance.css";
function Finance() {
  return (
    <div id="parent">
      <div id="parent1">
        <h1>One app the world loves ...</h1>
        <h3>
          Open a free account in few minuts by using your phone number and email
          id
        </h3>
        <div id="child1">
          <button>Get started</button>
          <h4>Now its Free..</h4>
        </div>
      </div>
      <div id='child2'>
        <img src={Image} alt="" />
        <h4>Enjoy the Services</h4>
      </div>
    </div>
  );
}

export default Finance;
