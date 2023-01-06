import React from 'react'
import "./FullProduct.css"

function FullProduct(props) {
  return (
    <div className='full-product'>
      <div>
        <img src={props.product.img} alt={props.product.name} onClick={() => props.onShowFullProduct(props.product)} />
        <h2 className='full-product-name'>{props.product.name}</h2>
        <p className='full-product-desc'>{props.product.fullDescription}</p>
        <p className='full-product-price'>{props.product.price}$</p>
        <div className='full-product-add-to-cart' onClick={() => props.onAddToOrder(props.product)}>+</div>
      </div>
    </div>
  )
}

export default FullProduct