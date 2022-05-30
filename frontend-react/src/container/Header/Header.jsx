import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

// importing the high order components
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

function Header() {
  return (
    <div className="app__header ">
      <div className="app__header-intro app__flex">
        <div className="app__header-img">
          <img src={images.herobg} alt="hero banner" />
        </div>
        <div className="app__header-intro-text">
          <p className="p-text p-greeting">👋 Hello, I am</p>
          <h1>
            Anas <span>Barre</span>
          </h1>
          <h2 className="occupation">Web Developer</h2>
          <button className="myButton">
            <span>Download</span> Resume <HiOutlineDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Header, "home");
