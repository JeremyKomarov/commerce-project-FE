import React, {useState, useContext} from 'react'
import Product from '../product/Product'
import FullProduct from '../product/FullProduct';
import "./Home.css"
import ProductsContext  from "../context/ProductsProvider";

function Home(props) {
  const { handleAddProducToCart } = props
  const { products } = useContext(ProductsContext)

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
            <Product key={prd.id} product={prd} onShowFullProduct={onShowFullProduct} handleAddProducToCart={handleAddProducToCart}  />
            ))}
            {showFullProduct && <FullProduct product={fullProduct} handleAddProducToCart={handleAddProducToCart} onShowFullProduct={onShowFullProduct} />}
      </div>
    </div>
  )
}

export default Home