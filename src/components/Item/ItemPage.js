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
  const [outOfStock, setOutOfStock] = useState(true);
  const [itemInfo, setItemInfo] = useState();
  const [itemImage, setItemImage] = useState();
  const dispatch = useDispatch();
  const itemsStore = useSelector((state) => state.items.items);
  const itemsInCart = useSelector((state) => state.cart.items);
  const fetchItemsStatus = useSelector((state) => state.items.status);
  const { id } = useParams();

  useEffect(() => {
    if (itemsStore.length === 0) {
      dispatch(fetchItems());
    }
  }, [id, itemsStore]);

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

  useEffect(() => {
    setItemInfo(() => {
      switch (fetchItemsStatus) {
        case "SUCCEDED":
          const foundItem = itemsStore.find((element) => {
            return element.id === +id;
          });
          setItem(foundItem);
          if (foundItem.stocked) {
            setOutOfStock(false);
          }
          setItemImage(<img src={phimg} alt="Logo" className={styles.img} />);
          return (
            <>
              <h2 className={styles.product_title}>{foundItem.name}</h2>
              <h3 className={styles.product_text}>{foundItem.price}</h3>
            </>
          );
        case "FAILED":
          return (
            <>
              <p>fallo</p>
            </>
          );

        case "LOADING":
          setItemImage(
            <div alt="Logo" className={`${styles.img} ${styles.skeleton}`} />
          );
          return (
            <>
              <div
                className={`${styles.skeleton} ${styles.skeleton_text}  ${styles.product_title}`}
              ></div>
              <div
                className={`${styles.skeleton} ${styles.skeleton_text}  ${styles.product_text}`}
              ></div>
            </>
          );
        default:
          return <></>;
      }
    });
  }, [fetchItemsStatus]);

  const addToCart = (itemInfo) => {
    dispatch({ type: "ADD_ITEM", payload: itemInfo });
  };
  const RemoveCart = (itemInfo) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemInfo });
  };

  return (
    <Container>
      <div className={styles.item_container}>
        <div className={styles.logo_container}>{itemImage}</div>
        <div className={styles.product_container}>
          <div className={styles.product_info_container}>
            {itemInfo}
            <ThemeProvider theme={buttonTheme}>
              {addItem ? (
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={() => addToCart(item)}
                  disabled={outOfStock}
                >
                  {outOfStock ? "Out of Stock" : "Add to cart"}
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
