import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./ProductList.css";
import Categories from '../Categories/Categories'

const itemdummies=[{name:"Footbal",value:49.99},{name:"Baseball",value:9.99}]

function ProductList() {
  return (
    <Container maxWidth="sm">
      <Box>
        <div>
          <div className="label_container">
            <p>Name</p>
            <p>Price</p>
          </div>
          <div><Categories catTitle="Sporting Goods" items={itemdummies}/></div>
        </div>
      </Box>
    </Container>
  );
}
export default ProductList;
