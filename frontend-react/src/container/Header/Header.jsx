import React from "react";
import { SocialMedia } from "../../components";

// importing the high order components
import { images } from "../../constants";
import "./Header.scss";

function Header() {
  return (
    <div className="app__header">
      <div>
        <img src={images.signature} alt="signature logo" />
        <h1>WEB DEVELOPER</h1>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Header;
