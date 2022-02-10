import { createSlice } from "@reduxjs/toolkit";

const initialState = {items:[],showCart:false};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state,action) {
      state.items=[...state.items,action.payload.newItem];
    },
    removeItem(state,action){
      const filtered = state.items.filter((item) => {
        return item.id !== action.payload.newItem.id;
      });
      state.items=filtered
    },
    toggleCart(state){
      state.showCart=!state.showCart
    }
  },
});

export const cartActions = cartSlice.actions;
