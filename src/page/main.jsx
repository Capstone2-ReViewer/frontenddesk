import React from "react";
// import { IconButton } from "./IconButton";
// import { Search } from "./Search";
// import { Text } from "./Text";
import "../css/main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="div">
        <button className="button">
          <button className="button-2">로그인 / 회원가입</button>
        </button>

        <div className="search-bar">
          <div className="state-layer-2">
            <div className="content">
              <div className="supporting-text">여기가 검색창입니다!</div>
            </div>

            <div className="trailing-elements">
              {/* <IconButton
                icon={<Search className="search-instance" color="#49454F" />}
                stateProp="enabled"
                style="standard"
              /> */}
            </div>
          </div>
        </div>

        <div className="frame">
          <div className="frame-2">
            <div className="product-info-card">
              <div className="image" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Palworld / 팰월드"
                /> */}
              </div>
            </div>

            <div className="product-info-card">
              <div className="image-2" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Monster Hunter Wilds"
                /> */}
              </div>
            </div>

            <div className="product-info-card">
              <div className="image-3" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Ready or Not"
                /> */}
              </div>
            </div>
          </div>

          <div className="button-wrapper">
            <button className="button-3">게임순위표 보러가기</button>
          </div>
        </div>

        <div className="text-wrapper-2">리Viewer</div>
      </div>
    </div>
  );
};

export default Main;