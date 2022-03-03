import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddProductModal from "./AddProductModal";

export default function Addproduct() {
  const [toggleModal, setToggleModal] = useState(false);
  const addProductToggler = () => {
    setToggleModal(!toggleModal);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>

    {toggleModal && <AddProductModal addProductToggler={addProductToggler}/>}
    <Button variant="text" sx={{color:'#424146',padding:'10px 20px'}} onClick={addProductToggler}>
      ADD PRODUCT
    </Button>
    </>
  );
}
