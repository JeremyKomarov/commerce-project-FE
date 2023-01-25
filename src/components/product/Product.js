import React, {useContext} from 'react'
import "./Product.css"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";



function Product(props) {
  const { name, viewDescription, price, img, quantity} = props.product
  console.log(props);




  
  return (
    <div className='product'>
        <div className='product-img-container'>
          <img src={img} alt={name} onClick={() => props.onShowFullProduct(props.product)} />
        </div>
        <h2 className='product-name'>{name}</h2>
        <p className='product-desc'>{viewDescription}</p>
        <p className='product-price'>{price}$</p>
        <div className='product-botton'>
          <p className='product-quantity'>{quantity > 0 ? `only: ${quantity} Left` : `Out Of Stock`}</p>
          <div className='product-right'>
            <FaRegHeart className='product-wish-btn' onClick={() => props.handleProducToWishlist(props.product)} />
            <IoIosAddCircle className='product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)} />
          </div>
        </div>
    </div>
  )
}

export default Product