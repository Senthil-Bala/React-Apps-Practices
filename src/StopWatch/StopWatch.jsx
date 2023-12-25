import React,{useState} from 'react'

function StopWatch() {
    const [timer, settimer] = useState(0);

    const starter=()=>{
        window.myTimer = setInterval(()=>{
            settimer((timer)=>timer+1)
        },50)
    }

    const stoper =()=>{
        clearInterval(window.myTimer);
    }
    const reseter=()=>{
        clearInterval(window.myTimer);
        settimer(0)
    }
  return (
    <div>
        <h1>StopWatch</h1>
        <hr />
        <div className="timers d-flex justify-content-between px-3 g-3 my-3">
        <h1>Timer : </h1>
        
        <h1 className='mx-4'>{Math.trunc(timer/60)} mins</h1>
        <h1 className='mx-2'>{timer%60} secs</h1>
        </div>
        <div className="btns my-3">
        <button onClick={starter} className='mx-3 bg-primary text-white fw-bolder p-2 rounded btn-outline-success'>Start</button>
        <button onClick={stoper} className='mx-3 bg-primary text-white fw-bolder p-2 rounded btn-outline-success'>Stop</button>
        <button onClick={reseter} className='mx-3 bg-primary text-white fw-bolder p-2 rounded btn-outline-success'>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch