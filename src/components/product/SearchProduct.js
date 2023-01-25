import React from 'react'
import "./SearchProduct.css"
import { IoIosAddCircle } from "react-icons/io";


function SearchProduct(props) {
    const { img, name, price,} = props.product
  return (
    <div className='search-product-result'>
        <img src={img} alt={name}/>
        <h3>{name}</h3>
        <div className='search-product-result-right'>
            <p>${price}</p>
            <IoIosAddCircle className='search-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)} />
        </div>
    </div>
  )
}

export default SearchProduct