import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./ProductList.css";
import Categories from "../Categories/Categories";
import {getItems} from "../../services/itemsService"

function ProductList() {
  const [items, setItems] = useState([]);
  const [itemsCat, setItemsCat] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const groupByCategory = items.reduce((group, product) => {
      const { category } = product;
      group[category] = group[category] ?? [];
      group[category].push(product);
      return group;
    }, {});

    const itemsGouped = Object.keys(groupByCategory).map((key,index) => {
      return <Categories key={index} catTitle={key} items={groupByCategory[key]} />;
    });
    setItemsCat(itemsGouped)
  }, [items]);



  async function fetchItems() {
    const response = await getItems();
    setItems(response)
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
