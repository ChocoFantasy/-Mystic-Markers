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
      <nav className="navigation-1">
        <a href="#news">
          <img id="news" src="/images/news.png" alt="news" />
        </a>
        <a href="#Group">
          <img id="Group" src="/images/Group.svg" alt="Group" />
        </a>
        {/* menu待補 */}
        <div className="navbar">
          {/* <!-- 漢堡按鈕 三 > X --> */}
          <button className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {/* <!-- 導覽列 --> */}
          <nav className="navigation">
            {/* <!-- 主選單 --> */}
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

      {/* ju cdn */}
      <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

      {/* 套件:漢堡按鈕 */}
      <script src="../js/script.js"></script>
    </header>
  );
}
export default Navbar;
