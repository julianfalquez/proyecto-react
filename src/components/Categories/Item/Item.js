import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector } from "react-redux";

import "./Item.css";
import { cartActions } from "../../../store/reducers/cartSlice";

export default function Item(props) {
  const dispatch = useDispatch();
  const itemsStore = useSelector((state) => state.items.items);

  const handleChange = (event) => {
    const newItem = itemsStore.find((obj) => {
      return obj.name === event.target.name;
    });
    event.target.checked
      ? dispatch(cartActions.addItem({ newItem: newItem }))
      : dispatch(cartActions.removeItem({ newItem: newItem }));
  };

  return (
    <>
      <div key={props.index} className="item_container">
        <div className="item_name">
          {!props.isCart && <Checkbox name={props.name} onChange={handleChange} />}
          <p>{props.name}</p>
        </div>
        <p>{props.value}</p>
      </div>
      <hr style={{ borderTop: "1px solid #e1e0e4" }}></hr>
    </>
  );
}
