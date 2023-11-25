import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducers from "../reducers/cart.reducers";
import { localStorageMiddleware } from "../middlewares/localstorage";

const getLocalStorageState = localStorage.getItem("state");
const preloadedState = getLocalStorageState
  ? JSON.parse(getLocalStorageState)
  : {};

const rootReducers = combineReducers({
  cart: cartReducers,
});

export const store = configureStore({
  reducer: rootReducers,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
