import React from "react";
// import { TextLink } from "./TextLink";
import "../css/login.css";

const LoginF = () => {
  return (
    <div className="login-f">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="div">리Viewer</div>

          <div className="login-form">
            <div className="div-2">
              <div className="label">아이디</div>

              <div className="input" />
            </div>

            <div className="div-2">
              <div className="label">비밀번호</div>

              <div className="input" />
            </div>

            <div className="button-group">
              <button className="button">
                <button className="button-2">로그인</button>
              </button>
            </div>

            {/* <TextLink
              className="text-link-instance"
              divClassName="design-component-instance-node"
              text="아직 회원이 아니신가요?"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginF;