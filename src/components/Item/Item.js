import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "./Item.css";
// import { cartActions } from "../../../store/reducers/cartSlice";

export default function Item(props) {
  const dispatch = useDispatch();
  const [itemInCart, setItemInCart] = useState(false);
  const { itemInfo } = props;
  const itemsInCart = useSelector((state) => state.cart.items);

  const handleChange = (event) => {
    event.target.checked
      ? // ? dispatch(cartActions.addItem({ newItem: itemInfo }))
        dispatch({ type: "ADD_ITEM", payload: itemInfo })
      : // : dispatch(cartActions.removeItem({ newItem: itemInfo }));
        dispatch({ type: "REMOVE_ITEM", payload: itemInfo });
  };

  useEffect(() => {
    if (
      itemsInCart.some((element) => {
        return element.id === +itemInfo.id;
      })
    ) {
      setItemInCart(true);
    } else {
      setItemInCart(false);
    }
  }, [itemInfo.id, itemsInCart]);

  return (
    <>
      <div className="item_container">
        {!props.isCart && (
          <Checkbox
            data-testid="item-checkbox"
            name={itemInfo.name}
            onChange={handleChange}
            disabled={!itemInfo.stocked}
            checked ={itemInCart}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        )}
        <Link
          style={{ textDecoration: "none" }}
          className="item_info_container"
          to={`/item/${itemInfo.id}`}
        >
          <p>{itemInfo.name}</p>
          <p>{itemInfo.price}</p>
        </Link>
      </div>
      <hr
        style={{
          borderTop: "1px solid #e1e0e4",
          color: "#e1e0e4",
          height: "1px",
        }}
      ></hr>
    </>
  );
}
