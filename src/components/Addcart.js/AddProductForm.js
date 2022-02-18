import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../Input/Input";
import classes from "./addProductModal.module.css";
import { itemsActions } from "../../store/reducers/itemSlicer";

export const AddProductForm = (props) => {
  const itemsStore = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);

  const [categoryValid, setcategoryValid] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");

  const [productValid, setproductValid] = useState(false);
  const [productInput, setProductInput] = useState("");

  const [priceValid, setpriceValid] = useState(false);
  const [priceInput, setPriceInput] = useState("");

  const [descriptionValid, setdescriptionValid] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    return setIsFormValid(
      categoryValid && productValid && priceValid && descriptionValid
    );
  }, [categoryValid, productValid, priceValid, descriptionValid]);

  const validateCategory = (inputValue) => {
    return inputValue !== "";
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      category: categoryInput,
      name: productInput,
      price: priceInput,
      description: descriptionInput,
    };
    dispatch(itemsActions.addItems({ newProduct: newProduct }));
    props.handleClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="category"
        label="Category"
        validate={validateCategory}
        inputValid={setcategoryValid}
        value={categoryInput}
        setValue={setCategoryInput}
      />
      <Input
        id="product-name"
        label="Product Name"
        validate={validateCategory}
        inputValid={setproductValid}
        value={productInput}
        setValue={setProductInput}
      />
      <Input
        id="price"
        label="Price"
        type="number"
        validate={validateCategory}
        inputValid={setpriceValid}
        value={priceInput}
        setValue={setPriceInput}
      />
      <Input
        id="description"
        label="Description"
        type="text"
        multiline
        rows={4}
        validate={validateCategory}
        inputValid={setdescriptionValid}
        value={descriptionInput}
        setValue={setDescriptionInput}
      />
      <div className={classes.buttons}>
        <Button type="sumbit" disabled={!isFormValid}>
          Add
        </Button>
        <Button onClick={props.handleClose}>Close</Button>
      </div>
    </form>
  );
};
