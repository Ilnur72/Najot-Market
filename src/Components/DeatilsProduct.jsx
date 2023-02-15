import React from 'react'
import axios from 'axios';
import {useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProducts from "../Hooks/useProducts"
import DetailsPlaceholder from './DetailsPlaceholder';
import Header from './Header/Header';
const DeatilsProduct = () => {
    const [products, loading] = useProducts()

    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [rating, setRating] = useState([]);
    const productDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        setRating(response.data.rating)
    }
    productDetail()
    if(product.length ==0) {
        return
    }
    console.log(product);

  return (
    <>
    <Header
     />
     {!loading ? 

<section className='text-bg-light '>
<div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h1>Your Cart</h1>
    </div>
    <ul className="list-group my-3 shadow">
        <li className="list-group-item row d-flex align-items-center">
          <div className='col-4'>
            <img className='img-fluid' src={product.image} alt={product.title} />
          </div>
          <div className="col-md-6">
            <strong className='fs-3'>Category: {product.category}</strong>
            <h2 className='mt-3'>{product.title}</h2>
            <p className='fs-5'>{product.description}</p>
            <div className='d-flex justify-content-between'>
              <p className='fs-4'>${product.price}</p>
            <p className='fs-4'><i className='fa-solid fa-star text-warning'></i>{rating.rate} / {rating.count}</p>
            </div>
          </div>
        </li>
    </ul>
    
    <div className="d-flex justify-content-between">
      <Link to={"/"} className="btn btn-outline-success"><i className="fa-solid fa-arrow-left"></i> Back to Shopping</Link>
      <button className="btn btn-success">Proceed to payment <i className="fa-solid fa-arrow-right"></i></button>
    </div>
</div>
</section>
: <DetailsPlaceholder />
    
    }

 </>
  )
}

export default DeatilsProduct