import { useContext, useEffect,useState} from 'react'
import { Route, Routes } from "react-router-dom";
import AuthContext from "./components/context/AuthProvider";
import CartContext from "./components/context/CartProvider";
import ProductsContext from './components/context/ProductsProvider';
import CustomerContext  from "./components/context/CustomerProvider";
import { addProductToCart, getAllProducts } from './services/api'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/navbar/Home';
import Signup from './components/navbar/userLoginReg/Signup'
import Checkout from './components/navbar/Checkout';
import Profile from './components/navbar/Profile';
import Wishlist from './components/navbar/Wishlist';


function App() {
  const { auth } = useContext(AuthContext)
  const { cart, setCart } = useContext(CartContext)
  const { customer } = useContext(CustomerContext)
  const { setProducts } = useContext(ProductsContext)
  const [errMsg, setErrMsg] = useState("");



  const handleAddProducToCart = async (product) => {
    let isInArray = false;
    cart.forEach(prd => {
      if(prd.id === product.id)
        isInArray = true
    })
    if (!isInArray)
    {
      const bodyParams = {
        orderId: null,
        customerId: customer.customer.id,
        productId: product.id,
        quantity: 1,
        price: product.price
      };
      try{
      const res = await addProductToCart(bodyParams, auth)
      setCart([...cart, {...product, productOrderId:res.data}])
    } catch(err){
      if(!err.response){
        setErrMsg('No Server Response')
      }else if(err.response.status === 500){
        setErrMsg('Product Out Of Stock')
            console.log(setErrMsg);
      }else {
        setErrMsg("Authentication Failed");
            console.log(setErrMsg);

      }
    }      
    }
}


useEffect(() => {
  getAllProducts()
  .then(res => {
    setProducts(res.data)
  })

}, [cart] )
   
  return (
      <div className="app-container">
        <Header handleAddProducToCart={handleAddProducToCart}/>
        <Routes>
          <Route path="/" element={<Home handleAddProducToCart={handleAddProducToCart}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;


