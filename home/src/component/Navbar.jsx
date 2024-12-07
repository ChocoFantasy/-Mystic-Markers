import "../../css/style.css";
import { Link } from "react-router-dom";

function Navbar() {
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
      <nav className="navigation">
        <a href="#news">
          <img id="news" src="/images/news.png" alt="news" />
        </a>
        <a href="#Group">
          <img id="Group" src="/images/Group.svg" alt="Group" />
        </a>
        {/* menu待補 */}
        <div className="navbar-menu">
          <button class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <nav class="navigation-menu">
            <ul class="menu">
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
