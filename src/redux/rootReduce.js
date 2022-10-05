import productsReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
});

export default rootReducer;
