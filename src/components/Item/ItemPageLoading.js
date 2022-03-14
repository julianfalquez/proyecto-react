import React from "react";
import styles from "./itemPage.module.css";

export const ItemPageLoading = () => {
  return (
    <div className={styles.item_container}>
      <div className={styles.logo_container}>
        <div src={phimg} alt="Logo" className={styles.square}/>
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
  );
};
