import React from 'react'
import "./Wishlist.css"
import WishlistContext from "../context/WishlistProvider"
import WishlistProduct from './WishlistProduct'

import { useContext } from 'react'


function Wishlist(props) {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className='wishlist-container-main'>
      <div className='wishlist-container'>
      {wishlist.map(prd => (
            <WishlistProduct  
              key={prd.id} 
              product={prd} 
              handleAddProducToCart={props.handleAddProducToCart} 
              handleRemoveProducFromWishlist={props.handleRemoveProducFromWishlist}
                />
            ))}
        
      </div>
    </div>
  )
}

export default Wishlist