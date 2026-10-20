import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer } from '../reducer/cartReducer.js';

const initalState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initalState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  const addToCart = (product) => {
    const updateCartList = state.cartList.concat(product);
    UpdateTotal(updateCartList);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        cartList: updateCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updateCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    UpdateTotal(updateCartList);
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        cartList: updateCartList,
      },
    });
  };

  const UpdateTotal = (products) => {
    let totalAmount = 0;
    products.forEach((product) => {
      totalAmount += product.price;
    });
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total: totalAmount,
      },
    });
  };
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
