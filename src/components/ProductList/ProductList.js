import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { sendItems } from "../../store/reducers/itemSlicer";
import "./ProductList.css";
import Categories from "../Categories/Categories";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const [itemsCat, setItemsCat] = useState([]);
  const itemsStore = useSelector((state) => state.items.filteredItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendItems());
  }, [dispatch]);

  useEffect(() => {
    const groupByCategory = itemsStore.reduce((group, product) => {
      const { category } = product;
      group[category] = group[category] ?? [];
      group[category].push(product);
      return group;
    }, []);

    const itemsGouped = Object.keys(groupByCategory).map((key, index) => {
      return (
        <Categories key={index} catTitle={key} items={groupByCategory[key]} />
      );
    });
    setItemsCat(itemsGouped);
  }, [itemsStore]);
  return (
    <Container maxWidth="sm">
      <Box>
          <div className="label_container">
            <p>Name</p>
            <p>Price</p>
          </div>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <div>{itemsCat}</div>
          </FormControl>
      </Box>
    </Container>
  );
}
export default ProductList;
