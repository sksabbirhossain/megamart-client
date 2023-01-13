import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  //add to cart
  const addToCart = (product) => {
    const cartItems = [...cart, product];
    setCart(cartItems);
  };

  const value = {
    addToCart,
    cart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
