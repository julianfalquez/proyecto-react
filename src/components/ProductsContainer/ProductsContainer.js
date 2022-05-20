import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Container, Box } from "@mui/material";

import Title from "../Title/Title";
import SearchCard from "../SearchCard/SearchCard";
import ProductList from "../ProductList/ProductList";
import { containerStyle, boxStyle } from "./ProductContainerStyle";
import Addproduct from "../AddProduct/AddProduct";
import Alert from "../Alert/Alert";

export const ProductsContainer = () => {
  const fetchItemsStatus = useSelector((state) => state.items.status);
  const [alert, setAlert] = useState();
  const fetchItemsError = useSelector((state) => state.items.error);

  useEffect(() => {
    setAlert(() => {
      switch (fetchItemsStatus) {
        case "SUCCEDED":
          return (
            <Alert
              open={true}
              status={"success"}
              message={"Items fetched correctly."}
            />
          );
        case "FAILED":
          return (
            <Alert
              open={true}
              status={"error"}
              message={`Failed to fetch items. ${fetchItemsError}`}
            />
          );

        default:
          return <></>;
      }
    });
  }, [fetchItemsStatus, fetchItemsError]);

  return (
    <Container maxWidth="sm" sx={containerStyle}>
      <Box sx={boxStyle}>
        <Title />
        <SearchCard />
        <ProductList />
        {alert}
        <Addproduct />
      </Box>
    </Container>
  );
};
