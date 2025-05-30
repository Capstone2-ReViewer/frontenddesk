import React from "react";
// import { TextLink } from "./TextLink";
import "./login.css";

const LoginF = () => {
    const handleLoginAction = () => {};

    const handleRegistAction = () => {};

    return (
        <div className="login-f">
            <div className="login-main-f-wrapper">
                <div className="login-main-f">
                    <div className="div">리Viewer</div>

                    <div className="login-form">
                        <div className="div-2">
                            <div className="text-wrapper-2">아이디</div>

                            <div className="div-3" />
                        </div>

                        <div className="div-2">
                            <div className="text-wrapper-2">비밀번호</div>

                            <div className="div-3" />
                        </div>

                        <div className="login-button">
                            <div className="login-b">
                                <div className="login-txt">로그인</div>
                            </div>
                        </div>

                        {/* <TextLink
              className="register-button"
              divClassName="text-link-instance"
              text="아직 회원이 아니신가요?"
            /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginF;
