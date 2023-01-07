import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/navbar/Home';
import {  useState } from 'react'
import { addProductToCart } from './services/api'
import Signup from './components/navbar/Signup'
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthProvider";
import "./App.css"

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  
  const handleAddProducToCart = async (product) => {
    let isInArray = false;
    cartProducts.forEach(prd => {
      if(prd.id === product.id)
        isInArray = true
    })
    if (!isInArray)
    {
      const params = {
        orderId: null,
        productId: product.id,
        quantity: 2,
        price: product.price
      };
      const res = await addProductToCart(params)
      setCartProducts([...cartProducts, product]);
    }
}
   
  return (
    <AuthProvider>
      <div className="app-container">
        <Header cartProducts={cartProducts}/>
        <Routes>
          <Route path="/" element={<Home handleAddProducToCart={handleAddProducToCart}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;


