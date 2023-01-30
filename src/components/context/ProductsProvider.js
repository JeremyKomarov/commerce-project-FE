import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from '../../services/api'

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;



