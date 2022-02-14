import React from "react";
import { useSelector,useDispatch } from "react-redux";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { cartActions } from "../../store/reducers/cartSlice";

export default function CartButton() {
  const dispatch = useDispatch()
  const itemsInCar = useSelector((state) => state.cart.items);
  const handleClick = () => {
    dispatch(cartActions.toggleCart())
  };
  const map1 = itemsInCar.map((x, index) => <p key={index}>{x.name}</p>);

  return (
    <>
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
            <span>{map1.length}</span>
          </IconButton>
        </Box>
      </div>
    </>
  );
}
