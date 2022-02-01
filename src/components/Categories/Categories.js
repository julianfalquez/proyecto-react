import React from "react";

import "./Categories.css";
import Item from "./Item/Item";

export default function Categories(props) {

  const items = props.items.map((item, index) => (
    <Item key={index} name={item.name} value={item.value}/>
  ));

  return (
    <>
    <div className="cat_title">
      <h2>{props.catTitle}</h2>
    </div>
    {items}
    </>
  );
  
}
