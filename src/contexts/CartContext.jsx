import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (itemId) => {
    return cartList.some((item) => item.id === itemId);
  };

  const addToCart = (item, quantity) => {
    const newCartList = isInCart(item.id)
      ? cartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      : [...cartList, { ...item, quantity }];

    setCartList(newCartList);
  };

  const removeItem = (itemId) => {
    const newCartList = cartList.filter((item) => item.id !== itemId);
    setCartList(newCartList);
  };

  const clearList = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeItem, clearList }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
