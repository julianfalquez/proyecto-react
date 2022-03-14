import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/reducers/itemSlice";
import Button from "@mui/material/Button";
import phimg from "../../UI/placeholder-image.jpg";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import styles from "./itemPage.module.css";
import { buttonTheme } from "../../UI/buttonTheme";

export const ItemPage = () => {
  const [item, setItem] = useState();
  const [addItem, setAddItem] = useState(true);
  const dispatch = useDispatch();
  const itemsStore = useSelector((state) => state.items.items);
  const itemsInCart = useSelector((state) => state.cart.items);
  const { id } = useParams();

  useEffect(() => {
    if (itemsStore.length === 0) {
      dispatch(fetchItems());
    } else {
      const foundItem = itemsStore.find((element) => {
        return element.id === +id;
      });
      setItem(foundItem);
    }
  }, [id, itemsStore, dispatch]);

  useEffect(() => {
    if (
      itemsInCart.some((element) => {
        return element.id === +id;
      })
    ) {
      setAddItem(false);
    } else {
      setAddItem(true);
    }
  }, [id, itemsInCart]);

  const addToCart = (itemInfo) => {
    dispatch({ type: "ADD_ITEM", payload: itemInfo });
  };
  const RemoveCart = (itemInfo) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemInfo });
  };

  return (
    <Container>
      <div className={styles.item_container}>
        <div className={styles.logo_container}>
          <img src={phimg} alt="Logo" />
        </div>
        <div className={styles.product_container}>
          <div className={styles.product_info_container}>
            <h2>{item ? item.name : "laoding"}</h2>
            <h3>{item ? item.price : "laoding"}</h3>
            <ThemeProvider theme={buttonTheme}>
              {addItem ? (
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={() => RemoveCart(item)}
                >
                  Remove from cart
                </Button>
              )}
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Container>
  );
};
