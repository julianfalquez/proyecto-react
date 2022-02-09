import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { buttonStyle } from "../../AppStyle";
import { useDispatch } from "react-redux";

export default function AddCart() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "increment" });
  };
  return (
    <Button
      variant="text"
      sx={buttonStyle}
      onClick={() => {
        handleClick();
      }}
    >
      ADD PRODUCT
    </Button>
  );
}
