import React,{useState} from 'react'

function Converter() {
    const [celsius, setcelsius] = useState(0);
    const [farenheit, setfarenheit] = useState(32);

    const handleCelsiusChange=(e)=>{
        const celsi=e.target.value;
        setcelsius(celsi);
        setfarenheit((parseFloat(celsi)*9)/5+32);
      
    }
    const handleFarenheitChange=(e)=>{
        const faren=e.target.value;
        setfarenheit(faren);
        setcelsius(((parseFloat(faren)-32)*5)/9);
        
    }
  return (
    <div className='text-center p-3'>
        <label htmlFor="celsius"> Celsius</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
        <label htmlFor="celsius"> Farenheit</label>
        <input type="number" value={farenheit} onChange={handleFarenheitChange} />
        <h1>Celsius :{celsius}</h1>
        <h1> Farenheit :{farenheit}</h1>
    </div>
  )
}

export default Converter