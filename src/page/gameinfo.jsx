import React from "react";
// import { Text } from "./Text";
// import image1 from "./image-1.png";
// import image2 from "./image-2.png";
// import image from "./image.png";
// import line1 from "./line-1.svg";
import "../css/gameinfo.css";

const GameInfoF = () => {
  return (
    <div className="game-info-f">
      <div className="div">리Viewer</div>

      <div className="frame">
        <div className="frame-2">
          {/* <img className="image" alt="Image" src={image2} /> */}

          <div className="frame-3">
            <div className="text-wrapper-2">Monster Hunter Wilds</div>

            <p className="p">
              거칠고 치열한 자연의 습격. 시시각각 역동적으로 그 모습을 바꾸는
              필드. 양면성을 지닌 세계를 살아가는 몬스터와 사람들의 이야기.
              더욱더 발전한 헌팅 액션과 끊임없는 몰입감을 추구하는 궁극의 사냥
              체험이 당신을 기다리고 있다.
            </p>

            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-2">사냥</div>

                <div className="text-wrapper-2">액션</div>

                <div className="text-wrapper-2">멀티플레이어</div>
              </div>

              <button className="button">
                <button className="button-2">찜하기</button>
              </button>
            </div>
          </div>
        </div>

        <div className="frame-6">
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-2">긍정 키워드</div>

              <div className="text-wrapper-2">총 100개</div>
            </div>

            <div className="frame-9">
              <div className="text-wrapper-3">스토리가 좋음</div>

              <div className="text-wrapper-4">재밌음</div>

              <div className="text-wrapper-5">참신함</div>
            </div>
          </div>

          {/* <img className="line" alt="Line" src={line1} /> */}

          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-2">부정 키워드</div>

              <div className="text-wrapper-2">총 60개</div>
            </div>

            <div className="frame-10">
              <div className="text-wrapper-6">스토리가 너무 심오함</div>

              <div className="text-wrapper-7">진부함</div>

              <div className="text-wrapper-8">장르가 마이너함</div>
            </div>
          </div>
        </div>

        <div className="frame-11">
          <div className="text-wrapper-2">월별 점수 추이</div>

          {/* <img className="img" alt="Image" src={image1} /> */}
        </div>

        <div className="frame-11">
          <div className="text-wrapper-2">월별 점수 추이</div>

          <div className="frame-12">
            {/* <img className="image-2" alt="Image" src={image} /> */}

            <div className="frame-wrapper">
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-2">평균 :</div>

                  <div className="text-wrapper-9">상위 10% :</div>

                  <div className="text-wrapper-9">중위 :</div>

                  <div className="text-wrapper-9">표준편차 :</div>
                </div>

                <div className="frame-15">
                  <div className="text-wrapper-2">100시간</div>

                  <div className="text-wrapper-9">537시간</div>

                  <div className="text-wrapper-9">130시간</div>

                  <div className="text-wrapper-9">171.15</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-16">
          <div className="text-wrapper-2">비슷한 게임</div>

          <div className="frame-17">
            <div className="product-info-card">
              <div className="image-3" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Palworld / 팰월드"
                /> */}
              </div>
            </div>

            <div className="product-info-card">
              <div className="image-4" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Monster Hunter Wilds"
                /> */}
              </div>
            </div>

            <div className="product-info-card">
              <div className="image-5" />

              <div className="body">
                {/* <Text
                  className="text-instance"
                  divClassName="design-component-instance-node"
                  text="Ready or Not"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfoF;