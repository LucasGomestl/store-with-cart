import * as types from "./actionTypes";
const INITIAL_STATE = { products: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};
