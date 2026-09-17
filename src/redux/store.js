import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import ProductsReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: ProductsReducer,
  },
});

export default store;
