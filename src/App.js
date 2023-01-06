import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/navbar/Home';
import { useEffect, useState } from 'react'
import { getAllProducts } from './services/api'
import Signup from './components/navbar/Signup'
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthProvider";
import "./App.css"


function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  

  useEffect(() => { 
    getAllProducts()
    .then(res => {
      setProducts(res.data)
    })
  },[])

  const onAddToOrder = (product) => {
    let isInArray = false;
    order.forEach(prd => {
      if(prd.id === product.id)
        isInArray = true
    })
    if (!isInArray) 
    setOrder([...order, product]);
  }

  return (
    <AuthProvider>
      <div className="app-container">
        <Header orders={order}/>
        <Routes>
          <Route path="/" element={<Home products={products} onAddToOrder={onAddToOrder}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;
