import React from 'react'

function CardsPagination({totalCards,cardsPerPage,paginate}) {
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalCards/cardsPerPage);i++){
        pageNumbers.push(i);
    }

  return (
    <div>
        {pageNumbers.map((ele)=>(
            <a href="!#"  onClick={()=>{paginate(ele)}}>
            <button>{ele}</button>
            </a>
        ))}
    </div>
  )
}

export default CardsPagination