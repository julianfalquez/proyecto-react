import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/cartSlice";
import { itemsSlice } from "./reducers/itemSlicer";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    items:itemsSlice.reducer
  },
});
