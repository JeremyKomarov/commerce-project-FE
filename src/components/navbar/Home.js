import React, {useState} from 'react'
import Product from '../product/Product'
import FullProduct from '../product/FullProduct';
import "./Home.css"

function Home(props) {
  const [showFullProduct, setShowFullProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState();

  const onShowFullProduct = (product) => {
    setFullProduct(product);
    setShowFullProduct(!showFullProduct);
  }

  return (
    <div className='home-container'>
      <div className='products-container'>
          {props.products.map(prd => (
            <Product key={prd.id} product={prd} onShowFullProduct={onShowFullProduct} onAddToOrder={props.onAddToOrder}  />
            ))}
            {showFullProduct && <FullProduct product={fullProduct} onAddToOrder={props.onAddToOrder} onShowFullProduct={onShowFullProduct} />}
      </div>
    </div>
  )
}

export default Home