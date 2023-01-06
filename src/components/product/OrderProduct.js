import React from 'react'
import "../product/OrderProduct.css"

function OrderProduct(props) {
  return (
    <div className='order-product'>
        <img src={props.product.img} alt={props.product.name} />
        <h2>{props.product.name}</h2>
        <p>{props.product.price}$</p>
    </div>
  )
}

export default OrderProduct