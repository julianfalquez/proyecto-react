import React,{useContext} from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

import { CartContext } from "../../context/cartContext";

export default function CartButton() {
  
  const cartContext = useContext(CartContext);

  return (
    <div style={{display:'flex'}}>
      <Box sx={{bgcolor:'#E9E5FB',borderRadius:'30px'}}>
      <IconButton color="primary" aria-label="shopping_cart" size="large" onClick={()=>{cartContext.addCart()}} >
        <ShoppingCartIcon sx={{fontSize:'25px'}}/>
        <span>{cartContext.products}</span>
      </IconButton>
      </Box>
    </div>
  );
}
