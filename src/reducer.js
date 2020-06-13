import { combineReducers } from "redux";
import ProductListReducer from "./components/ProductList/reducer";

const rootReducer = combineReducers({
  productList: ProductListReducer,
});

export default rootReducer;
