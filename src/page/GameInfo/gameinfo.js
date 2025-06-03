import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./gameinfo.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GameInfoF = () => {
    const navigate = useNavigate();
    const { appid } = useParams();
    const [gameInfoData, setGameInfoData] = useState(null);
    const [gameSimListData, setGameSimListData] = useState(null);
    const [gameGenreList, setGameGenreList] = useState(null);
    const [gameNegawordList, setGameNegawordList] = useState(null);
    const [gamePosiwordList, setGamePosiwordList] = useState(null);
    const [scorebydate, setscorebydate] = useState([]);
    const [yearMonthList, setYearMonthList] = useState([]);
    const [averageScoreList, setAverageScoreList] = useState([]);
    const [chartData, setChartData] = useState(null);
    const [chartKey, setChartKey] = useState(0); // 차트 키 추가
    const chartRef = useRef(null);

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
                setGameNegawordList(data.negaWord);
                setGamePosiwordList(data.posiWord);
                setscorebydate(data.scoreByDate);
                // if (data.scoreByDate) {
                //     setYearMonthList(
                //         data.scoreByDate.map((item) => item.yearMonth)
                //     );
                //     setAverageScoreList(
                //         data.scoreByDate.map((item) => item.averageScore)
                //     );
                // }
                // console.log(yearMonthList);
                // console.log(averageScoreList);
            } catch (error) {
                console.error("Error fetching GameInfo Data:", error);
            }
        };
        fetchGameInfoData();
    }, [appid]);

    useEffect(() => {
        console.log(scorebydate);
        if (scorebydate) {
            setYearMonthList(scorebydate.map((item) => item.yearMonth));
            setAverageScoreList(scorebydate.map((item) => item.averageScore));
        }
        // console.log(yearMonthList);
        // console.log(averageScoreList);
    }, [scorebydate]); // scorebydate가 변경될 때만 실행됨

    useEffect(() => {
        if (yearMonthList.length > 0 && averageScoreList.length > 0) {
            setChartData({
                labels: yearMonthList,
                datasets: [
                    {
                        label: "월별 점수 추이",
                        data: averageScoreList,
                        borderColor: "rgba(53, 162, 235, 1)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                        tension: 0.4,
                    },
                ],
            });
            setChartKey((prevKey) => prevKey + 1);
        }
    }, [yearMonthList, averageScoreList]);

    useEffect(() => {
        if (!chartRef.current) return;
        ChartJS.getChart("chartCanvas")?.destroy(); // 컴포넌트 언마운트 시 차트 제거
    }, []);

    if (!gameInfoData && !chartRef.current) {
        return <div>Loading...</div>;
    }

    const fetchComData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/wishlist?userId=${sessionStorage.getItem(
                    "userId"
                )}&gameId=${appid}`,
                {
                    method: "POST",
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            // if (response.ok) {
            //     throw new Error(`찜되었습니다`);
            // }
            console.log(response.text);
            const resultText = await response.text();
            alert(resultText);
        } catch (error) {
            console.error("Error during registration:", error);
            alert("찜하기 중 오류가 발생했습니다.");
        }
    };

    const handleCompare = () => {
        sessionStorage.getItem("userId")
            ? fetchComData()
            : alert("로그인하고 이용해주세요");
    };
    const handleSteamPage = () => {
        window.open(`https://store.steampowered.com/app/${appid}`);
    };
    const handleMain = () => {
        navigate("/");
    };

    return (
        <div className="gameinfof">
            <div className="infoheadviewer" onClick={handleMain}>
                리Viewer
            </div>
            <div className="gameinfomain">
                <div className="gameinfo">
                    <img
                        className="infoimageIcon"
                        alt=""
                        src={gameInfoData.image}
                    />
                    <div className="ginfocont">
                        <b className="infoviewer">
                            {" "}
                            {/* Monster Hunter Wilds */}
                            {gameInfoData.title || "게임 이름 없음"}
                        </b>
                        <b className="infob">
                            {/* 거칠고 치열한 자연의 습격. 시시각각 역동적으로 그
                            모습을 바꾸는 필드. 양면성을 지닌 세계를 살아가는
                            몬스터와 사람들의 이야기. 더욱더 발전한 헌팅 액션과
                            끊임없는 몰입감을 추구하는 궁극의 사냥 체험이 당신을
                            기다리고 있다. */}
                            {gameInfoData.description || "소개 없음"}
                        </b>
                        <div className="ginfofooter">
                            <div className="gameinfotaglist">
                                {/* <b className="infoviewer">사냥</b>
                                <b className="infoviewer">액션</b>
                                <b className="infoviewer">멀티플레이어</b> */}
                                {gameGenreList.map((gameGenreList, index) => (
                                    <b key={index} className="infoviewer">
                                        {gameGenreList}
                                    </b>
                                ))}
                            </div>
                        </div>
                        <div className="ginfofooter">
                            <div className="gcombutton" onClick={handleCompare}>
                                <b className="infoviewer">찜하기</b>
                            </div>
                            <div
                                className="gcombutton"
                                onClick={handleSteamPage}
                            >
                                <b className="infoviewer">스팀페이지 이동</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gkeywordmain">
                    <div className="gkeywordgoodmain">
                        <div className="gkeywordgheader">
                            <b className="infoviewer">긍정 키워드</b>
                            {/* <b className="infoviewer">총 100개</b> */}
                        </div>
                        <div className="gkeywordgmain">
                            {/* <b className="infoviewer">스토리가 좋음</b>
                            <b className="infob7">재밌음</b>
                            <b className="infob8">참신함</b> */}
                            {gamePosiwordList.length !== 0 ? (
                                gamePosiwordList.map(
                                    (gamePosiwordList, index) => (
                                        <b
                                            key={index}
                                            className="infob7"
                                            style={{
                                                fontSize: `${
                                                    gamePosiwordList.count > 10
                                                        ? gamePosiwordList.count >
                                                          50
                                                            ? 50
                                                            : 3 *
                                                                  gamePosiwordList.count >
                                                              50
                                                            ? gamePosiwordList.count
                                                            : gamePosiwordList.count
                                                        : 10
                                                }px`,
                                            }}
                                        >
                                            {gamePosiwordList.keyword}
                                        </b>
                                    )
                                )
                            ) : (
                                <b className="infob7">키워드없음</b>
                            )}
                        </div>

                        {/* <div className="frameinfoParent">
                            <div className="infoparent">
                                <b className="infoviewer">재밌음</b>
                                <b className="infoviewer">참신함</b>
                                <b className="infoviewer">스토리가 좋음</b>
                            </div>
                            <div className="infoparent">
                                <b className="infoviewer">30개 / 30%</b>
                                <b className="infoviewer">17개 / 17%</b>
                                <b className="infoviewer">10개 / 10%</b>
                            </div>
                        </div> */}
                    </div>
                    <div className="gkeywordmainChild" />
                    <div className="gkeywordgoodmain">
                        <div className="gkeywordgheader">
                            <b className="infoviewer">부정 키워드</b>
                            {/* <b className="infoviewer">총 60개</b> */}
                        </div>
                        <div className="gkeywordbmain">
                            {/* <b className="infoviewer">스토리가 너무 심오함</b>
                            <b className="infob18">진부함</b>
                            <b className="infob19">장르가 마이너함</b> */}
                            {gameNegawordList.length !== 0 ? (
                                gameNegawordList.map(
                                    (gameNegawordList, index) => (
                                        <div
                                            key={index}
                                            className="infob18"
                                            style={{
                                                fontSize: `${
                                                    gameNegawordList.count > 10
                                                        ? gameNegawordList.count >
                                                          50
                                                            ? 50
                                                            : 3 *
                                                                  gameNegawordList.count >
                                                              50
                                                            ? gameNegawordList.count
                                                            : gameNegawordList.count
                                                        : 10
                                                }px`,
                                            }}
                                        >
                                            {gameNegawordList.keyword}
                                        </div>
                                    )
                                )
                            ) : (
                                <div className="infob18">키워드없음</div>
                            )}
                        </div>
                        {/* <div className="frameinfoParent">
                            <div className="infoparent">
                                <b className="infoviewer">진부함</b>
                                <b className="infoviewer">장르가 마이너함</b>
                                <b className="infoviewer">
                                    스토리가 너무 심오함
                                </b>
                            </div>
                            <div className="infoparent">
                                <b className="infoviewer">12개 / 20%</b>
                                <b className="infoviewer">10개 / 16.7%</b>
                                <b className="infoviewer">6개 / 10%</b>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="gcalchart">
                    <b className="infoviewer">월별 점수 추이</b>
                    {/* <img className="infoimage1Icon" alt="" src="image 1.png" /> */}
                    {chartData && (
                        <div className="infoimage1Icon">
                            <Line
                                id="chartCanvas"
                                key={chartKey}
                                data={chartData}
                                options={{ responsive: true }}
                            />
                        </div>
                    )}
                </div>
                <div className="gcalchart">
                    <b className="infoviewer">게임 통계</b>
                    <div className="gstatsub">
                        <div className="gstattxtmain">
                            <div className="gstattxtheader">
                                <b className="infoviewer">평균 :</b>
                                <b className="infoviewer">상위 10% :</b>
                                <b className="infoviewer">평균 플레이타임 :</b>
                                {/* <b className="infoviewer">표준편차 :</b> */}
                            </div>
                            <div className="gstattxtfooter">
                                <b className="infoviewer">
                                    {gameInfoData.scoreTrend.average}시간
                                </b>
                                <b className="infoviewer">
                                    {gameInfoData.scoreTrend.top10Percent}시간
                                </b>
                                <b className="infoviewer">
                                    {gameInfoData.scoreTrend.avg}시간
                                </b>
                                {/* <b className="infoviewer">
                                    {gameInfoData.scoreTrend.stdDev}
                                </b> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ginfomainfooter">
                    <b className="infoviewer">비슷한 게임</b>
                    <div className="ginfomainfooteralign">
                        {gameSimListData.map((gameSimListData, index) => (
                            <div key={index} className="productInfoCard">
                                <Link to={`/gameinfo/${gameSimListData.appid}`}>
                                    <img
                                        className="infoimageIcon1"
                                        alt="infoImg"
                                        src={gameSimListData.image}
                                    />
                                    <div className="infobody">
                                        <div className="infotext">
                                            <b className="infotext1">
                                                {gameSimListData.title}
                                            </b>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                        {/* <div className="productInfoCard">
                            <img
                                className="infoimageIcon1"
                                alt=""
                                src="image.png"
                            />
                            <div className="body">
                                <div className="text">
                                    <b className="text1">Palworld / 팰월드</b>
                                </div>
                            </div>
                        </div>
                        <div className="productInfoCard">
                            <img
                                className="infoimageIcon1"
                                alt=""
                                src="image.png"
                            />
                            <div className="body">
                                <div className="text">
                                    <b className="text1">
                                        Monster Hunter Wilds
                                    </b>
                                </div>
                            </div>
                        </div>
                        <div className="productInfoCard">
                            <img
                                className="infoimageIcon1"
                                alt=""
                                src="image.png"
                            />
                            <div className="body">
                                <div className="text">
                                    <b className="text1">Ready or Not</b>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfoF;
