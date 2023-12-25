import React from 'react'
import "./Progress.css"
function Progress({width:inputWidth}) {
  return (
    <div className='container'>
        {inputWidth >=0 && inputWidth <=100 ? (
            <div className='inner' style={{
                width:`${inputWidth}%`
            }}>
                {inputWidth}%
                </div>
        ) : (
            alert('Enter a value more than 0 and less than 100')
        )}

    </div>
  )
}

export default Progress