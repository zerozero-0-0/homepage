import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import "./Tab.css";
import menu from "../../assets/menu_000000.png";

import { IoMdPerson } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Tab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabRef = useRef(null);

  const GetMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (tabRef.current && !tabRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tab" ref={tabRef}>
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
                  <IoMdPerson size={"3rem"} />
                </td>
                <td>
                  <Link to="/" onClick={GetMenuOpen}>About</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <MdUpdate size={"3rem"} />
                </td>
                <td>
                  <Link to="/update" onClick={GetMenuOpen}>Update</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <IoIosCode size={"3rem"} />
                </td>
                <td>
                  <Link to="/dev" onClick={GetMenuOpen}>Dev</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <MdOutlineMonitor size={"3rem"} />
                </td>
                <td>
                  <Link to="/web" onClick={GetMenuOpen}>Web</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <FaKeyboard size={"3rem"} />
                </td>
                <td>
                  <Link to="/contest" onClick={GetMenuOpen}>Contest</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <CiMail size={"3rem"} />
                </td>
                <td>
                  <Link to="/contact" onClick={GetMenuOpen}>Contact</Link>
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
