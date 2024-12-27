import React from "react";

import "./About.css";

// ---images---
import Chiba from "../../assets/chiba.png"
import su from "../../assets/sulogo.png"

const about = () => {
  return (
    <div className="about">
      <div className="heading">
      <h2 className="back_font"> About me</h2>
      <h2 className="front_font"> 自己紹介</h2>
      </div>
      <div className="about_me">
        <div className="contents">
          私は
          <a
            href="https://www.saitama-u.ac.jp/engineering/"
            target="_blank"
            rel="noopener noreferrer"
            className="su"
          >
            埼玉大学工学部情報工学科
          </a>
          に所属しているぜろぜろといいます。
          <br />
          Zrzrだったり, zerozeroだったり, zerozero-00だったりします。
          <br />
          同学プログラミングサークル{" "}
          <a
            href="https://maximum.vc/"
            target="_blank"
            rel="noopener noreferrer"
            className="atcoder"
          >
            Maximum
          </a>
          にも所属しています。
          <br />
          フロントエンド, バックエンド関わらず幅広く学習をしています。
          <br />
          <p>現在は以下の目標のもと活動に取り組んでいます。</p>
          <ul>
            <li>AtCoderで入緑(レーティング800以上)になる</li>
            <li>TOEFL ITPでスコア600以上を獲得する</li>
            <li>ICPC本選出場</li>
            <li>Web Speed Hackathon で入賞</li>
          </ul>
        </div> 
      </div>
      <div className="about_myHistory">
        <table>
          <tr>
            <th>2006. 1</th>
            <td>千葉県に生まれる</td>
            <td><img src={ Chiba } alt="" /></td>
          </tr>
          <tr>
            <th>2024. 4</th>
            <td>埼玉大学に入学</td>
            <td><img src={ su } alt="" /> </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default about;
