import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import "./Challenge.css"
function Challenge() {
  const [started, setStarted] = useState(false);
  const [showItems, setshowItems] = useState(false);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [products, setproducts] = useState([]);
  const [total, settotal] = useState(0);
  const [remaining, setremaining] = useState(40000);

  const handleAdd = () => {
    setshowItems(true);
    if (name.trim() !== "" && !isNaN(price)) {
      let value = parseInt(price);
      let newProducts = {
        productName: name,
        productPrice: value,
      };
  
      let newTotal = total + value;
      // let newRemaining = remaining - total;
  
      setproducts([...products, newProducts]);
      settotal(newTotal);
      setremaining(prevRemaining=>prevRemaining-value);
    }
    setname("");
    setprice(0);
  };

  // const handleDelete=(e,index)=>{
  //     let updated=[...products]
  //     updated.splice(index,1);
  //     setproducts(updated)
  // }

  return (
    <div className="container text-center d-flex flex-column p-3">
      <h1 className="title">Expense Tracker</h1>
      <button
      className="start-button mt-3"
        onClick={() => {
          setStarted(!false);
        }}
      >
        Lets get started
      </button>
      {started ? (
        <div className="container field mt-4">
          <TextField
            className="mt-2 textArea"
            id="outlined-basic"
            label="Description Name"
            variant="outlined"
            placeholder="Enter your Description Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
          />
          <TextField
            type="number"
            className="mt-2 textArea"
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            placeholder="Enter your product Price"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
            required
          />
          <Button variant="contained" className="mt-2 add-btn" onClick={handleAdd}>
            Add Transaction
          </Button>

          {/* <div className="container mt-5">
        {products.map((ele, index) => (
            <div>
                <h3>Your Items are : </h3>
          <h4
            key={index}
          >{`Description : ${ele.productName} || Price : ${ele.productPrice}`}</h4>
          <button onClick={(e)=>{handleDelete(e,index)}}>delete</button>
        </div>
        ))}
        <h2>Total : {total}</h2>
        <h2>Remaining Balance : {remaining}</h2>
      </div> */}
        </div>
      ) : null}

      {/* Tables */}

      {showItems && (
        <div>
          <Table striped bordered hover variant="dark" className="mt-4">
            <thead>
              <tr>
                <th>List No</th>
                <th>Description </th>
                <th>Amount / Expense</th>
                <th>Total Expense</th>
                <th>Remaining Amount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((ele, index) => (
                 <tr>
                 <td>{`${index+1}`}</td>
                 <td>{ele.productName.toUpperCase()}</td>
                 <td>Rs.{ele.productPrice}</td>
                 <td>Rs.{index === products.length - 1 ? total : 0}</td>
                 <td>Rs.{remaining}</td>
               </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default Challenge;
