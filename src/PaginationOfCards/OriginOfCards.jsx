import React, { useEffect , useState } from 'react';
import axios from 'axios';
import CardsPagination from "./CardsPagination";
import CardsList from "./CardsList";

function OriginOfCards() {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cardsPage, setcardsPage] = useState(1);
    const [cardsPerPage, setcardsPerPage] = useState(10);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            console.log(res.data);
            setLoading(true);
            setCardsData(res.data); // total cards data
            setLoading(false);
        })
        .catch((e)=>console.log(e))
    },[])

    //  seperate pages Card data

    const lastIndex = cardsPage*cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCards = cardsData.slice(firstIndex,lastIndex);

    // Paginate with setting the cardPage number

    const paginate = cardPageNumber => setcardsPage(cardPageNumber);
  return (
    <div>
        <h1>Pagination of Cards</h1>
        <CardsList loading={loading} currentCards={currentCards}/>
        <CardsPagination cardsPerPage={cardsPerPage} totalCards={cardsData.length} paginate={paginate} />
    </div>
  )
}

export default OriginOfCards