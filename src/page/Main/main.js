// import React from "react";
// // import { IconButton } from "./IconButton";
// // import { Search } from "./Search";
// // import { Text } from "./Text";
// import { useNavigate } from "react-router-dom";
// import "./main.css";

// const Main = () => {
//     const navigate = useNavigate();

//     const handleGameInfoView = (appid) => {
//         navigate(`/gameinfo/${appid}`);
//     };

//     return (
//         <div className="main">
//             <div className="div">
//                 <div className="login-button">
//                     <button className="button">로그인 / 회원가입</button>
//                 </div>

//                 <div className="main-searchbar">
//                     <div className="state-layer-2">
//                         <div className="content">
//                             <div className="supporting-text">
//                                 여기가 검색창입니다!
//                             </div>
//                         </div>

//                         <div className="trailing-elements">
//                             {/* <IconButton
//                 icon={<Search className="search-instance" color="#49454F" />}
//                 stateProp="enabled"
//                 style="standard"
//               /> */}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="main-under-f">
//                     <div className="main-under-info">
//                         <div className="product-info-card">
//                             <div className="image" />

//                             <div className="body">
//                                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Palworld / 팰월드"
//                 /> */}
//                             </div>
//                         </div>

//                         <div className="product-info-card">
//                             <div className="image-2" />

//                             <div className="body">
//                                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Monster Hunter Wilds"
//                 /> */}
//                             </div>
//                         </div>

//                         <div className="product-info-card">
//                             <div className="image-3" />

//                             <div className="body">
//                                 {/* <Text
//                   className="text-instance"
//                   divClassName="design-component-instance-node"
//                   text="Ready or Not"
//                 /> */}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="g-ranking-button">
//                         <div className="g-ranking">게임순위표 보러가기</div>
//                     </div>
//                 </div>

//                 <div className="text-wrapper-2">리Viewer</div>
//             </div>
//         </div>
//     );
// };

// export default Main;

// // import React from "react";
// // import "./main.css";

// // const Main = () => {
// //   return (
// //     <div className="main" data-model-id="78:195">
// //       <div className="div">
// //         <div className="main-under-f">
// //           <div className="game">
// //             <div className="image" />

// //             <div className="text-wrapper">Palworld / 팰월드</div>
// //           </div>

// //           <div className="game">
// //             <div className="image" />

// //             <div className="text-wrapper">Palworld / 팰월드</div>
// //           </div>

// //           <div className="game">
// //             <div className="image" />

// //             <div className="text-wrapper">Palworld / 팰월드</div>
// //           </div>

// //           <div className="g-ranking-b">
// //             <div className="text-wrapper-2">
// //               게<br />임<br />순<br />위<br />표<br />
// //               <br />보<br />러<br />가<br />기
// //             </div>
// //           </div>
// //         </div>

// //         <div className="main-serch-bar">
// //           <div className="text-wrapper-3">검색창</div>
// //         </div>

// //         <div className="text-wrapper-4">리Viewer</div>

// //         <div className="text-wrapper-5">로그인</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;

import "./main.css";

const Main = () => {
    return (
        <div className="main">
            <div className="loginbutton">
                <b className="button">로그인 / 회원가입</b>
            </div>
            <div className="mainsearchbar">
                <div className="state-layer">
                    <div className="content">
                        <b className="supporting-text">여기가 검색창입니다!</b>
                    </div>
                    <div className="trailing-elements">
                        <div className="st-trailing-icon">
                            {/* <img
                                className="container-icon"
                                alt=""
                                src="container.svg"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainunderf">
                <div className="mainunderinfo">
                    <div className="product-info-card">
                        {/* <img className="image-icon" alt="" src="image.png" /> */}
                        <div className="body">
                            <div className="text">
                                <b className="text1">Palworld / 팰월드</b>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-card">
                        {/* <img className="image-icon" alt="" src="image.png" /> */}
                        <div className="body">
                            <div className="text">
                                <b className="text1">Monster Hunter Wilds</b>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-card">
                        {/* <img className="image-icon" alt="" src="image.png" /> */}
                        <div className="body">
                            <div className="text">
                                <b className="text1">Ready or Not</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grankingbutton">
                    <b className="granking">게임순위표 보러가기</b>
                </div>
            </div>
            <div className="viewer">리Viewer</div>
        </div>
    );
};

export default Main;
