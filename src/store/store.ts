import { configureStore } from "@reduxjs/toolkit";
import ProductCartReducer from "./ProductCart/slice";

export const store = configureStore({
  reducer: { ProductCart: ProductCartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
