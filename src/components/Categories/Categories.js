import React from "react";

import "./Categories.css";
import Item from "./Item/Item";

export default function Categories(props) {

  const items = props.items.map((item, ) => (
    <Item key={item.id} name={item.name} value={item.price}/>
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
