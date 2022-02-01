import React from "react";

import "./ItemList.css";
export default function ItemList(props) {
  const items = props.items.map((item, index) => (
    <div key={index}>
      <div className="item_container">
        <p>{item.name}</p>
        <p>{item.value}</p>
      </div>
      <hr style={{borderTop:'1px solid #e1e0e4'}}></hr>
    </div>
  ));

  return <div>{items}</div>;
}
