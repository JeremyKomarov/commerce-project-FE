import React from 'react'
import Navbar from './navbar/Navbar'
import "./Header.css"

function Header(props) {

  return (
    <header>
      <Navbar orders={props.orders} />
      <div className='header-main-banner'></div>
    </header>
  )
}

export default Header