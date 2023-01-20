import React, { useState, useContext } from 'react'
import "./Home.css"
import ProductsContext  from "../context/ProductsProvider";
import CustomerContext  from "../context/CustomerProvider";
import Product from '../product/Product'
import FullProduct from '../product/FullProduct';
import FavoriteProduct from '../product/FavoriteProduct'

function Home(props) {
  const { products } = useContext(ProductsContext)
  const { customer } = useContext(CustomerContext)
  const [showFullProduct, setShowFullProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState();

  
  const onShowFullProduct = (product) => {
    setFullProduct(product);
    setShowFullProduct(!showFullProduct);
  }



  return (
    <div className='home-container'>
       {customer ? 
        <div className='favorite-products-container'>
          {customer.favoriteProducts.map(fPrd => (
            <FavoriteProduct key={fPrd.id} favoriteProducts={fPrd} handleAddProducToCart={props.handleAddProducToCart} /> 
          ))}
          
        </div>
        : 
        <div className='favorite-products-container-empty'>Log in</div>}

      <div className='products-container'>
          {products.map(prd => (
            <Product key={prd.id} product={prd} onShowFullProduct={onShowFullProduct} handleAddProducToCart={props.handleAddProducToCart}  />
            ))}
            {showFullProduct && <FullProduct product={fullProduct} handleAddProducToCart={props.handleAddProducToCart} onShowFullProduct={onShowFullProduct} />}
      </div>
    </div>
  )
}

export default Home