import React from "react";

import "./Web.css";
import zerozeroIcon from "../../assets/zerozeroIcon.png";

const Web = () => {
  const links = [
    {
      url: "https://zerozero-0-0.github.io/",
      title: "Previous homepage",
      img: zerozeroIcon,
      description : "昔のサイトです。 HTML, CSSを使って書きました。"
    },
  ];

  return (
    <div className="web">
      <div className="heading">
        <h2 className="back_font"> Web</h2>
        <h2 className="front_font"> ウェブ</h2>
      </div>
      <p>ウェブ関連の技術について書いていく予定です．</p>
      <div className="container">
        {links.map((link, index) => (
          <div className="card" key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.img} alt={link.title} className="card-img" />
              <div className="information">
                <div className="card-title"> {link.title} </div>
                <div className="card-description"> {link.description} </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
