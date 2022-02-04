import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Title from "./components/Title/Title";
import SearchCard from "./components/SearchCard/SearchCard";
import ProductList from "./components/ProductList/ProductList";
import { containerStyle,boxStyle } from "./AppStyle.js";
import Header from './components/Header/Header'
import {CartContextProvider} from './context/cartContext'
import AddCart from "./components/Addcart.js/AddCart";

function App() {
  return (
    <>
    <CartContextProvider>
      <Header></Header>
      <Container maxWidth="sm" sx={containerStyle}>
        <Box sx={boxStyle}>
          <Title />
          <SearchCard />
          <ProductList />
          <AddCart />
        </Box>
      </Container>
      </CartContextProvider>
    </>
  );
}

export default App;
