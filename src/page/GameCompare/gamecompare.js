import { Link, useNavigate } from "react-router-dom";
import "./gamecompare.css";
import { useEffect, useState } from "react";

const GameCompareF = () => {
    const navigate = useNavigate();
    const [gcomList, setGcomList] = useState(null);

    useEffect(() => {
        const fetchGameInfoData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/wishlist/compare/${sessionStorage.getItem(
                        "userId"
                    )}`
                );
                const data = await response.json();
                setGcomList(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching GameInfo Data:", error);
            }
        };

        fetchGameInfoData();
    }, []);

    const handleComDel = async (appid) => {
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
            console.log(response);
            const resultText = await response.text();
            alert(resultText);
        } catch (error) {
            console.error("Error during registration:", error);
            alert("찜하기 중 오류가 발생했습니다.");
        }

        window.location.reload();
    };

    const handleMain = () => {
        navigate(`/`);
    };
    return (
        <div className="gamecomparef">
            <div className="gcomviewer" onClick={handleMain}>
                리Viewer
            </div>
            <div className="gcommainf">
                <div className="gcommainalignf">
                    {gcomList ? (
                        gcomList.map((gcomList, index) => (
                            <div className="gcomgame1" key={index}>
                                <Link
                                    to={`/gameinfo/${gcomList.appid}`}
                                    className="gcomgame1"
                                >
                                    <b className="b">{index + 1}</b>
                                    <div className="gcominfo1">
                                        <img
                                            className="gcomimageIcon"
                                            alt="infoImg"
                                            src={gcomList.image}
                                        />
                                        <b className="gcommonsterHunterWilds">
                                            {gcomList.title}
                                        </b>
                                    </div>
                                    <div className="gcomg1m1">
                                        <div className="gcomg1s1">
                                            <div className="gcomg1score">
                                                <b className="gcomdiv">
                                                    점수 : {gcomList.score}
                                                </b>
                                            </div>
                                            <div className="gcomg1score">
                                                <b className="gcomb2">
                                                    리뷰수 : {gcomList.count}
                                                </b>
                                            </div>
                                        </div>
                                        <div className="gcomwrapper">
                                            <b className="gcomb3">
                                                {gcomList.posiWord.length !== 0
                                                    ? gcomList.posiWord[0]
                                                          .keyword
                                                    : "키워드 없음"}
                                            </b>
                                        </div>
                                    </div>
                                    <div className="gcomg1m2">
                                        <div className="gcomg1s1">
                                            <div className="gcomg1score">
                                                <b className="gcomb4">
                                                    평균 :{" "}
                                                    {gcomList.avgPlaytime}
                                                    시간
                                                </b>
                                            </div>
                                            <div className="gcomcontainer">
                                                <b className="gcomb5">
                                                    상위 10% :{" "}
                                                    {gcomList.top10per}
                                                    시간
                                                </b>
                                            </div>
                                        </div>
                                        <div className="gcomframe">
                                            <b className="gcomb6">
                                                {gcomList.negaWord.length !== 0
                                                    ? gcomList.negaWord[0]
                                                          .keyword
                                                    : "키워드 없음"}
                                            </b>
                                        </div>
                                    </div>
                                </Link>
                                <div
                                    className="gcomg1delete"
                                    onClick={() => handleComDel(gcomList.appid)}
                                >
                                    <b className="gcombutton">삭제</b>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="gcomgame1">찜 내용이 없습니다</div>
                    )}
                    {/* <div className="gcomgame1">
                        <b className="b">1</b>
                        <div className="gcominfo1">
                            <img
                                className="gcomimageIcon"
                                alt=""
                                src="image.png"
                            />
                            <b className="gcommonsterHunterWilds">
                                Monster Hunter Wilds
                            </b>
                        </div>
                        <div className="gcomg1m1">
                            <div className="gcomg1s1">
                                <div className="gcomg1score">
                                    <b className="gcomdiv">점수 : 4.4</b>
                                </div>
                                <div className="gcomg1score">
                                    <b className="gcomb2">리뷰수 : 134</b>
                                </div>
                            </div>
                            <div className="gcomwrapper">
                                <b className="gcomb3">재미 입문용</b>
                            </div>
                        </div>
                        <div className="gcomg1m2">
                            <div className="gcomg1s1">
                                <div className="gcomg1score">
                                    <b className="gcomb4">평균 : 87시간</b>
                                </div>
                                <div className="gcomcontainer">
                                    <b className="gcomb5">표준편차 : 171.15</b>
                                </div>
                            </div>
                            <div className="gcomframe">
                                <b className="gcomb6">최적화 크래쉬</b>
                            </div>
                        </div>
                        <div className="gcomg1delete">
                            <b className="gcombutton">삭제</b>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default GameCompareF;
