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

// import React from "react";
// import "./main.css";

// const Main = () => {
//   return (
//     <div className="main" data-model-id="78:195">
//       <div className="div">
//         <div className="main-under-f">
//           <div className="game">
//             <div className="image" />

//             <div className="text-wrapper">Palworld / 팰월드</div>
//           </div>

//           <div className="game">
//             <div className="image" />

//             <div className="text-wrapper">Palworld / 팰월드</div>
//           </div>

//           <div className="game">
//             <div className="image" />

//             <div className="text-wrapper">Palworld / 팰월드</div>
//           </div>

//           <div className="g-ranking-b">
//             <div className="text-wrapper-2">
//               게<br />임<br />순<br />위<br />표<br />
//               <br />보<br />러<br />가<br />기
//             </div>
//           </div>
//         </div>

//         <div className="main-serch-bar">
//           <div className="text-wrapper-3">검색창</div>
//         </div>

//         <div className="text-wrapper-4">리Viewer</div>

//         <div className="text-wrapper-5">로그인</div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import { useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import "./main.css";

// const Main = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchGameSListData = async () => {
//             try {
//                 // const response = await fetch(`/${appid}`);
//                 // const data = await response.json();
//                 // setGameInfoData(data);
//                 const response = await fetch(
//                     `http://localhost:8080/simple-list`
//                 );
//                 const data = await response.json();
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching GameInfo Data:", error);
//             }
//         };

//         fetchGameSListData();
//     }, []);

//     const handleGameInfoView = (appid) => {
//         navigate(`/gameinfo/${appid}`);
//     };

//     const handleGRanking = () => {
//         navigate(`/gameranking`);
//     };

//     const handleUser = () => {
//         navigate(`/mypage`);
//     };

//     const handleLogin = () => {
//         navigate(`login`);
//     };

//     return (
//         <div className="main">
//             <div className="loginbutton" onClick={handleLogin}>
//                 <b className="button">로그인 / 회원가입</b>
//             </div>
//             <div className="mainsearchbar">
//                 <div className="state-layer">
//                     <div className="content">
//                         <b className="supporting-text">여기가 검색창입니다!</b>
//                     </div>
//                     <div className="trailing-elements">
//                         <div className="st-trailing-icon">
//                             {/* <img
//                                 className="container-icon"
//                                 alt=""
//                                 src="container.svg"
//                             /> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mainunderf">
//                 <div className="mainunderinfo">
//                     <div className="product-info-card">
//                         {/* <img className="image-icon" alt="" src="image.png" /> */}
//                         <div className="body">
//                             <div className="text">
//                                 <b className="text1">Palworld / 팰월드</b>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-info-card">
//                         {/* <img className="image-icon" alt="" src="image.png" /> */}
//                         <div className="body">
//                             <div className="text">
//                                 <b className="text1">Monster Hunter Wilds</b>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-info-card">
//                         {/* <img className="image-icon" alt="" src="image.png" /> */}
//                         <div className="body">
//                             <div className="text">
//                                 <b className="text1">Ready or Not</b>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grankingbutton" onClick={handleGRanking}>
//                     <b className="granking">게임순위표 보러가기</b>
//                 </div>
//             </div>
//             <div className="viewer">리Viewer</div>
//         </div>
//     );
// };

// export default Main;

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
    // const navigate = useNavigate();
    const [keyList, setKeyList] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [keyItems, setKeyItems] = useState([]);
    const [isEmpty, setisEmpty] = useState(true);
    useEffect(() => {
        const fetchGameSListData = async () => {
            try {
                const res = await fetch(`http://localhost:8080/simple-list`);
                const data = await res.json();
                console.log(data);
                setKeyList(data);
                setisEmpty(true);
            } catch (error) {
                setisEmpty(false);
                console.error("Error fetching GameInfo Data:", error);
            }
        };

        fetchGameSListData();
    }, []);
    // const updateData = async () => {
    //     let b = keyList?.filter(
    //         (keyList) => keyList.name.includes(keyword) === true
    //     );
    //     // console.log(b);
    //     setKeyItems(b);
    // };
    useEffect(() => {
        const debounce = setTimeout(() => {
            console.log(keyList);
            if (keyword) {
                let b = keyList.filter(
                    (keyList) => keyList.name.includes(keyword) === true
                );
                // console.log(b);
                setKeyItems(b);
            }
        }, 200);
        return () => {
            clearTimeout(debounce);
        };
    }, [keyword, keyList]);

    // const handleGameInfoView = (appid) => {
    //     navigate(`/gameinfo/${appid}`);
    // };

    // const handleGRanking = () => {
    //     navigate(`/gameranking`);
    // };

    // const handleUser = () => {
    //     navigate(`/mypage`);
    // };

    // const handleLogin = () => {
    //     navigate(`login`);
    // };

    // const handleSearch = () => {};

    return (
        <div className="main">
            <div className="loginbutton">
                <b className="button">로그인 / 회원가입</b>
            </div>
            <div className="mainsearchbar">
                <div className="stateLayer">
                    {/* <input className="content">
                        <b className="supportingText"></b>
                    </input> */}
                    <input
                        type="text"
                        className="content"
                        placeholder=" 여기가 검색창입니다!"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    {/* <div className="trailingElements" onClick={handleSearch}>
                        <div className="stTrailingIcon">
                            <b className="containerIcon">검색</b>
                        </div>
                    </div> */}
                    {/* <div className="trailingElements">
                        <div className="stTrailingIcon">
                            <img
                                className="containerIcon"
                                alt=""
                                src="container.svg"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="sbarlistmainf">
                {/* <div className="sbarlistsubf">
                    <b className="sbarlisttxt">Counter-Strike 2</b>
                </div> */}
                {isEmpty ? (
                    keyItems.length > 0 &&
                    keyword &&
                    keyItems.map((keyItems, index) => (
                        <div key={index} className="sbarlistsubf">
                            <Link to={`/gameinfo/${keyItems.appid}`}>
                                <b className="sbarlisttxt">{keyItems.name}</b>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="sbarlistsubf">
                        <b className="sbarlisttxt">앗! 검색 내용이 없어요!</b>
                    </div>
                )}
            </div>
            <div className="mainunderf">
                <div className="mainunderinfo">
                    <div className="productInfoCard">
                        {/* <img
                            className="imageIcon"
                            alt=""
                            src={keyList.i}
                        /> */}
                        <div className="body">
                            <div className="text">
                                <b className="text1">Palworld / 팰월드</b>
                            </div>
                        </div>
                    </div>
                    <div className="productInfoCard">
                        {/* <img
                            className="imageIcon"
                            alt=""
                            src="image.png"
                        /> */}
                        <div className="body">
                            <div className="text">
                                <b className="text1">Monster Hunter Wilds</b>
                            </div>
                        </div>
                    </div>
                    <div className="productInfoCard">
                        {/* <img
                            className="imageIcon"
                            alt=""
                            src="image.png"
                        /> */}
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
