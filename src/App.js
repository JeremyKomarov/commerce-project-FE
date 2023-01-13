import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/navbar/Home';
import {  useContext, useState } from 'react'
import { addProductToCart } from './services/api'
import Signup from './components/navbar/userLoginReg/Signup'
import { Route, Routes } from "react-router-dom";
import AuthContext, { AuthProvider } from "./components/context/AuthProvider";

function App() {
  // const [cartProducts, setCartProducts] = useState([]);
  const { auth } = useContext(AuthContext)
  
//   const handleAddProducToCart = async (product) => {
//     let isInArray = false;
//     cartProducts.forEach(prd => {
//       if(prd.id === product.id)
//         isInArray = true
//     })
//     if (!isInArray)
//     {
//       const bodyParams = {
//         orderId: null,
//         productId: product.id,
//         quantity: 1,
//         price: product.price
//       };
//       const res = await addProductToCart(bodyParams, auth)
//       setCartProducts([...cartProducts, product]);
//     }
// }
   
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;


