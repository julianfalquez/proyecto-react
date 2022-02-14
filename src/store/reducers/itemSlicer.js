import { createSlice } from "@reduxjs/toolkit";
import { getItems } from "../../services/itemsService";


const initialState = { items: [] };
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItems(state,action) {
      state.items =  action.payload.items;
    },
  },
});
export const sendItems = () => {
    return async (dispatch) => {
      const items= await getItems();
      dispatch(itemsSlice.actions.fetchItems({items}))
    };
  };

export const itemsActions = itemsSlice.actions;



