import React from 'react'
import "./SearchProduct.css"
import { IoIosAddCircle } from "react-icons/io";


function SearchProduct(props) {
    const { img, name, price, quantity} = props.product

    const priceClass = quantity <= 0 ? 'priceOOS' : 'price';
    
  return (
    <div className='search-product-result'>
        <img src={img} alt={name}/>
        <h3>{name}</h3>
        <div className='search-product-result-right'>
            <p className={priceClass}>${price}</p>
            <IoIosAddCircle className='search-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)} />
        </div>
    </div>
  )
}

export default SearchProduct