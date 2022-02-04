import React from "react";

import CartButton from "../Cart/CartButton";
import "./Header.css";
import react_logo from "../../UI/react_logo.png";

export default function Header() {
  return (
    <header className="header_container">
      <div>
        <img className="logo" src={react_logo} alt="react_logo" />
        <h1 className="logo_text">SPT</h1>
      </div>
      <div>
        <CartButton />
      </div>
    </header>
  );
}
