import React from "react";

// import CSS
import "./Header.css";

// Import the image
import Banner from '../../assets/Xバナー.png'
const Header = () => {
  return (
    <div>
      <img src={Banner} />
    </div>
  );
};

export default Header;
