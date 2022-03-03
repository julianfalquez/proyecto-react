import React from "react";


import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./components/Header/Header";
import {ProductsContainer} from "./components/ProductsContainer/ProductsContainer"

function App() {


  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <ProductsContainer></ProductsContainer>
      </Provider>
    </>
  );
}

export default App;
