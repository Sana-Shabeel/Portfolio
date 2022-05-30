import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillCodepenCircle, AiFillGithub } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/Sana-Shabeel"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.codewars.com/users/Sana-Shabeel"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodewars />
      </a>
      <a
        href="https://www.linkedin.com/in/anas-barre-93303723a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://codepen.io/Mr-R0B0T" target="_blank" rel="noreferrer">
        <AiFillCodepenCircle />
      </a>
    </div>
  );
};

export default SocialMedia;
