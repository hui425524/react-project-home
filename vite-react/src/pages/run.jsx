import React from "react";
// import styled from "styled-components";
// import dropDark from "./images/drop_dark.png";
import '../css/run.css';

// const PageTitle = styled.section`
//   width:100%; height:160px; display:flex; justify-content:center; align-items:center;
//   background:#000; margin-top:70px;
//   h2{ color:#fff; font-size:48px; font-weight:700; letter-spacing:.1em; margin:0; }
// `;

// const SectionWhite = styled.section`
//   position:relative; background:#fff; padding:60px 0;
// `;

// const DropDark = styled.figure`
//   position:absolute; right:30px; top:-20px; width:100px; margin:0;
//   img{ display:block; width:100%; height:auto; }
// `;

// export default function App(){
//   return (
//     <>
//       <PageTitle><h2>路跑路線</h2></PageTitle>
//       <SectionWhite>
//         <DropDark><img src="./images/drop_dark.png" alt="水滴掉落" /></DropDark>
//       </SectionWhite>
//     </>
//   );
// }


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
    </>
  );
}
