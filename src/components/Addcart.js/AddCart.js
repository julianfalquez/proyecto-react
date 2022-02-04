import React, { useContext } from "react";
import Button from "@mui/material/Button";
import {CartContext} from '../../context/cartContext'
import { buttonStyle } from "../../AppStyle";

export default function AddCart() {
  const cartContext = useContext(CartContext);

  return (
    <Button
      variant="text"
      sx={buttonStyle}
      onClick={() => {
        cartContext.addCart();
      }}
    >
      ADD PRODUCT
    </Button>
  );
}
