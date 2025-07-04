// import React, { useEffect, useState } from "react";
import "./userview.css";
import { useNavigate } from "react-router-dom";

const UserViewF = () => {
    const navigate = useNavigate();
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const fetchGameInfoData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `http://localhost:8080/api/user/check-id?userId=${sessionStorage.getItem(
    //                     "userId"
    //                 )}`
    //             );
    //             const data = await response.json();
    //             setUserData(data);
    //             console.log(data);
    //         } catch (error) {
    //             console.error("Error fetching GameInfo Data:", error);
    //         }
    //     };

    //     fetchGameInfoData();
    // }, []);

    const handleMain = () => {
        navigate(`/`);
    };

    return (
        <div className="user-view-f">
            <div className="text-wrapper" onClick={handleMain}>
                회원 정보 조회
            </div>

            <div className="div">
                <div className="text-wrapper-2">아이디</div>

                <div className="div-2" />
            </div>

            <div className="div">
                <div className="text-wrapper-2">이름</div>

                <div className="div-2" />
            </div>

            <div className="div">
                <div className="text-wrapper-2">닉네임</div>

                <div className="div-2" />
            </div>

            <div className="div">
                <div className="text-wrapper-2">나이</div>

                <div className="div-2" />
            </div>

            <div className="user-gender-f">
                <div className="text-wrapper-3">성별</div>

                <div className="checkbox-and-label-wrapper">
                    <div className="checkbox-and-label">
                        <div className="radio">
                            <div className="radio-2" />
                        </div>

                        <div className="label">남자</div>
                    </div>
                </div>

                <div className="checkbox-and-label-wrapper">
                    <div className="checkbox-and-label-2">
                        <div className="radio-3" />

                        <div className="label">여자</div>
                    </div>
                </div>
            </div>

            <div className="user-genre-main-f">
                <div className="div-3">
                    <div className="text-wrapper-4">선호장르</div>

                    <div className="user-genre-list">
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">액션</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">판타지</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">FPS</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">샌드박스</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">RPG</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">어드벤처</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">MMORPG</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-3">
                    <div className="text-wrapper-4">비선호장르</div>

                    <div className="user-genre-list">
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">액션</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">판타지</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">FPS</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">샌드박스</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">RPG</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">어드벤처</div>
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <div className="checkbox" />

                                <div className="label-2">MMORPG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-re-regist">
                <button className="button">
                    <button className="button-2">정보 수정</button>
                </button>
            </div>
        </div>
    );
};

export default UserViewF;
