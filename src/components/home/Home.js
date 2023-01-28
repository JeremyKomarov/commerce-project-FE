import React, { useState, useContext } from 'react'
import "./Home.css"
import ProductsContext  from "../context/ProductsProvider";
import Product from './Product'
import FullProduct from './FullProduct';

function Home(props) {
  const { products } = useContext(ProductsContext)


  const [showFullProduct, setShowFullProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState();


  const onShowFullProduct = (product) => {
    console.log(product);
    setFullProduct(product);
    setShowFullProduct(!showFullProduct);
  }

  return (
    <div className='home-container'>
      <div className='products-container'>
          {products.map(prd => (
            <Product 
              key={prd.id} 
              product={prd} 
              handleAddProducToCart={props.handleAddProducToCart} 
              handleProducToWishlist={props.handleProducToWishlist}
              handleRemoveProducFromWishlist={props.handleRemoveProducFromWishlist}
              onShowFullProduct={onShowFullProduct} 
                />
            ))}
            {showFullProduct && 
              <FullProduct 
                product={fullProduct} 
                handleAddProducToCart={props.handleAddProducToCart} 
                handleProducToWishlist={props.handleProducToWishlist} 
                handleRemoveProducFromWishlist={props.handleRemoveProducFromWishlist}
                onShowFullProduct={onShowFullProduct} 
                />
                }
      </div>
    </div>
  )
}

export default Home