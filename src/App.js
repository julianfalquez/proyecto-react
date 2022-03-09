import React from "react";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./components/Header/Header";
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer";
import {ItemPage} from "./components/Item/ItemPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path="products" element={<ProductsContainer />}></Route>
          <Route path="products/:id" element={<ItemPage />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
