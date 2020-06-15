import { combineReducers } from "redux";
import ProductListReducer from "./layout/ProductListsByCategory/reducer";

const rootReducer = combineReducers({
  productList: ProductListReducer,
});

export default rootReducer;
