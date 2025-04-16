import React from "react";
import "../css/mypage.css";

const MypageF = () => {
  return (
    <div className="mypage-f">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="text-wrapper">리Viewer</div>

          <div className="div">
            <button className="button">
              <button className="button-2">회원 정보 조회</button>
            </button>

            <button className="button">
              <button className="button-2">찜 목록 조회</button>
            </button>

            <button className="button">
              <button className="button-2">회원 탈퇴</button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageF;