import React from 'react'
import "./FavoriteProduct.css"

function FavoriteProduct(props) {
    const { name, price, img, quantity} = props.favoriteProducts

  return (
    <div className='favorite-product'>
        <img src={img} alt={name} onClick={() => props.onShowFullProduct(props.product)} />
        <h2 className='favorite-product-name'>{name}</h2>
        <p className='favorite-product-price'>{price}$</p>
        <p className='favorite-product-quantity'>{quantity > 0 ? `only: ${quantity} Left` : `Out Of Stock`}</p>
        <div className='favorite-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.favoriteProducts)}>+</div>
    </div>
  )
}

export default FavoriteProduct