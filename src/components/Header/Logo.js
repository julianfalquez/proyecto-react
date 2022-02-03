import React from "react";
import "./Header.css";
import react_logo from "../../UI/react_logo.png";

export default function Logo() {
  return (
    <div>
      <img className="logo" src={react_logo} alt="react_logo" />
      <h1 className="logo_text">SPT</h1>
    </div>
  );
}
