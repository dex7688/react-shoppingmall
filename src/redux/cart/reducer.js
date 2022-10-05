import { ADD_CART, REMOVE_CART } from "./types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
