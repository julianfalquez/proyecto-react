import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/reducers/itemSlice";

export const ItemPage = () => {
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  const itemsStore = useSelector((state) => state.items.items);
  const { id } = useParams();

  useEffect(() => {
    console.log(itemsStore.length)
    if (itemsStore.length === 0) {
      console.log("hola")
      dispatch(fetchItems());
    } else {
      console.log("gola")
      const foundItem = itemsStore.find((element) => {
        return element.id === +id;
      });
      setItem(foundItem)
    }
  }, [id,itemsStore]);

  return (
    <>
      <div>{item?item.name:"laoding"}</div>
      <div>{item?item.price:"laoding"}</div>
    </>
  );
};
