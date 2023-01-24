import React, { useState, useContext, useRef, useEffect } from 'react'
import "./SignIn.css"
import AuthContext from "../../context/AuthProvider";
import CustomerContext from "../../context/CustomerProvider";
import CartContext from "../../context/CartProvider";
import WishlistContext from "../../context/WishlistProvider";
import { authenticate, getFullCustomerProfile } from "../../../services/api"


function SignIn() {
  const { setAuth } = useContext(AuthContext);
  const { setCustomer } = useContext(CustomerContext);
  const { setCart } = useContext(CartContext);
  const { setWishlist } = useContext(WishlistContext);

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, []);

useEffect(() => {
    setErrMsg("");
}, [username, password]);


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const jwtRes = await authenticate({ username, password} )
      const profileAndProductsRes = await getFullCustomerProfile(username, jwtRes.data.jwt)      

      setSuccess(true);
      setAuth(jwtRes.data.jwt)
      setCustomer(profileAndProductsRes.data)

      if(profileAndProductsRes.data.cartProducts) setCart(profileAndProductsRes.data.cartProducts)
      if(profileAndProductsRes.data.wishListProducts) setWishlist(profileAndProductsRes.data.cartProducts)
      
      setUsername("");
      setPassword("");
  } catch (err) {
      if (!err.response) {
          setErrMsg("No Server Response");
      } else if (err.response.status === 403) {
          setErrMsg("Incorrect Username Or Password");
      } else {
          setErrMsg("Authentication Failed");
      }
      errRef.current.focus();
  }
};

  return (
    <>
      {success ? (
        <div className='sign-in-container'>
          <h1>You are logged in!</h1>
          <br />
        </div>
            ) : (
                <div className='sign-in-container'>
                    <p ref={errRef} className={errMsg ? "error_mes": "offscreen"}>
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form className='sign-in-form' onSubmit={handleSubmit}>
                        <label htmlFor="username">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button className='sign-in-btn' type="submit" disabled={!username || !password}>
                            Sign In
                        </button>
                    </form>
                </div>
            )}
            </>
  )
}

export default SignIn