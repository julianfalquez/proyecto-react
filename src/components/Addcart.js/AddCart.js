import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { buttonStyle } from "../../AppStyle";

export default function AddCart() {


  return (
    <Button variant="text" sx={buttonStyle}>
      ADD PRODUCT
    </Button>
  );
}
