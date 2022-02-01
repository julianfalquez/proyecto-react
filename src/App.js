import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Title from "./components/Title/Title";
import SearchCard from "./components/SearchCard/SearchCard";
import ProductList from "./components/ProductList/ProductList";
import { containerStyle } from "./AppStyle.js";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={containerStyle}>
          <Title />
          <SearchCard />
          <ProductList />
        </Box>
      </Container>
    </div>
  );
}

export default App;
