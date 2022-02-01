import React from 'react';
import react_logo from '../../UI/react_logo.png'

import "./Title.css"

export default function Title() {
    return <div className="title_container">
      <img className="title_logo" src={react_logo} alt="react_logo" />
      <h1 className="title_text">SEARCHABLE <br />PRODUCT TABLE</h1>
  </div>;
}
