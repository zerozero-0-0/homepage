import React from "react";

// import CSS
import "./Header.css";

// Import the image
import Banner from "../../assets/Xバナー.png";
import AtCoder from "../../assets/atcoder-black.png";
import X from "../../assets/logo-black.png";
import github from "../../assets/Github.png";

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <a href="#top" className="banner">
          <img src={Banner} className="banner" />
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
