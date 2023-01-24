import React, { useState, useContext, useRef, useEffect } from 'react'
import "./SignIn.css"
import AuthContext from "../../context/AuthProvider";
import CustomerContext from "../../context/CustomerProvider";
import CartContext from "../../context/CartProvider";
import WishlistContext from "../../context/WishlistProvider";
import { authenticate, getFullCustomerProfile } from "../../../services/api"
import { useForm } from 'react-hook-form';


function SignIn() {
  const { setAuth } = useContext(AuthContext);
  const { customer , setCustomer } = useContext(CustomerContext);
  const { setCart } = useContext(CartContext);
  const { setWishlist } = useContext(WishlistContext);
  const [errMsg, setErrMsg] = useState("");


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try{
        const jwtRes = await authenticate(data)
        setAuth(jwtRes.data.jwt)
        const profileAndProductsRes = await getFullCustomerProfile(data.username, jwtRes.data.jwt)
        setCustomer(profileAndProductsRes.data)

        if(profileAndProductsRes.data.cartProducts) setCart(profileAndProductsRes.data.cartProducts)
        if(profileAndProductsRes.data.wishlistProducts) setWishlist(profileAndProductsRes.data.cartProducts)

        reset();

        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response.status === 403) {
                setErrMsg("Incorrect Username Or Password");
            } else {
                setErrMsg("Authentication Failed");
            }
        }
    
   
  };
  return (
    <>
    {customer ? (
        <div className='signin-container'>
          <h1>You are logged in!</h1>
          <br />
        </div>
            ) : (
        <div className='signin-container'>
            <h2>Login</h2>
            <form className='signin-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='signin-form-field'>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id='username'
                        name='username'
                        {...register('username')}
                    />
                </div>

                <div className='signin-form-field'>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password" 
                        id='password'
                        name='password'
                        {...register('password')}
                    />
                </div>
                {errMsg}
                <button className='signin-btn' type='submut'>Sign In</button>
            </form>
        </div>
        )}
    </>
  )
}


export default SignIn