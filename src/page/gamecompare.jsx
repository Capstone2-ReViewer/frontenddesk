import React from "react";
// import { Rectangle } from "./Rectangle";
// import image2 from "./image-2.png";
// import image3 from "./image-3.png";
// import image from "./image.png";
import "../css/gamecompare.css";

const GameCompareF = () => {
  return (
    <div className="game-compare-f">
      <div className="text-wrapper">리Viewer</div>

      <div className="g-com-main-f">
        <div className="g-com-main-align-f">
          <div className="g-com-game">
            <div className="div">1</div>

            <div className="g-com-info">
              {/* <img className="image" alt="Image" src={image} /> */}

              <div className="text-wrapper-2">Monster Hunter Wilds</div>
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore />
                <GComScore divClassName="g-com-g-score" text="리뷰수 : 134" /> */}
              </div>

              {/* <GComScore
                className="rectangle"
                divClassName="g-com-g1-score"
                text="재미 입문용"
              /> */}
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore
                  divClassName="g-com-score-instance"
                  text="평균 : 87시간"
                />
                <GComScore
                  divClassName="g-com-g-score-instance"
                  text="표준편차 : 171.15"
                /> */}
              </div>

              {/* <GComScore
                className="g-com-g1-score-instance"
                divClassName="design-component-instance-node"
                text="최적화 크래쉬"
              /> */}
            </div>

            <div className="g-com-delete">
              <button className="button">삭제</button>
            </div>
          </div>

          <div className="g-com-game">
            <div className="div">2</div>

            <div className="g-com-info">
              {/* <img className="image" alt="Image" src={image2} /> */}

              <div className="div">Palworld</div>
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore text="점수 : 4.4" />
                <GComScore divClassName="g-com-g-score" text="리뷰수 : 134" /> */}
              </div>

              {/* <GComScore
                className="rectangle"
                divClassName="g-com-g1-score"
                text="재미 입문용"
              /> */}
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore
                  divClassName="g-com-score-instance"
                  text="평균 : 87시간"
                />
                <GComScore
                  divClassName="g-com-g-score-instance"
                  text="표준편차 : 171.15"
                /> */}
              </div>

              {/* <GComScore
                className="g-com-g1-score-instance"
                divClassName="design-component-instance-node"
                text="최적화 크래쉬"
              /> */}
            </div>

            <button className="button-wrapper">
              <button className="button">삭제</button>
            </button>
          </div>

          <div className="g-com-game">
            <div className="div">3</div>

            <div className="g-com-info">
              {/* <img className="image" alt="Image" src={image3} /> */}

              <div className="div">Ready or not</div>
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore divClassName="g-com-score-2" text="점수 : 4.4" />
                <GComScore divClassName="g-com-score-3" text="리뷰수 : 134" /> */}
              </div>

              {/* <GComScore
                className="rectangle"
                divClassName="g-com-g1-score"
                text="재미 입문용"
              /> */}
            </div>

            <div className="g-com">
              <div className="g-com-gs">
                {/* <GComScore
                  divClassName="g-com-score-instance"
                  text="평균 : 87시간"
                />
                <GComScore
                  divClassName="g-com-g-score-instance"
                  text="표준편차 : 171.15"
                /> */}
              </div>

              {/* <GComScore
                className="g-com-g1-score-instance"
                divClassName="design-component-instance-node"
                text="최적화 크래쉬"
              /> */}
            </div>

            <button className="button-wrapper">
              <button className="button">삭제</button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCompareF;
