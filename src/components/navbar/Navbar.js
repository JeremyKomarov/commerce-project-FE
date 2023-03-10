import React, { useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaShoppingBag, FaTimes, FaBars, FaUserAlt, FaRegHeart } from "react-icons/fa";
import FullCustomerDetailsContext from '../context/FullCustomerDetailsProvider';
import Cart from '../cart/Cart'
import SignIn from '../userLoginReg/SignIn';
import Search from '../search/Search';



function Navbar(props) {
  const { fullCustomerDetails, setFullCustomerDetails } = useContext(FullCustomerDetailsContext)
  const [ activeIndex, setActiveIndex ] = useState(null);
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ signInOpen, setSignInOpen ] = useState(false)
  const [ mobileNavOpen, setMobileNavOpen ] = useState(true)
  const [ wishlistOpen, setWishlistOpen ] = useState(false)

  
  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
    setCartOpen(false)
    setSignInOpen(false)
    setWishlistOpen(false)
  }

  const handleLogoBtn = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(false)
    setWishlistOpen(false)
    setMobileNavOpen(true)
  }

  const handleLogInBtn = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(!signInOpen)
    setWishlistOpen(false)
  }

  const handleLogOutBtn = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(false)
    setFullCustomerDetails(``)
    window.location.reload()
  }

  const handleWishlist = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(false)
    setMobileNavOpen(!mobileNavOpen)
  }

  const handleProfile = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(false)
    setWishlistOpen(false)
    setMobileNavOpen(!mobileNavOpen)

  }

  const handleSignUp = (index) => {
    handleIndex(index)
    setCartOpen(false)
    setSignInOpen(false)
    setWishlistOpen(false)
    setMobileNavOpen(!mobileNavOpen)
  }

  const handleCart = (index) => {
    handleIndex(index)
    setCartOpen(!cartOpen)
    setSignInOpen(false)
    setWishlistOpen(false)
    setMobileNavOpen(!mobileNavOpen)
  }

 

  const handleIndex = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index); 
  }



  useEffect(() => {
    if(fullCustomerDetails){
        setTimeout(() => {
          setSignInOpen(false)
        }, 3000);
    }
}, [fullCustomerDetails])

  return (
    <nav className='nav-container'>

        <ul className='navbar'>
          <Link to="/" className="nav-logo" onClick={() => handleLogoBtn(null)}>
              <svg id="logo-16" width="90" height="40" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" className="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" className="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" className="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" className="ccustom" fill="#1F84EF"></path> </svg>
          </Link>

          <Search handleAddProducToCart={props.handleAddProducToCart}/>
          
          <div className={`nav-routes ${!mobileNavOpen ? 'active' : ""}`}>
            {
              !fullCustomerDetails ?  
              <li className={`nav-login ${activeIndex === 0 ? 'active' : ''}`} onClick={() =>handleLogInBtn(0)}>
                Login
              </li> :
              <li className={`nav-logout`} onClick={() => handleLogOutBtn(null)}>
                Log Out
              </li>
            }

            {
              !fullCustomerDetails &&    
              <li className={`nav-signup ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleSignUp(1)}>
                <Link to="/signup">Sign Up</Link>
              </li>  
            }


            <li className={`wishlist-btn ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleWishlist(2)}>
              <Link to="/wishlist"><FaRegHeart /></Link>
            </li> 

            {
              fullCustomerDetails &&  
              <li className={`profile-btn ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleProfile(3)}>
                <Link to="/profile"><FaUserAlt /></Link>
              </li> 
            }
           
            <li className={`shop-cart-btn ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleCart(4)}>
              <FaShoppingBag />
            </li>

          </div>

        <div className="nav-mobile" onClick={handleMobileNav}>{!mobileNavOpen ? <FaTimes/> : <FaBars/>}</div>
      </ul>
        {signInOpen && <SignIn />}
        {cartOpen && <Cart />}
     </nav>
  )
}

export default Navbar