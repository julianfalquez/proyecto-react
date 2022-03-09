import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
import Item from "../Item/Item";

export default function Categories(props) {
  const items = props.items.map((item) => (
    <li key={item.id}>
      <Link style={{textDecoration:'none'}} to={`${item.id}`}> <Item itemInfo={item} /></Link>
    </li>
  ));

  return (
    <>
      <div className="cat_title">
        <h2>{props.catTitle}</h2>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>{items}</ul>
    </>
  );
}
