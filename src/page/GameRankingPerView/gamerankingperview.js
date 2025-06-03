import React, { useEffect, useState } from "react";
//import image2 from "./image-2.png";
//import image3 from "./image-3.png";
//import image from "./image.png";
import "./gamerankingperview.css";
import { Link, useNavigate } from "react-router-dom";

const GameRankingPerF = () => {
    // const url = process.env.DB_CONN_URL;
    const navigate = useNavigate();
    const [gRankingList, setGRankingList] = useState(null);
    const handleMain = () => {
        navigate(`/`);
    };

    useEffect(() => {
        const fetchRankingData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/ranking/user-tag/${sessionStorage.getItem(
                        "userId"
                    )}`
                );
                const data = await response.json();
                console.log("로그인");
                console.log(data);
                setGRankingList(data);
            } catch (error) {
                console.error("Error fetching GameInfo Data:", error);
            }
        };

        fetchRankingData();
    }, []);

    if (!gRankingList) {
        return <div>Loading...</div>;
    }

    return (
        <div className="game-ranking-f">
            <div className="text-wrapper" onClick={handleMain}>
                리Viewer
            </div>

            <div className="g-ranking-main">
                <div className="g-ranking-list">
                    {gRankingList.map((gRankingList, index) => (
                        <Link to={`/gameinfo/${gRankingList.appid}`}>
                            <div key={index} className="div">
                                <div className="text-wrapper-2">
                                    {index + 1}
                                </div>
                                <img
                                    className="image"
                                    alt="infoImg"
                                    src={gRankingList.image}
                                />
                                <div className="text-wrapper-2">
                                    {gRankingList.name}
                                </div>
                            </div>
                        </Link>
                    ))}
                    {/* <div className="div">
                        <div className="text-wrapper-2">1</div>

                        <img className="image" alt="Image" src={image} />

                        <div className="text-wrapper-2">
                            Monster Hunter Wilds
                        </div>
                    </div>

                    <div className="div">
                        <div className="text-wrapper-2">2</div>

                        <img className="image" alt="Image" src={image2} />

                        <div className="text-wrapper-2">Palworld</div>
                    </div>

                    <div className="div">
                        <div className="text-wrapper-2">3</div>

                        <img className="image" alt="Image" src={image3} />

                        <div className="text-wrapper-2">Ready or not</div>
                    </div> */}
                </div>

                {/* <div className="g-ranking-tag-f">
                    <div className="text-wrapper-3">선택태그</div>

                    <div className="g-ranking-tag-box">
                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">액션</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">판타지</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">FPS</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">샌드박스</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">RPG</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">어드벤처</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label">
                                <div className="checkbox" />

                                <div className="label">MMORPG</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default GameRankingPerF;
