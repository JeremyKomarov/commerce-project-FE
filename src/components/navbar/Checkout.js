import React, { useState, useRef, useContext } from 'react'
import CartContext from "../context/CartProvider"
import CustomerContext from "../context/CustomerProvider"
import AuthContext from '../context/AuthProvider' 
import OrderProduct from "../product/OrderProduct"
import { checkOutOrder } from "../../services/api"
import "./Checkout.css"
import countTotalPrice from '../../utils/totalPriceCounter';




function Checkout(props) {
    const {cart} = useContext(CartContext)
    const {customer} = useContext(CustomerContext)
    const {auth} = useContext(AuthContext)
    const [address , setAddress] = useState(``)
    const [name , setName] = useState(``)



    const handleSubmit = async (e) => {
        e.preventDefault();
            const newOrderBody ={
                customerId: customer.customer.id,
                orderDate: 2022-12-12,
                shippingAddress: address,
                totalProducts: cart.length,
                totalPrice: countTotalPrice(cart),
            }
            console.log(newOrderBody);

            const res = await checkOutOrder(newOrderBody, auth)
      
    }

    console.log(cart);



    return (
        <div className='checkout-container'>
        <form className='checkout-form' onSubmit={handleSubmit}>

            <div className='checkout-address'>
                <label htmlFor='address'>Address:</label>
                <input
                    type="text"
                    id='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div className='checkout-name'>
                <label htmlFor='address'>Name:</label>
                <input
                   type="text"
                   id='name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                   />
            </div>

            <button className='checkout-btn' type='submuit' disabled={!address || !name}>
            Finish Order
            </button>
        </form> 

        <div className='checkout-cart'>
            {cart.map(prd => (
               <OrderProduct key={prd.id} product={prd}/>
            ))}

        </div>
                 
        </div>
      )
    }
    

export default Checkout