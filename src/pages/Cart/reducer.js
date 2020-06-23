import * as types from "./actionTypes";

export const INITIAL_STATE = { cart: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return { ...state, cart: action.payload };
    case types.REMOVE_PRODUCT_FROM_CART:
      return { ...state, cart: action.payload };
    case types.DELETE_PRODUCT_FROM_CART:
      return { ...state, cart: action.payload };
    default:
      return { ...state };
  }
};
