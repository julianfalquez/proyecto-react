import React, { useEffect, useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SvgIcon from "@mui/material/SvgIcon";
import RefreshIcon from "@mui/icons-material/Refresh";

import "./ProductList.css";
import Categories from "../Categories/Categories";
import { LoadingComponent } from "../../UI/LoadingComponent";
import { fetchItems } from "../../store/reducers/itemSlice";
import { groupByCategoryService } from "../../services/itemsService";


function ProductList() {
  const [itemsCat, setItemsCat] = useState([]);
  const itemsStore = useSelector((state) => state.items.filteredItems);
  const fetchItemsStatus = useSelector((state) => state.items.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleReload = useCallback(
    ()=>dispatch(fetchItems()),
    [dispatch],
  );

  useEffect(() => {
    setItemsCat(() => {
      switch (fetchItemsStatus) {
        case "SUCCEDED":
          const groupByCategory = groupByCategoryService(itemsStore);
          const itemsGrouped = Object.keys(groupByCategory).map(
            (key, index) => {
              return (
                <li key={index}>
                  <Categories catTitle={key} items={groupByCategory[key]} />
                </li>
              );
            }
          );
          return (
            <ul style={{ width: "100%", listStyle: "none", padding: "0" }}>
              {itemsGrouped}
            </ul>
          );
        case "FAILED":
          return (
            <>
              <SvgIcon
                fontSize="large"
                onClick={handleReload}
                sx={{ cursor: "pointer" }}
                placeholder="refreshIcon"
              >
                <RefreshIcon name={"refreshIcon"} />
              </SvgIcon>
            </>
          );

        case "LOADING":
          return <LoadingComponent />;
        default:
          return <></>;
      }
    });
  }, [fetchItemsStatus, itemsStore,handleReload]);

  return (
    <Container maxWidth="sm">
      <Box>
        <div className="label_container">
          <p>Name</p>
          <p>Price</p>
        </div>
        <FormControl
          component="fieldset"
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          {itemsCat}
        </FormControl>
      </Box>
    </Container>
  );
}

export default ProductList;
