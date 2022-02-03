import React from "react";

import CartButton from "../Cart/CartButton";
import "./Header.css";
import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <div className="header_container">
          <Logo />
          <CartButton />
      </div>
    </header>
  );
}
