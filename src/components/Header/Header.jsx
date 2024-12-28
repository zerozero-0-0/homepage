import React from "react";

import Tab from "../Tab/Tab";
// import CSS
import "./Header.css";

// Import the image
import Banner from "../../assets/Xバナー.png";
import AtCoder from "../../assets/atcoder-black.png";
import X from "../../assets/logo-black.png";
import github from "../../assets/Github.png";

import menu from "../../assets/menu_000000.png";
 // --- tab images ---
import mail from "../../assets/mail-white.png";

const Header = () => {
  return (
    <div className="header">
      <div className="tab">
        <img src={menu} alt="" />
        <div className="tab_contents">

        </div>
      </div>
      <div className="banner">
        <a href="" className="banner">
          <img src={Banner} />
        </a>
      </div>
      <div className="access_links">
        <a
          href="https://atcoder.jp/users/zerozero_00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AtCoder} />
        </a>
        <a
          href="https://x.com/AaWlEw3pl899167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={X} />
        </a>
        <a
          href="https://github.com/zerozero-0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} />
        </a>
      </div>
    </div>
  );
};

export default Header;
