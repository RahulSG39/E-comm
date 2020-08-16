import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
