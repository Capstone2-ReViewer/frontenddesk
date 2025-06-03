import React, { useState } from "react";
// import { TextLink } from "./TextLink";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginF = () => {
    const [logId, setlogId] = useState("");
    const [logPw, setlogPw] = useState("");
    const navigate = useNavigate();

    const fetchLoginData = async () => {
        try {
            const data = {
                userId: logId,
                password: logPw,
            };
            const response = await fetch(
                "http://localhost:8080/api/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            sessionStorage.setItem("userId", logId);
            // alert("로그인이 완료되었습니다.");
            navigate("/"); // 로그인 후 메인 페이지로 이동
        } catch (error) {
            console.error("Error during login:", error);
            alert("로그인 중 오류가 발생했습니다.");
            sessionStorage.clear();
        }
    };
    const handleLoginAction = () => {
        fetchLoginData();
    };

    const handleRegistAction = () => {
        navigate(`/userregist`);
    };
    const handleMain = () => {
        navigate(`/`);
    };
    return (
        <div className="loginf">
            <div className="loginmainf">
                <div className="loginviewer" onClick={handleMain}>
                    리Viewer
                </div>
                <div className="loginform">
                    <div className="idinput">
                        <b className="idinputtxt">아이디</b>
                        <input
                            type="text"
                            className="idinputblank"
                            placeholder=" ID"
                            value={logId}
                            onChange={(e) => setlogId(e.target.value)}
                        />
                    </div>
                    <div className="idinput">
                        <b className="idinputtxt">비밀번호</b>
                        <input
                            type="password"
                            className="idinputblank"
                            placeholder=" Password"
                            value={logPw}
                            onChange={(e) => setlogPw(e.target.value)}
                        />
                    </div>
                    <div className="loginPbutton" onClick={handleLoginAction}>
                        <div className="loginPb">
                            <b className="loginPtxt">로그인</b>
                        </div>
                    </div>
                    <div
                        className="registerbutton"
                        onClick={handleRegistAction}
                    >
                        <div className="registertxt">
                            아직 회원이 아니신가요?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginF;
