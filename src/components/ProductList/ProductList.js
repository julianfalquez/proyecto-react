import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./ProductList.css";
import Categories from "../Categories/Categories";

function ProductList() {
  const [items, setItems] = useState([]);
  const [itemsCat, setItemsCat] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const groupByCategory = items.reduce((group, product) => {
      const { category } = product;
      group[category] = group[category] ?? [];
      group[category].push(product);
      return group;
    }, {});

    const itemsycat = Object.keys(groupByCategory).map((key,index) => {
      return <Categories key={groupByCategory[index]} catTitle={key} items={groupByCategory[key]} />;
    });
    setItemsCat(itemsycat)
  }, [items]);



  async function getItems() {
    const response = await fetch(
      "https://my-json-server.typicode.com/luribeto/reactjs-course-data/products"
    );
    const data = await response.json();
    setItems(data);
  }
  return (
    <Container maxWidth="sm">
      <Box>
        <div>
          <div className="label_container">
            <p>Name</p>
            <p>Price</p>
          </div>
          <div>{itemsCat}</div>
        </div>
      </Box>
    </Container>
  );
}
export default ProductList;
