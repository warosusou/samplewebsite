import React from "react";
import "./App.css";
import Main from "./main";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div id="Left">
          <div id="logo">
            <img id="logoimg" src="./images/pm.png" />
            <p></p>
          </div>
          <div id="begin">
            <img src="./images/illust4.png" />
            <p>はじめに</p>
          </div>
          <div id="menu">
            <img src="./images/illust6.png" />
            <p>講座一覧</p>
          </div>
          <div id="apply">
            <img />
            <p>お申込み</p>
          </div>
          <div id="teacherinfo">
            <img src="./images/illust4.png" />
            <p>講師情報</p>
          </div>
          <div id="textbook">
            <img src="./images/illust6.png" />
            <p>教科書評</p>
          </div>
          <div id="qanda">
            <img src="./images/illust4.png" />
            <p>ご要望</p>
          </div>
        </div>
        <div id="Center">
          <div id="faq">
            <img src="./images/illust4.png" />
            <p>FAQ</p>
          </div>
          <div id="access">
            <img src="./images/illust6.png" />
            <p>アクセス</p>
          </div>
          <div id="contact">
            <img src="./images/illust4.png" />
            <p>お問い合わせ</p>
          </div>
          <div id="hire">
            <img src="./images/illust6.png" />
            <p>採用情報</p>
          </div>
        </div>
      </header>
      <Main/>
    </div>
  );
};

export default App;
