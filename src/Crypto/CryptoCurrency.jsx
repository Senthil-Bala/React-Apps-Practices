import React, { useEffect, useState } from 'react'
import axios from "axios"
function Crypto() {
    const [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
        .then((res)=>{
            console.log(res.data)
        })
        .catch((e)=>console.log(e))
    },[])
  return (
    <div>
        Crypto
    </div>
  )
}

export default Crypto