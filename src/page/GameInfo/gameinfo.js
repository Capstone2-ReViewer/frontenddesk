// import { Text } from "./Text";
// import image1 from "./image-1.png";
// import image2 from "./image-2.png";
// import image from "./image.png";
import line1 from "../../img/line.svg";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./gameinfo.css";

const GameInfoF = () => {
    const navigate = useNavigate();
    const { appid } = useParams();
    const [gameInfoData, setGameInfoData] = useState(null);
    const [gameSimListData, setGameSimListData] = useState(null);
    const [gameGenreList, setGameGenreList] = useState(null);

    useEffect(() => {
        const fetchGameInfoData = async () => {
            try {
                // const response = await fetch(`/${appid}`);
                // const data = await response.json();
                // setGameInfoData(data);
                const response = await fetch(
                    `http://localhost:8080/api/games/${appid}`
                );
                const data = await response.json();
                console.log(data);
                setGameInfoData(data);
                console.log(data.similarGames);
                setGameSimListData(data.similarGames);
                console.log(data.genres);
                setGameGenreList(data.genres);
            } catch (error) {
                console.error("Error fetching GameInfo Data:", error);
            }
        };

        fetchGameInfoData();
    }, [appid]);

    if (!gameInfoData) {
        return <div>Loading...</div>;
    }
    const handleCompare = () => {};
    const handleSteamPage = () => {
        window.open(`https://store.steampowered.com/app/${appid}`);
    };
    const handleMain = () => {
        navigate("/");
    };

    return (
        <div className="game-info-f">
            <div className="div" onClick={handleMain}>
                리Viewer
            </div>

            <div className="game-info-main">
                <div className="game-info">
                    <img
                        className="ginfoimage"
                        alt="ginfoimage"
                        src={gameInfoData.image}
                    />

                    <div className="g-info-cont">
                        <div className="text-wrapper-2">
                            {/* Monster Hunter Wilds */}
                            {gameInfoData.title || "게임 이름 없음"}
                        </div>

                        <p className="p">
                            {/* 거칠고 치열한 자연의 습격. 시시각각 역동적으로 그
                            모습을 바꾸는 필드. 양면성을 지닌 세계를 살아가는
                            몬스터와 사람들의 이야기. 더욱더 발전한 헌팅 액션과
                            끊임없는 몰입감을 추구하는 궁극의 사냥 체험이 당신을
                            기다리고 있다. */}
                            {gameInfoData.description || "소개 없음"}
                        </p>
                        <div className="g-info-footer">
                            <div className="game-info-tag-list">
                                {/* <div className="text-wrapper-2">사냥</div>
                                <div className="text-wrapper-2">액션</div>
                                <div className="text-wrapper-2">
                                    멀티플레이어
                                </div> */}
                                {/* <div className="text-wrapper-2">
                                    {gameInfoData.genres[0] || "장르 없음"}
                                </div> */}
                                {gameGenreList.map((gameGenreList, index) => (
                                    <div key={index} className="text-wrapper-2">
                                        {gameGenreList}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="g-info-footer">
                            <button
                                className="g-com-button"
                                onClick={handleCompare}
                            >
                                <div className="g-com-button-txt">찜하기</div>
                            </button>
                            <button
                                className="g-com-button"
                                onClick={handleSteamPage}
                            >
                                <div className="g-com-button-txt">
                                    스팀페이지 이동
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="g-key-word-main">
                    <div className="div-2">
                        <div className="div-3">
                            <div className="text-wrapper-2">긍정 키워드</div>

                            <div className="text-wrapper-2">총 100개</div>
                        </div>

                        <div className="g-keyword-g-main">
                            <div className="text-wrapper-3">스토리가 좋음</div>

                            <div className="text-wrapper-4">재밌음</div>

                            <div className="text-wrapper-5">참신함</div>
                        </div>
                    </div>

                    <img className="line" alt="Line" src={line1} />

                    <div className="div-2">
                        <div className="div-3">
                            <div className="text-wrapper-2">부정 키워드</div>

                            <div className="text-wrapper-2">총 60개</div>
                        </div>

                        <div className="g-keyword-b-main">
                            <div className="text-wrapper-6">
                                스토리가 너무 심오함
                            </div>

                            <div className="text-wrapper-7">진부함</div>

                            <div className="text-wrapper-8">
                                장르가 마이너함
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-4">
                    <div className="text-wrapper-2">월별 점수 추이</div>
                    {/* 여기에 차트 */}
                    {/* <img className="img" alt="Image" src={image1} /> */}
                </div>

                <div className="div-4">
                    <div className="text-wrapper-2">게임 통계</div>

                    <div className="g-stat-sub">
                        {/* 여기에 차트 */}
                        {/* <img className="image-2" alt="Image" src={image} /> */}

                        <div className="g-stat-txt-main">
                            <div className="g-stat-txt-header">
                                <div className="text-wrapper-2">평균 :</div>

                                <div className="text-wrapper-9">상위 10% :</div>

                                <div className="text-wrapper-9">중위 :</div>

                                <div className="text-wrapper-9">표준편차 :</div>
                            </div>

                            <div className="g-stat-txt-footer">
                                <div className="text-wrapper-2">
                                    {gameInfoData.scoreTrend.average}시간
                                </div>

                                <div className="text-wrapper-9">
                                    {gameInfoData.scoreTrend.top10Percent}시간
                                </div>

                                <div className="text-wrapper-9">
                                    {gameInfoData.scoreTrend.median}시간
                                </div>

                                <div className="text-wrapper-9">
                                    {gameInfoData.scoreTrend.stdDev}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="g-info-main-footer">
                    <div className="text-wrapper-2">비슷한 게임</div>

                    <div className="g-info-main-footer-2">
                        {gameSimListData.map((gameSimListData, index) => (
                            <div key={index} className="product-info-card">
                                <Link to={`/gameinfo/${gameSimListData.appid}`}>
                                    <img
                                        className="image-3"
                                        alt="infoImg"
                                        src={gameSimListData.image}
                                    />
                                    <div className="text-instance">
                                        {gameSimListData.title}
                                    </div>
                                </Link>
                            </div>
                        ))}
                        {/* <div className="product-info-card">
                            <image
                                className="image-3"
                                src={gameSimListData.map}
                            />

                            <div className="body">
                                {gameInfoData.similarGames[0].title}
                                <Text
                                    className="text-instance"
                                    divClassName="design-component-instance-node"
                                    text="Palworld / 팰월드"
                                />
                            </div>
                        </div>

                        <div className="product-info-card">
                            <div className="image-4" />

                            <div className="body">
                                <Text
                                    className="text-instance"
                                    divClassName="design-component-instance-node"
                                    text="Monster Hunter Wilds"
                                />
                            </div>
                        </div>

                        <div className="product-info-card">
                            <div className="image-5" />

                            <div className="body">
                                <Text
                                    className="text-instance"
                                    divClassName="design-component-instance-node"
                                    text="Ready or Not"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfoF;

// import "./gameinfo.css";

// const GameInfoF = () => {
//     return (
//         <div className="gameinfof">
//             <div className="viewer">리Viewer</div>
//             <div className="gameinfomain">
//                 <div className="gameinfo">
//                     <img className="image-icon" alt="" src="image.png" />
//                     <div className="ginfocont">
//                         <b className="viewer">Monster Hunter Wilds</b>
//                         <b className="b">
//                             거칠고 치열한 자연의 습격. 시시각각 역동적으로 그
//                             모습을 바꾸는 필드. 양면성을 지닌 세계를 살아가는
//                             몬스터와 사람들의 이야기. 더욱더 발전한 헌팅 액션과
//                             끊임없는 몰입감을 추구하는 궁극의 사냥 체험이 당신을
//                             기다리고 있다.
//                         </b>
//                         <div className="ginfofooter">
//                             <div className="gameinfotaglist">
//                                 <b className="viewer">사냥</b>
//                                 <b className="viewer">액션</b>
//                                 <b className="viewer">멀티플레이어</b>
//                             </div>
//                             <div className="gcombutton">
//                                 <b className="viewer">찜하기</b>
//                             </div>
//                             <div className="gcombutton">
//                                 <b className="viewer">스팀페이지 이동</b>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="gkeywordmain">
//                     <div className="gkeywordgoodmain">
//                         <div className="gkeywordgheader">
//                             <b className="viewer">긍정 키워드</b>
//                             <b className="viewer">총 100개</b>
//                         </div>
//                         <div className="gkeywordgmain">
//                             <b className="viewer">스토리가 좋음</b>
//                             <b className="b7">재밌음</b>
//                             <b className="b8">참신함</b>
//                         </div>
//                         <div className="frame-parent">
//                             <div className="parent">
//                                 <b className="viewer">재밌음</b>
//                                 <b className="viewer">참신함</b>
//                                 <b className="viewer">스토리가 좋음</b>
//                             </div>
//                             <div className="parent">
//                                 <b className="viewer">30개 / 30%</b>
//                                 <b className="viewer">17개 / 17%</b>
//                                 <b className="viewer">10개 / 10%</b>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="gkeywordmain-child" />
//                     <div className="gkeywordgoodmain">
//                         <div className="gkeywordgheader">
//                             <b className="viewer">부정 키워드</b>
//                             <b className="viewer">총 60개</b>
//                         </div>
//                         <div className="gkeywordbmain">
//                             <b className="viewer">스토리가 너무 심오함</b>
//                             <b className="b18">진부함</b>
//                             <b className="b19">장르가 마이너함</b>
//                         </div>
//                         <div className="frame-parent">
//                             <div className="parent">
//                                 <b className="viewer">진부함</b>
//                                 <b className="viewer">장르가 마이너함</b>
//                                 <b className="viewer">스토리가 너무 심오함</b>
//                             </div>
//                             <div className="parent">
//                                 <b className="viewer">12개 / 20%</b>
//                                 <b className="viewer">10개 / 16.7%</b>
//                                 <b className="viewer">6개 / 10%</b>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="gcalchart">
//                     <b className="viewer">월별 점수 추이</b>
//                     <img className="image-1-icon" alt="" src="image 1.png" />
//                 </div>
//                 <div className="gcalchart">
//                     <b className="viewer">게임 통계</b>
//                     <div className="gstatsub">
//                         <img
//                             className="image-1-icon1"
//                             alt=""
//                             src="image 1.png"
//                         />
//                         <div className="gstattxtmain">
//                             <div className="gstattxtheader">
//                                 <b className="viewer">평균 :</b>
//                                 <b className="viewer">상위 10% :</b>
//                                 <b className="viewer">중위 :</b>
//                                 <b className="viewer">표준편차 :</b>
//                             </div>
//                             <div className="gstattxtfooter">
//                                 <b className="viewer">100시간</b>
//                                 <b className="viewer">537시간</b>
//                                 <b className="viewer">130시간</b>
//                                 <b className="viewer">171.15</b>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="ginfomainfooter">
//                     <b className="viewer">비슷한 게임</b>
//                     <div className="ginfomainfooteralign">
//                         <div className="product-info-card">
//                             <img
//                                 className="image-icon1"
//                                 alt=""
//                                 src="image.png"
//                             />
//                             <div className="body">
//                                 <div className="text">
//                                     <b className="text1">Palworld / 팰월드</b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-info-card">
//                             <img
//                                 className="image-icon1"
//                                 alt=""
//                                 src="image.png"
//                             />
//                             <div className="body">
//                                 <div className="text">
//                                     <b className="text1">
//                                         Monster Hunter Wilds
//                                     </b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-info-card">
//                             <img
//                                 className="image-icon1"
//                                 alt=""
//                                 src="image.png"
//                             />
//                             <div className="body">
//                                 <div className="text">
//                                     <b className="text1">Ready or Not</b>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GameInfoF;
