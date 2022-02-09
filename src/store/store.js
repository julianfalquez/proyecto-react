import { createStore } from "redux";

const initialState = { counter: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {counter:state.counter+1};
  }
  return state
};

export const store = createStore(cartReducer);
