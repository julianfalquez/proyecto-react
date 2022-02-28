import React, { useEffect, useState } from "react";
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
import Alert from "../../components/Alert/Alert";
import { groupByCategoryService } from "../../services/itemsService";

function ProductList() {
  const [itemsCat, setItemsCat] = useState([]);
  const itemsStore = useSelector((state) => state.items.filteredItems);
  const fetchItemsStatus = useSelector((state) => state.items.status);
  const fetchItemsError = useSelector((state) => state.items.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  useEffect(() => {
    if (fetchItemsStatus === "SUCCEDED") {
      const groupByCategory = groupByCategoryService(itemsStore);

      const itemsGouped = Object.keys(groupByCategory).map((key, index) => {
        return (
          <li key={index}>
            <Categories
              catTitle={key}
              items={groupByCategory[key]}
            />
          </li>
        );
      });
      setItemsCat(itemsGouped);
    }
  }, [itemsStore, fetchItemsStatus]);

  const handleReload = () => {
    dispatch(fetchItems());
  };

  const ProductListSucces = () => {
    return (
      <>
        <Alert
          open={true}
          status={"success"}
          message={"Items fetched correctly."}
        />
        <ul style={{ width: "100%", listStyle: "none", padding: "0" }}>
          {itemsCat}
        </ul>
      </>
    );
  };

  const ProductListFails = () => {
    return (
      <>
        <Alert
          open={true}
          status={"error"}
          message={`Failed to fetch items. ${fetchItemsError}`}
        />
        <SvgIcon
          fontSize="large"
          onClick={handleReload}
          sx={{ cursor: "pointer" }}
          placeholder="refreshIcon"
        >
          <RefreshIcon name={'refreshIcon'}/>
        </SvgIcon>
      </>
    );
  };

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
          {fetchItemsStatus === "LOADING" && <LoadingComponent />}
          {fetchItemsStatus === "SUCCEDED" && <ProductListSucces />}
          {fetchItemsStatus === "FAILED" && <ProductListFails />}
        </FormControl>
      </Box>
    </Container>
  );
}
export default ProductList;
