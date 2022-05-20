import React from "react";
import styles from "./itemPage.module.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export const ItemPageLoading = () => {
  return (
    <Container>
      <div className={styles.item_container}>
        <div className={styles.logo_container}>
          <div alt="Logo" className={`${styles.img} ${styles.skeleton}`} />
        </div>
        <div className={styles.product_container}>
          <div className={styles.product_info_container}>
            <div
              className={`${styles.skeleton} ${styles.skeleton_text}  ${styles.product_title}`}
            ></div>
            <div
              className={`${styles.skeleton} ${styles.skeleton_text}  ${styles.product_text}`}
            ></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
