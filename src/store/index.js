import { createStore,combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { cartReducer } from "./reducers/cartSlice";
import { itemReducer } from "./reducers/itemSlice";


const rootReducer = combineReducers({
  items:itemReducer,
  cart:cartReducer,
});
const middlewareEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer,middlewareEnhancer);

export default store;
