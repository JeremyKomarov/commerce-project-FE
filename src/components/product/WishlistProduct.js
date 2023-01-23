import React from 'react'
import "./WishlistProduct.css"

function WishlistProduct(props) {
    const { name, price, img, quantity} = props.wishlistProducts

  return (
    <div className='wishlist-product'>
        <img src={img} alt={name} onClick={() => props.onShowFullProduct(props.product)} />
        <h2 className='wishlist-product-name'>{name}</h2>
        <p className='wishlist-product-price'>{price}$</p>
        <p className='wishlist-product-quantity'>{quantity > 0 ? `only: ${quantity} Left` : `Out Of Stock`}</p>
        <div className='wishlist-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.wishlistProducts)}>+</div>
    </div>
  )
}

export default WishlistProduct