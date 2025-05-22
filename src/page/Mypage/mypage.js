import React from "react";
import "./mypage.css";

const MypageF = () => {
    return (
        <div className="mypage-f">
            <div className="mypage-main-f-wrapper">
                <div className="mypage-main-f">
                    <div className="text-wrapper">리Viewer</div>

                    <div className="mypage-button-f">
                        <div className="div-wrapper">
                            <div className="div">회원 정보 조회</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="div">찜 목록 조회</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="div">회원 탈퇴</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageF;
