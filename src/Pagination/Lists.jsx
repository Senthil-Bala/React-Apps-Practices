import React from 'react'

function Lists({posts,loading}) {
  return (
    <div>
        {loading && <h1>Loading ....</h1>}
        {posts.map((ele)=>(
            <h5 key={ele.id}>{`${ele.id} - ${ele.title}`}</h5>
        ))}
    </div>
  )
}

export default Lists