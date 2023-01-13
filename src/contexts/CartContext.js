import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (product) => {
    let oldProduct = cart.find((item) => item.id === product.id);
    if (oldProduct) {
      oldProduct.quantity++;
      const qtyUpdateProduct = cart.filter(
        (items) => items.id !== oldProduct.id
      );
      const newCart = [...qtyUpdateProduct, oldProduct];
      setCart(newCart);
    } else {
      product.quantity = 1;
      const newProducts = [...cart, product];
      setCart(newProducts);
    }
  };

  // remove cart
  const removeCart = (product) => {
    const newCart = cart.filter((items) => items.id !== product.id);
    setCart(newCart);
  };

  const value = {
    addToCart,
    cart,
    removeCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
