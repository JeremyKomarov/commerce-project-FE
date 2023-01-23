import React, { useState, useContext } from 'react'
import "./Home.css"
import ProductsContext  from "../context/ProductsProvider";
import CustomerContext  from "../context/CustomerProvider";
import Product from '../product/Product'
import FullProduct from '../product/FullProduct';

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