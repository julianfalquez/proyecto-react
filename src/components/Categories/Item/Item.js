import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector } from "react-redux";

import "./Item.css";
import { cartActions } from "../../../store/reducers/cartSlice";

export default function Item(props) {
  const dispatch = useDispatch();
  const {itemInfo}= props
  const handleChange = (event) => {
    event.target.checked
      ? dispatch(cartActions.addItem({ newItem: itemInfo }))
      : dispatch(cartActions.removeItem({ newItem: itemInfo }));
  };

  return (
    <>
      <div key={itemInfo.index} className="item_container">
        <div className="item_name">
          {!props.isCart && <Checkbox name={itemInfo.name} onChange={handleChange} disabled={!itemInfo.stocked}/>}
          <p>{itemInfo.name}</p>
        </div>
        <p>{itemInfo.price}</p>
      </div>
      <hr style={{ borderTop: "1px solid #e1e0e4" }}></hr>
    </>
  );
}
