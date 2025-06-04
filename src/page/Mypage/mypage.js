import React from "react";
import { useNavigate } from "react-router-dom";
import "./mypage.css";

const MypageF = () => {
    // const url = process.env.DB_CONN_URL;
    const navigate = useNavigate();
    const handleMain = () => {
        navigate(`/`);
    };
    const handleUserView = () => {
        navigate(`/userview`);
    };
    const handleGCompare = () => {
        navigate(`/gamecompare`);
    };
    const handleUserLogout = () => {
        alert("로그아웃되었습니다.");
        sessionStorage.clear();
        navigate(`/`);
    };

    const handleUserExit = async () => {
        try {
            const response = await fetch(
                `http://ryurika.asuscomm.com:20000/api/user/delete?userId=${sessionStorage.getItem(
                    "userId"
                )}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            // if (response.ok) {
            //     throw new Error(`찜되었습니다`);
            // }
            console.log(response);
            alert("회원탈퇴가 완료되었습니다");
            sessionStorage.clear();
            navigate(`/`);
        } catch (error) {
            console.error("Error during registration:", error);
            alert("회원탈퇴 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="mypage-f">
            <div className="mypage-main-f-wrapper">
                <div className="mypage-main-f">
                    <div className="text-wrapper" onClick={handleMain}>
                        리Viewer
                    </div>

                    <div className="mypage-button-f">
                        <div className="div-wrapper" onClick={handleUserView}>
                            <div className="div">회원 정보 조회</div>
                        </div>

                        <div className="div-wrapper" onClick={handleGCompare}>
                            <div className="div">찜 목록 조회</div>
                        </div>
                        <div className="div-wrapper" onClick={handleUserExit}>
                            <div className="div">회원탈퇴</div>
                        </div>
                        <div className="div-wrapper" onClick={handleUserLogout}>
                            <div className="div">로그아웃</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageF;
