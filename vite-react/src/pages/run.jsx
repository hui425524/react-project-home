import React from "react";
// import styled from "styled-components";
// import dropDark from "./images/drop_dark.png";
import '../css/run.css';


export default function App() {
  return (
    <>
      <section className="page-title">
        <h2>路跑路線</h2>
      </section>

      <section className="section-white">
        {/* 右上角水滴裝飾 */}
        <figure className="drop_dark">
          <img src="./images/drop_dark.png" alt="水滴掉落" />
        </figure>
      </section>

      {/* 第一部分：兩欄（左圖右文） */}
      <section className="section-hero">
        <div className="hero-grid">
          {/* 左：圖片 */}
          <figure className="hero-photo">
            <img src="./images/topimg.png" alt="善導寺微醺漫步" />
          </figure>

          {/* 右：文字卡 */}
          <div className="hero-text">
            <div className="vlabel">
              推薦路線<p>1</p>
            </div>

            <h3>善導寺微醺漫步</h3>
            <ul className="meta">
              <li>起點：That Bar</li>
              <li>終點：角落酒吧</li>
              <li>路線總長：0.8km</li>
              <li>酒吧／商店數量：3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 第二部分：黑色資訊帶 + 疊圖 */}
      <section className="section-mapArea">
        <div className="ro-stack">
          {/* 黑色資訊帶（跨全寬） */}
          <div className="ro-band">
            <div className="ro-band-inner">
              <h3>善導寺微醺漫步</h3>
              <ul className="ro-meta">
                <li>起點：That Bar</li>
                <li>路線總長：0.8km</li>
                <li>終點：角落酒吧</li>
                <li>酒吧／商店數量：3</li>
              </ul>
            </div>
          </div>

          {/* 疊在上面的地圖圖片（靠右） */}
          <figure className="map-card">
            <img src="./images/map.png" alt="善導寺微醺漫步 路線地圖" />
          </figure>
        </div>
      </section>
    </>
  );
}
