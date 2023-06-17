import React, { createContext, useContext, useState, useEffect } from "react";
import { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, settotalQuantities] = useState();
  const [quantities, setQuantities] = useState(1);

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};
