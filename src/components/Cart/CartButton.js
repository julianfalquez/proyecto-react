import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

export default function CartButton() {
  const dispatch = useDispatch();
  const carCounter = useSelector((state) => state.counter);
  const handleClick = () => {dispatch({type:'increment'})};
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ bgcolor: "#E9E5FB", borderRadius: "30px" }}>
        <IconButton
          color="primary"
          aria-label="shopping_cart"
          size="large"
          onClick={() => {
            handleClick();
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: "25px" }} />
          <span>{carCounter}</span>
        </IconButton>
      </Box>
    </div>
  );
}
