import React, { useState } from "react";
import { Link } from "react-router";
import "./Tab.css";
import menu from "../../assets/menu_000000.png";


import { IoMdPerson } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { MdOutlineMonitor } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

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
          <div>
            <div className="box"></div>
            <div className="menu_title">メニュー</div>
            <table>
              <tr>
                <td>
                  <IoMdPerson size={"4rem"} />
                </td>
                <td>
                  <Link to="/">About</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <MdUpdate size={"4rem"} />
                </td>
                <td>
                  <Link to="/update">Update</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <MdOutlineMonitor size={"4rem"} />
                </td>
                <td>
                  <Link to="/web">Web</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <FaKeyboard size={"4rem"} />
                </td>
                <td>
                  <Link to="/contest">Contest</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <CiMail size={"4rem"} />
                </td>
                <td>
                  <Link to="/contact">Contact</Link>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
