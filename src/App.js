import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Title from "./components/Title/Title";
import SearchCard from "./components/SearchCard/SearchCard";
import ProductList from "./components/ProductList/ProductList";
import { containerStyle,buttonStyle,boxStyle } from "./AppStyle.js";


function App() {
  return (
    <div>
      <Container maxWidth="sm" sx={containerStyle}>
        <Box sx={boxStyle}>
          <Title />
          <SearchCard />
          <ProductList />
          <Button variant="text" sx={buttonStyle}>ADD PRODUCT</Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
