import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Cart.css"
import OrderProduct from '../product/OrderProduct';
import CartContext from "../context/CartProvider";
import countTotalPrice from '../../utils/totalPriceCounter';


function Cart(props) {
  const { cart , setCart} = useContext(CartContext)

// function that remove OrderProduct from useState

const handleRemoveProducFromCart = (cartProduct) => {
  setCart(cart.filter(cartProduct => cartProduct.id !-- ))
}

  const showOrders = (cart) => {
    return (<div>
      {cart.map(cartProduct =>  (
        <OrderProduct key={cartProduct.id} product={cartProduct} handleRemoveProducFromCart={handleRemoveProducFromCart}/>
          ))}
          <div className='cart-products-total-price'>
            <p className='cart-total-price-title'>Total Price</p>
            <p className='cart-total-price'>${countTotalPrice(cart)}</p>
          </div>

          <div className='cart-products-items'>
            <p className='cart-total-products-title'>Total Products</p>
            <p className='cart-total-products'>{cart.length}</p>
          </div>

      <button className='cart-check-out-btn'><Link to={"/checkout"}>Checkot Now </Link></button>
    </div>)
  }

  const showNothing = () => {
    return (<div className='shop-cart-empty'>
      <h2>Cart is empty</h2>
    </div>)
  }


  return (
    <div className='shop-cart-container'>
    {cart.length > 0  ? 
      showOrders(cart) : showNothing()}
  </div>
  )
}

export default Cart