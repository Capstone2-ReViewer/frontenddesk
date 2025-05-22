import React from "react";
//import image2 from "./image-2.png";
//import image3 from "./image-3.png";
//import image from "./image.png";
import "./gamerankingview.css";

const GameRankingF = () => {
    return (
        <div className="game-ranking-f">
            <div className="text-wrapper">리Viewer</div>

            <div className="g-ranking-main">
                <div className="g-ranking-list">
                    <div className="div">
                        <div className="text-wrapper-2">1</div>

                        {/* <img className="image" alt="Image" src={image} /> */}

                        <div className="text-wrapper-2">
                            Monster Hunter Wilds
                        </div>
                    </div>

                    <div className="div">
                        <div className="text-wrapper-2">2</div>

                        {/* <img className="image" alt="Image" src={image2} /> */}

                        <div className="text-wrapper-2">Palworld</div>
                    </div>

                    <div className="div">
                        <div className="text-wrapper-2">3</div>

                        {/* <img className="image" alt="Image" src={image3} /> */}

                        <div className="text-wrapper-2">Ready or not</div>
                    </div>
                </div>

                <div className="g-ranking-tag-f">
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
                </div>
            </div>
        </div>
    );
};

export default GameRankingF;
