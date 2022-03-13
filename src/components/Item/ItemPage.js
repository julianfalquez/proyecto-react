import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/reducers/itemSlice";
import Button from "@mui/material/Button";
import phimg from "../../UI/placeholder-image.jpg";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import styles from "./itemPage.module.css";
import {buttonTheme} from "../../UI/buttonTheme";

export const ItemPage = () => {
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  const itemsStore = useSelector((state) => state.items.items);
  const { id } = useParams();

  useEffect(() => {
    console.log(itemsStore.length);
    if (itemsStore.length === 0) {
      dispatch(fetchItems());
    } else {
      const foundItem = itemsStore.find((element) => {
        return element.id === +id;
      });
      setItem(foundItem);
    }
  }, [id, itemsStore]);

  return (
    <Container>
      <div className={styles.item_container}>
        <div>
          <img src={phimg} alt="Logo" />
        </div>
        <div className={styles.product_container}>
          <div className={styles.product_info_container}>
            <h2>{item ? item.name : "laoding"}</h2>
            <h3>{item ? item.price : "laoding"}</h3>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" className={styles.button}>
                Agregar a carrito
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Container>
  );
};
