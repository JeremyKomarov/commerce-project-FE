import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from '../../services/api'

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts()
        .then(res => {
            setProducts(res.data)
        })
    })

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;

