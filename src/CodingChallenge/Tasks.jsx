import React, { useState } from 'react'
import "./Task.css"
function Tasks() {
    const [productName,setProductName]=useState("");
    const [productPrice,setProductPrice]=useState(0);
    const[products,setProducts]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);

    const handleChangeOne=(e)=>{
        setProductName(e.target.value);
    }

    const handleChangeTwo=(e)=>{
        setProductPrice(e.target.value);
    }

    const handleSubmit = ()=>{
        if(productName.trim()!=="" && (!isNaN(productPrice))){
            const productOne=parseInt(productPrice);
            const newProducts={
                name:productName,
                price:productOne
            }
            setProducts([...products,newProducts]);
            setTotalPrice(totalPrice+productOne);
        }
        setProductName("");
        setProductPrice("");
    }
  return (
    <div>
        <div className="bars">
            
       
        <label htmlFor="productName">Product Name</label>
        <input className='inputs' type="text" value={productName} onChange={handleChangeOne} required/>
        <label htmlFor="productprice">Product Price</label>
        <input className='inputs' type="text" value={productPrice} onChange={handleChangeTwo} required/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        <ul>
       {products.map((ele,index)=>(
        <li key={index}>{` Product : ${ele.name} | Product price : ${ele.price}`}</li>
       ))}
       </ul>

        <h4>Total price : {totalPrice}</h4>
    </div>
  )
}

export default Tasks