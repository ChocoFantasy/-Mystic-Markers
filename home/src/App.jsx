import { useState } from "react";
import "../css/style-home.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Story from "./pages/Storys";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import GlowingText from "./component/GlowingText";

function App() {
  return (
    <Routes>
      {/* 路由1: 包含 Navbar 和首頁的結構 */}
      <Route
        path="/"
        element={
          <>
            <main className="home">
              <section className="banner">
                <Navbar />
                <div className="logoXL">
                  <a href="./index.html">
                    <img id="mark" src="/images/LOGO.svg" alt="神秘座標" />
                    <img src="/images/logo_XL.svg" alt="神秘座標" />
                    <p>
                      <GlowingText text="MYSTIC MARKERS" />
                    </p>
                  </a>
                </div>
              </section>
            </main>
          </>
        }
      />
      {/* 路由2: 只顯示獨立頁面 */}
      <Route path="/Story" element={<Story />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}


export default App;

