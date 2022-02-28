import React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";

import { AddProductForm } from "./AddProductForm";
import classes from "./addProductModal.module.css";

const AddProductBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.handleClose} />;
};
const AddProductOverlay = (props) => {

  return (
    <Box className={classes.modal}>
      <div className={classes.header}>
        <h2>Add product</h2>
      </div>
      <div className={classes.body}>
        <AddProductForm handleClose={props.handleClose}/>
      </div>
    </Box>
  );
};

export default function AddProductModal(props) {
  const handleClose = () => {
    props.addProductToggler();
    document.body.style.overflow = "unset";
  };
  return (
    <>
      {ReactDOM.createPortal(
        <AddProductBackdrop handleClose={handleClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddProductOverlay handleClose={handleClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
