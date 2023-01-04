import { ADD_CART, REMOVE_CART, CLEAR_CART } from './types';

export const addCart = (selectProduct) => {
  return {
    type: ADD_CART,
    payload: selectProduct,
  };
};

export const removeCart = (selectProduct) => {
  return {
    type: REMOVE_CART,
    payload: selectProduct,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
