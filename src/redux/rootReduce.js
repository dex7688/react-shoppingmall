import productsReducer from './product/reducer';
import cartReducer from './cart/reducer';
import changeDarkModeReducer from './theme/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
  darkMode: changeDarkModeReducer,
});

export default rootReducer;
