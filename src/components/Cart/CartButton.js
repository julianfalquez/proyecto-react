import React,{useState} from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";


export default function CartButton() {

  const [contador,setContador]=useState(0)

  const addOne=()=>{
    setContador(prevState=>prevState+1)
  }

  return (
    <div style={{display:'flex'}}>
      <Box sx={{bgcolor:'#E9E5FB',borderRadius:'30px'}}>
      <IconButton color="primary" aria-label="shopping_cart" size="large" onClick={()=>{addOne()}} >
        <ShoppingCartIcon sx={{fontSize:'25px'}}/>
        <span>{contador}</span>
      </IconButton>
      </Box>
    </div>
  );
}
