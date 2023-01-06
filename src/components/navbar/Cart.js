import React, { useEffect } from 'react'
import "./Cart.css"
import OrderProduct from '../product/OrderProduct';

function Cart(props) {

    const showOrders = (props) => {
        return (<div>
          {props.orders.map(prd =>  (
            <OrderProduct key={prd.id} product={prd}/>
          ))}
          <div className='cart-total-price'>
            <p>Total Price</p>
            <p>${}</p>
            
          </div>
          <button className='cart-check-out-btn'>Checkout Now</button>
        </div>)
      }
      const showNothing = () => {
        return (<div className='shop-cart-empty'>
          <h2>Cart is empty</h2>
        </div>)
      }


  return (
    <div className='shop-cart-container'>
    {props.orders.length > 0 ? 
      showOrders(props) : showNothing()}
  </div>
  )
}

export default Cart