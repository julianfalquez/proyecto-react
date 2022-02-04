import React, { useState } from "react";

export const CartContext = React.createContext({
  products: 0,
  addCart: () => {}
});

export function CartContextProvider(props) {
  const [products, setProducts] = useState(0);

  const addCart=()=>{
    setProducts(prevState=>prevState+1)
  }

  return (
    <CartContext.Provider
      value={{
        products: products,
        addCart: addCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
