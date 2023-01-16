import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./components/context/ProductsProvider";
import { CustomerProvider } from "./components/context/CustomerProvider";
import { CartProvider } from "./components/context/CartProvider";
import { AuthProvider } from "./components/context/AuthProvider";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CustomerProvider>
         <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AuthProvider>
        </CustomerProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
