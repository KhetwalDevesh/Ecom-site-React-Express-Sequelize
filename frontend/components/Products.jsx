import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import useStore from '../globalStore';
let baseURL;
// baseURL = "http://localhost:5000/api/products/allProducts";
// const tempBaseURL = "http://localhost:5000/api/products/allProducts";
baseURL = "innocenti.onrender.com/products";
const tempBaseURL = "innocenti.onrender.com/products";
const Products = () => {
    const {typeFilters,costFilters} = useStore();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [typeFilter,setTypeFilter] = useState([]);
    const [costFilter,setCostFilter] = useState([]);

    if(typeFilters.length)
          {
            baseURL=tempBaseURL;
            baseURL+='?'
            typeFilters.forEach((type)=>{
            baseURL+=`type[]=${type}&`;
            });
          }
          
    useEffect(()=>{
      async function fetchProducts(){
        try{
          setLoading(true);
          const res = await axios.get(baseURL);
          setLoading(false);
          const resData = [...res.data];
          setProducts(resData);
          console.log(products);
        }
        catch(error)
        {
          console.log("here");
          console.log(error);
        }
      }
      fetchProducts();
    },[typeFilters]);
  return (
    <div className='store-products-container'>
      <span className='shoe-header'>Shoes</span>
      {loading?<div className='loading'>Loading...</div>:<></>}
    <div className='store-products'>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="product-item"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt=""
                width="250px"
              />
            </Link>
            <br />
            <span>{product.name}</span>
            <span>{product.brand}</span>
            <span>₹{product.price}</span>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Products