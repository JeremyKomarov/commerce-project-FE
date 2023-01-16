import React from 'react'
import "./Header.css"
import Navbar from './navbar/Navbar'

function Header(props) {
  console.log(props);

  return (
    <header>
      <Navbar handleAddProducToCart={props.handleAddProducToCart} />
      <div className='header-main-banner'></div>
    </header>
  )
}

export default Header