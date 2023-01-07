import React from 'react'
import "./Product.css"

function Product(props) {
  const { name, viewDescription, price, img, quantity} = props.product
  
  return (
    <div className='product'>
        <img src={img} alt={name} onClick={() => props.onShowFullProduct(props.product)} />
        <h2 className='full-product-name'>{name}</h2>
        <p className='full-product-desc'>{viewDescription}</p>
        <p className='full-product-price'>{price}$</p>
        <p className='full-product-quantity'>{quantity > 0 ? `only: ${quantity} Left` : `Out Of Stock`}</p>
        <div className='full-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)}>+</div>
    </div>
  )
}

export default Product