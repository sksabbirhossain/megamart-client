import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("Product added successfull");
    } else {
      product.quantity = 1;
      const newProducts = [...cart, product];
      setCart(newProducts);
      toast.success("Product added successfull");
    }
  };

  // remove cart
  const removeCart = (product) => {
    const newCart = cart.filter((items) => items.id !== product.id);
    setCart(newCart);
    toast.success("Remove from cart");
  };

  const increaseQty = (product) => {
    if (product.quantity >= 1) {
      product.quantity++;
      const updateQty = [...cart];
      setCart(updateQty);
    }
  };
  const decreaseQty = (product) => {
    if (product.quantity > 1) {
      product.quantity--;
      const updateQty = [...cart];
      setCart(updateQty);
    }
  };

  const value = {
    addToCart,
    cart,
    removeCart,
    increaseQty,
    decreaseQty,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
