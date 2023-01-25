import React from 'react'
import "./FullProduct.css"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";



function FullProduct(props) {
  const { name, fullDescription, price, img, quantity} = props.product

  return (
    <div className='full-product'>
    <div className='full-product-product-img-container'>
      <img src={img} alt={name} onClick={() => props.onShowFullProduct(props.product)} />
    </div>
    <h2 className='full-product-name'>{name}</h2>
    <p className='full-product-desc'>{fullDescription}</p>
    <p className='full-product-price'>{price}$</p>
    <div className='full-product-botton'>
      <p className='full-product-quantity'>{quantity > 0 ? `only: ${quantity} Left` : `Out Of Stock`}</p>
      <div className='full-product-right'>
        <FaRegHeart className='full-product-wish-btn' />
        <IoIosAddCircle className='full-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)} />
      </div>
    </div>
</div>
  )
}

export default FullProduct