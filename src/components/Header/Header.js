import React from "react";
import { useSelector } from "react-redux";

import CartButton from "../Cart/CartButton";
import "./Header.css";
import react_logo from "../../UI/react_logo.png";
import Cart from "../Cart/Cart";

export default function Header() {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <header className="header_container">
      <div>
        <img className="logo" src={react_logo} alt="react_logo" />
        <h1 className="logo_text">SPT</h1>
      </div>
      <div>
        <CartButton/>
        {showCart && <Cart />}
      </div>
    </header>
  );
}
