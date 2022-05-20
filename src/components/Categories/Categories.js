import React from "react";

import "./Categories.css";
import Item from "../Item/Item";

export default function Categories(props) {
  const items = props.items.map((item) => (
    <li key={item.id}> <Item itemInfo={item} />
    </li>
  ));

  return (
    <>
      <div className="cat_header">
        <h3 className="cat_title">{props.catTitle}</h3>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>{items}</ul>
    </>
  );
}
