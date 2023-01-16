import React from 'react'
import "./SearchProduct.css"

function SearchProduct(props) {
    const { img, name, price,} = props.product
  return (
      <div className='search-product-result'>
                        <img src={img} alt={name}/>
                        <h3>{name}</h3>
                        <div className='search-product-result-right'>
                            <p>${price}</p>
                            <div className='search-product-add-to-cart' onClick={() => props.handleAddProducToCart(props.product)}>+</div>
                        </div>
                    </div>
  )
}

export default SearchProduct