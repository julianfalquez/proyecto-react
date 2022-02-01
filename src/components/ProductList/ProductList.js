import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./ProductList.css";
import Categories from '../Categories/Categories'
function ProductList() {
  return (
    <Container maxWidth="sm">
      <Box>
        <div>
          <div className="label_container">
            <p>Name</p>
            <p>Price</p>
          </div>
          <div><Categories catTitle="Sporting Goods"/></div>
        </div>
      </Box>
    </Container>
  );
}
export default ProductList;
