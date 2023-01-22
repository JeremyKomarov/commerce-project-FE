import React,{useContext} from 'react'
import AuthContext from "../context/AuthProvider"
import CustomerContext from "../context/CustomerProvider"
import {deleteCustomer} from "../../services/api"



function Profile() {
    const { auth , setAuth } = useContext(AuthContext);
    const { customer , setCustomer } = useContext(CustomerContext);
    
    const handleDeleteCustomerBtn = async () => {
        const res = await deleteCustomer(customer.customer.id, auth)
        console.log(res.data);
    }


  return (
    <div><button onClick={handleDeleteCustomerBtn}>Click me</button></div>
  )
}

export default Profile