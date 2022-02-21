import { getItems } from "../../services/itemsService";

const initialState = {
  items: [],
  filteredItems: [],
  showStock: false,
  searchTerm: "",
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { ...state, filteredItems: action.payload, items: action.payload };
    case "FILTER_ITEMS":
      const result = state.items.filter((item) => {
        if (state.showStock) {
          return (
            item.name.toUpperCase().includes(state.searchTerm.toUpperCase()) &&
            item.stocked === state.showStock
          );
        } else {
          return item.name
            .toUpperCase()
            .includes(state.searchTerm.toUpperCase());
        }
      });
      return {
        ...state,
        filteredItems: result,
      };
    case "NEW_ITEM":
      const newProduct = {
        ...action.payload,
        stocked: true,
        id: state.items.length + 1,
      };
      console.log(state.items[0])
      console.log(newProduct)
      const newItemList = [...state.items, newProduct];
      return {
        ...state,
        items: newItemList,
        filteredItems: newItemList,
      };
    case "TOGGLE_STOCK":
      return {
        ...state,
        showStock: !state.showStock,
      };
    case "SET_SEARCH_TEARM":
      console.log(action.payload)
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function fetchItems(setIsLoading) {
  return async function fetchItemsThunk(dispatch, getState) {
    setIsLoading(true);
    await timeout(3000);
    const response = await getItems();
    dispatch({ type: "FETCH_ITEMS", payload: response });
    setIsLoading(false);
  };
}
