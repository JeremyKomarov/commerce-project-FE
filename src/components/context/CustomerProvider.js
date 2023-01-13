import React, { createContext, useState } from "react";

const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState();

    return (
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContext;