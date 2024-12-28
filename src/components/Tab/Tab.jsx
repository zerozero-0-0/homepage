import React, { useState } from "react";

import "./Tab.css";
import menu from "../../assets/menu_000000.png";

import { IoMdPerson } from "react-icons/io";
import updateImg from "../../assets/update.png";
import webImg from "../../assets/desktop.png";
import contestImg from "../../assets/keyboard.png";
import mailImg from "../../assets/mail-white.png";

const Tab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const GetMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tab">
      <div className="tab_menu">
        <img src={menu} alt="" onClick={GetMenuOpen} />
      </div>
      <div className={`contents ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <table>
            <tr>
              <td>
                <IoMdPerson />
              </td>
              <td>Introduction</td>
            </tr>
            <tr>
              <td>
                <img src={updateImg} alt="" />
              </td>
              <td>Update</td>
            </tr>
            <tr>
              <td>
                <img src={webImg} alt="" />
              </td>
              <td>Web</td>
            </tr>
            <tr>
              <td>
                <span className="material-symbols-outlined">keyboard</span>
              </td>
              <td>Contest</td>
            </tr>
            <tr>
              <td>
                <img src={mailImg} alt="" />
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
