import React from "react";

import "./Categories.css";
import ItemList from "./ItemList";

const itemdummies=[{name:"Footbal",value:49.99},{name:"Baseball",value:9.99}]

export default function Categories(props) {
  return (
    <>
    <div className="cat_title">
      <h2>{props.catTitle}</h2>
    </div>
    <ItemList items={itemdummies}></ItemList>
    </>
  );
  
}
