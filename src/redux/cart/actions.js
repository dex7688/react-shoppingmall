import { ADD_CART, REMOVE_CART } from "./types";

export const addCart = (selectProduct) => {
  return {
    type: ADD_CART,
    payload: selectProduct,
  };
};

export const removeCart = () => {
  return {
    type: REMOVE_CART,
  };
};
