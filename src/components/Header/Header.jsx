import React from "react";

import Tab from "../Tab/Tab";
// import CSS
import "./Header.css";

// Import the image
import Banner from "../../assets/X_icon.png";
import AtCoder from "../../assets/atcoder-black.png";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="tab">
        <Tab />
      </div>
      <div className="banner">
        <a href="" className="banner">
          <img src={ Banner } />
        </a>
      </div>
      <div className="access_links">
        <a
          href="https://atcoder.jp/users/zerozero_00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ AtCoder } />
        </a>
        <a
          href="https://x.com/AaWlEw3pl899167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitterX size={"2.7rem"} />
        </a>
        <a
          href="https://github.com/zerozero-0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={"2.7rem"} />
       </a>
      </div>
    </div>
  );
};

export default Header;
