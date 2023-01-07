import React from 'react'
import Navbar from './navbar/Navbar'
import "./Header.css"

function Header(props) {

  return (
    <header>
      <Navbar cartProducts={props.cartProducts} />
      <div className='header-main-banner'></div>
    </header>
  )
}

export default Header