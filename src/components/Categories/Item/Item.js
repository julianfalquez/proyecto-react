import React from "react";


import "./Item.css";


export default function Item(props) {
  return (
    <div key={props.index}>
      <div className="item_container">
        <p>{props.name}</p>
        <p>{props.value}</p>
      </div>
      <hr style={{ borderTop: "1px solid #e1e0e4" }}></hr>
    </div>
  );
}
