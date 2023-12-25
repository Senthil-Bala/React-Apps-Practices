import React ,{useState} from 'react'
import Progress from "./Progress"
function Input() {
    const [value,setValue]=useState(0)
  return (
    <div className='text-center rounded-2 '>
      <h1>Progress Bar</h1>
        <Progress width={value} />
        <input className='my-3 rounded-2  p-1 bg-body-light outline-0 ' type="number" onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}

export default Input