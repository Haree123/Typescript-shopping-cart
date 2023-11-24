import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducers from "../reducers/cart.reducers";

const rootReducers = combineReducers({
  cart: cartReducers,
});

export const store = configureStore({
  reducer: rootReducers,
});
