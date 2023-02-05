import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export const baseURL = "http://localhost:5000/api/products/allProducts?type=Sneakers";
const Products = () => {
    const [products,setProducts] = useState([]);
    const [filterArray,setFilterArray] = useState([]);
    useEffect(()=>{
      async function fetchProducts(){
        try{
          const res = await axios.get(baseURL);
          const resData = [...res.data];
          setProducts(resData);
          console.log(products);
        }
        catch(error)
        {
          console.log(error);
        }
      }
                fetchProducts();
    },[]);
  return (
    <div className='store-products-container'>
      <span className='shoe-header'>Shoes</span>
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