import React, {useState, useContext, useEffect} from 'react'
import "./Home.css"
import ProductsContext  from "../context/ProductsProvider";
import CustomerContext  from "../context/CustomerProvider";
import AuthContext from "../context/AuthProvider";
import CartContext from "../context/CartProvider";
import { addProductToCart } from '../../services/api'
import Product from '../product/Product'
import FullProduct from '../product/FullProduct';
import FavoriteProduct from '../product/FavoriteProduct'

function Home(props) {
  const { products } = useContext(ProductsContext)
  const { customer } = useContext(CustomerContext)
  const { cart, setCart } = useContext(CartContext)
  const [showFullProduct, setShowFullProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState();
  const { auth } = useContext(AuthContext)

  
  const onShowFullProduct = (product) => {
    setFullProduct(product);
    setShowFullProduct(!showFullProduct);
  }

//   const handleAddProducToCart = async (product) => {
//     let isInArray = false;
//     cart.forEach(prd => {
//       if(prd.id === product.id)
//         isInArray = true
//     })
//     if (!isInArray)
//     {
//       const bodyParams = {
//         orderId: null,
//         customerId: customer.customer.id,
//         productId: product.id,
//         quantity: 1,
//         price: product.price
//       };
//       const res = await addProductToCart(bodyParams, auth)
//       setCart([...cart, product]);
//     }
// }

useEffect(() => {
}, [cart]);

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