import React, { useState } from "react";
import Button from "@mui/material/Button";
import { buttonStyle } from "../../AppStyle";
import AddProductModal from "./AddProductModal";

export default function AddCart() {
  const [toggleModal, setToggleModal] = useState(false);
  const addProductToggler = () => {
    setToggleModal(!toggleModal);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>

    {toggleModal && <AddProductModal addProductToggler={addProductToggler}/>}
    <Button variant="text" sx={buttonStyle} onClick={addProductToggler}>
      ADD PRODUCT
    </Button>
    </>
  );
}
