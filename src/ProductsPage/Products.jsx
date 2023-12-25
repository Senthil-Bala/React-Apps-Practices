import React,{useEffect, useState} from 'react'
import axios from 'axios';
import ProductsCards from "./ProductsCards"
function Products() {
    const [productsData, setproductsData] = useState([]);


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>{
            console.log(res.data);
            setproductsData(res.data)
        })
        .catch((e)=>console.log(e))
    },[])
  return (
    <div>
        {/* <ProductsCards productsData={productsData} /> */}

    </div>
  )
}

export default Products