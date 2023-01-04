import { ADD_CART, REMOVE_CART, CLEAR_CART } from './types';

const getCartListFromLocalStorage = JSON.parse(localStorage.getItem('carts'));

const initialState = {
  carts: getCartListFromLocalStorage ? getCartListFromLocalStorage : [],
};

// img, id, title, price, count
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      const findIndex = state.carts.findIndex((el) => el.id === action.payload.id);
      if (findIndex === -1) {
        // 선택한 상품이 장바구니에 없는 경우
        return {
          carts: [...state.carts, action.payload],
        };
      } else {
        // 해당 상품이 장바구니에 있는 경우 +1
        return {
          carts: state.carts.map((el) => {
            if (el.id === action.payload.id) {
              return { ...el, count: el.count + 1 };
            } else {
              return el;
            }
          }),
        };
      }
    }

    case REMOVE_CART: {
      const removed = state.carts.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            count: el.count - 1,
          };
        } else {
          return el;
        }
      });

      return {
        carts: removed.filter((el) => el.count !== 0),
      };
    }

    case CLEAR_CART:
      return {
        carts: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
