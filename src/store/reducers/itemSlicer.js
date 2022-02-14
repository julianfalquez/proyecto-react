import { createSlice } from "@reduxjs/toolkit";
import { getItems } from "../../services/itemsService";

const initialState = {
  items: [],
  filteredItems: [],
  showStock: false,
  searchTerm: "",
};
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItems(state, action) {
      state.items = action.payload.items;
      state.filteredItems = state.items;
    },
    filterItems(state) {
      const result = state.items.filter((item) => {
        if (state.showStock) {
          return (
            item.name
              .toUpperCase()
              .includes(state.searchTerm.toUpperCase()) &&
            item.stocked === state.showStock
          );
        } else {
          return item.name
            .toUpperCase()
            .includes(state.searchTerm.toUpperCase());
        }
      });
      state.filteredItems = result;
    },
    toggleStock(state) {
      state.showStock = !state.showStock;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload.value;
    },
  },
});
export const sendItems = () => {
  return async (dispatch) => {
    const items = await getItems();
    dispatch(itemsSlice.actions.fetchItems({ items }));
  };
};

export const itemsActions = itemsSlice.actions;
