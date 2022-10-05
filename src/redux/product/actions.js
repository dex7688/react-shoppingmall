import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => dispatch(fetchProductsSuccess(product)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (product) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
