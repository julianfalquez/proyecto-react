import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

import Item from "../Categories/Item/Item";

import './Cart.css'
export default function Cart() {
  const itemsInCart = useSelector((state) => state.cart.items);
  const items = itemsInCart.map((item) => <Item key={item.id} itemInfo={item} isCart/> );

  return (
    <Box className='cart_container'>
     {items}
    </Box>
  );
}
