import React from "react";

// import CSS
import "./Header.css";
 

// Import the image
import Banner from '../../assets/Xバナー.png'
import AtCoder from '../../assets/atcoder-white.png'
import X from '../../assets/logo-white.png'
import github from '../../assets/github-mark-white.png'


const Header = () => {
  return (
    <div className="header">
      <img src={Banner} className="banner"/>
      <div className="access">
        <a href="https://atcoder.jp/users/zerozero_00" target="_blank"> 
          <img src={AtCoder} /> 
        </a>
        <a href="https://x.com/AaWlEw3pl899167" target="_blank">
          <img src={X} />
        </a>
        <a href="https://github.com/zerozero-0-0" target="_blank">
        <img src={github} />
        </a>
      </div>
    </div>
  );
};

export default Header;
