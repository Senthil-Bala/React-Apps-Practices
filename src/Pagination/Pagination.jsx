import React from 'react'

function Pagination({totalPosts,postsPerPage,paginate}) {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        {pageNumbers.map((number)=>(
            <a href="!#" onClick={()=>{paginate(number)}}>
           <button key={number} >{number}</button>
           </a>
        ))}
    </div>
  )
}

export default Pagination