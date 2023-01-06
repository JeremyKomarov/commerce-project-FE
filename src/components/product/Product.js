import React from 'react'
import "./Product.css"

function Product(props) {
  return (
    <div className='product'>
        <img src={props.product.img} alt={props.product.name} onClick={() => props.onShowFullProduct(props.product)} />
        <h2 className='full-product-name'>{props.product.name}</h2>
        <p className='full-product-desc'>{props.product.viewDescription}</p>
        <p className='full-product-price'>{props.product.price}$</p>
        <div className='full-product-add-to-cart' onClick={() => props.onAddToOrder(props.product)}>+</div>
    </div>
  )
}

export default Product