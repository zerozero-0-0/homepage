import React, { useEffect, useState } from "react";

import "./Tab.css";

import arrowImg from "../../assets/right.png";
import humanImg from "../../assets/human-white.png";
import updateImg from "../../assets/update.png";
import webImg from "../../assets/desktop.png";
import contestImg from "../../assets/keyboard.png";
import mailImg from "../../assets/mail-white.png";
import menuImg from "../../assets/menu.png";


const Tab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getImg = (width) => {
    if(width > 800) {
      return arrowImg;
    } else {
      return menuImg;
    }
  };

  const DisplayImg = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const imgurl = getImg(width);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <img src={imgurl} alt="Responsive" />
    );
  };

  return (
    <div className="tab">
      <button onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <DisplayImg />
      </button>
      <br />
      <br />
      <div className={`contents ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <table>
            <tr>
              <td>
                <img src={humanImg} alt="Human" />
              </td>
              <td>Introduction</td>
            </tr>
            <tr>
              <td>
                <img src={updateImg} alt="Update" />
              </td>
              <td>Update</td>
            </tr>
            <tr>
              <td>
                <img src={webImg} alt="Web" />
              </td>
              <td>Web</td>
            </tr>
            <tr>
              <td>
                <img src={contestImg} alt="Contest" />
              </td>
              <td>Contest</td>
            </tr>
            <tr>
              <td>
                <img src={mailImg} alt="Contact" />
              </td>
              <td>Contact</td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tab;