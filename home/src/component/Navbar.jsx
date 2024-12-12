import React, { useState } from "react";
import "../style.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Topbar">
      <div className="Topbar-right">
        {/* LOGO 圖標 */}
        <Link to="/">
          <div className="logo">
            <img src="/images/LOGO.svg" alt="神秘座標LOGO" />
            <h3 className="logoText">Mystic Markers</h3>
          </div>
        </Link>
        {/* 登入/註冊 */}
        <div className="member">
          <a href="">登入</a> | <a href="">註冊</a>
        </div>
      </div>
      {/* 通知/會員管理/MENU */}
      <nav className="navigation-1">
        <a href="#news">
          <img id="news" src="/images/news.png" alt="news" />
        </a>
        <a href="#Group">
          <img id="Group" src="/images/Group.svg" alt="Group" />
        </a>
        {/* Menu */}
        <div className="navbar">
          {/* 漢堡按鈕 */}
          <button
            className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {/* 導覽列 */}
          <nav
            className={`navigation ${isMenuOpen ? "show" : ""}`}
            onClick={() => setIsMenuOpen(false)} // 點擊關閉選單
          >
            <ul className="menu">
              <li>
                <Link to="/Story">怪談博物館</Link>
              </li>
              <li>
                <Link to="/Map">靈異導航</Link>
              </li>
              <li>
                <Link to="/Forum">靈異論壇</Link>
              </li>
              <li>
                <Link to="/Contact">聯絡我們</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;