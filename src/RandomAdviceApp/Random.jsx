import React,{useEffect,useState} from 'react'
import axios from 'axios'
function Random() {
    const [advice, setadvice] = useState('')

    const handleGenerate = ( ) =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{
            console.log(res.data.slip.advice);
            setadvice(res.data.slip.advice)
        })
        .catch((e)=>console.log(e))

    }

    useEffect(()=>{handleGenerate()},[])
  return (
    <div>
        <h1>Advice Generator App</h1>
        <button onClick={handleGenerate}>Generate</button>
        <h1>{advice}</h1>
    </div>
  )
}

export default Random