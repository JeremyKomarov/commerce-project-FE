import React, {useContext} from 'react'
import "./Cart.css"
import OrderProduct from '../product/OrderProduct';
import CartContext from "../context/CartProvider";


function Cart(props) {
  const { cart } = useContext(CartContext)

  
  const countTotalPrice = (cartProducts)  => {
      let totalPrice = 0
      cartProducts.forEach(product => {
        totalPrice += product.price;
      })
      return totalPrice
  }

  // const handleRemoveProducToCart = async (product) => {
    
  // }


  const showOrders = (cart) => {
    return (<div>
      {cart.map(cartProduct =>  (
        <OrderProduct key={cartProduct.id} product={cartProduct}/>
          ))}
          <div className='cart-products-total-price'>
            <p className='cart-total-price-title'>Total Price</p>
            <p className='cart-total-price'>${countTotalPrice(cart)}</p>
          </div>

          <div className='cart-products-items'>
            <p className='cart-total-products-title'>Total Products</p>
            <p className='cart-total-products'>{cart.length}</p>
          </div>

      <button className='cart-check-out-btn'>CheckOut Now</button>
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