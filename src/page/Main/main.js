// import React from "react";
// // import { IconButton } from "./IconButton";
// // import { Search } from "./Search";
// // import { Text } from "./Text";
// import "../css/main.css";

// const MainF = () => {
//   return (
//     <div className="main">
//       <div className="div">
//         <div className="login-button">
//           <button className="button">로그인 / 회원가입</button>
//         </div>

//         <div className="main-searchbar">
//           <div className="state-layer-2">
//             <div className="content">
//               <div className="supporting-text">여기가 검색창입니다!</div>
//             </div>

//             <div className="trailing-elements">
//               {/* <IconButton
//                 icon={<Search className="search-instance" color="#49454F" />}
//                 stateProp="enabled"
//                 style="standard"
//               /> */}
//             </div>
//           </div>
//         </div>

//         <div className="main-under-f">
//           <div className="main-under-info">
//             <div className="product-info-card">
//               <div className="image" />

//               <div className="body">
//                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Palworld / 팰월드"
//                 /> */}
//               </div>
//             </div>

//             <div className="product-info-card">
//               <div className="image-2" />

//               <div className="body">
//                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Monster Hunter Wilds"
//                 /> */}
//               </div>
//             </div>

//             <div className="product-info-card">
//               <div className="image-3" />

//               <div className="body">
//                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Ready or Not"
//                 /> */}
//               </div>
//             </div>
//           </div>

//           <div className="g-ranking-button">
//             <div className="g-ranking">게임순위표 보러가기</div>
//           </div>
//         </div>

//         <div className="text-wrapper-2">리Viewer</div>
//       </div>
//     </div>
//   );
// };

// export default MainF;


import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main" data-model-id="78:195">
      <div className="div">
        <div className="main-under-f">
          <div className="game">
            <div className="image" />

            <div className="text-wrapper">Palworld / 팰월드</div>
          </div>

          <div className="game">
            <div className="image" />

            <div className="text-wrapper">Palworld / 팰월드</div>
          </div>

          <div className="game">
            <div className="image" />

            <div className="text-wrapper">Palworld / 팰월드</div>
          </div>

          <div className="g-ranking-b">
            <div className="text-wrapper-2">
              게<br />임<br />순<br />위<br />표<br />
              <br />보<br />러<br />가<br />기
            </div>
          </div>
        </div>

        <div className="main-serch-bar">
          <div className="text-wrapper-3">검색창</div>
        </div>

        <div className="text-wrapper-4">리Viewer</div>

        <div className="text-wrapper-5">로그인</div>
      </div>
    </div>
  );
};

export default Main;