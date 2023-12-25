import React from 'react'
import { useState } from 'react';
import validator from 'validator';
function Validator() {
    const [message, setMessage] = useState("");
    const passwordCheck =(value)=>{
        if(validator.isStrongPassword(value,{
            minLength:8,
            minNumbers:1,
            minLowercase:1,
            minUppercase:1,
            minSymbols:1
        })){
            setMessage("Is Strong Password")
        }
        else{
            setMessage("IS not STrong password")
        }
    }
  return (
    <div>
        <h1>Password Checker</h1>
<input  onChange={(e)=>{passwordCheck(e.target.value)}} />
<h1>{message}</h1>
    </div>
  )
}

export default Validator