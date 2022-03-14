import React from "react";

import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./components/Header/Header";
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer";
import {ItemPage} from "./components/Item/ItemPage";
import {ItemPageLoading} from "./components/Item/ItemPageLoading";


function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path="products" element={<ProductsContainer />}></Route>
          <Route path="item/:id" element={<ItemPage />}></Route>
          <Route path="item/loading" element={<ItemPageLoading />}></Route>
          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
