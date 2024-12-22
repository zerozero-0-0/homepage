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
        <img src={AtCoder} />
        <img src={X} />
        <img src={github} />
      </div>
    </div>
  );
};

export default Header;
