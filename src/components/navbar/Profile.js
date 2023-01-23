import React,{useContext} from 'react'
import AuthContext from "../context/AuthProvider"
import CustomerContext from "../context/CustomerProvider"
import CartContext from "../context/CartProvider"
import {deleteCustomer} from "../../services/api"
import { useNavigate } from 'react-router-dom'



function Profile() {
    const { auth , setAuth } = useContext(AuthContext);
    const { customer , setCustomer } = useContext(CustomerContext);
    const { cart , setCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    
    const handleDeleteCustomerBtn = async () => {
        const res = await deleteCustomer(customer.customer.id, auth);
        setAuth({});
        setCustomer()
        setCart([])
        navigate('/', {replace: true});

        
    }


  return (
    <div><button onClick={handleDeleteCustomerBtn}>Click me</button></div>
  )
}

export default Profile