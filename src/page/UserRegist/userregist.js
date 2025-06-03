import "./userregist.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInF = () => {
    const [cpId, setcpId] = useState("");
    const [cpPw, setcpPw] = useState("");
    const [cpPwCheck, setcpPwCheck] = useState("");
    const [cpName, setcpName] = useState("");
    const [cpNickname, setcpNickname] = useState("");
    const [cpAge, setcpAge] = useState(1);
    const [cpGender, setcpGender] = useState("");
    const [cpPreferredTags, setcpPreferredTags] = useState("");
    const [cpDislikedTags, setcpDislikedTags] = useState("");
    const navigate = useNavigate();

    const tagMap = {
        1: "액션",
        2: "어드벤처",
        3: "RPG",
        4: "시뮬레이션",
        5: "스포츠",
        6: "전략",
        7: "캐주얼",
        8: "공포",
        9: "퍼즐",
        10: "레이싱",
    };

    // const parseTags = (tagStr) => {
    //     if (!tagStr.trim()) return []; // 빈 문자열이면 빈 배열 반환
    //     const tags = tagStr
    //         .split(",")
    //         .map((str) => str.trim())
    //         .filter((s) => s !== "")
    //         .map((idStr) => {
    //             const id = parseInt(idStr);
    //             if (isNaN(id)) throw new Error(`잘못된 태그 ID: "${idStr}"`);
    //             return { tagId: id, tagName: tagMap[id] || "알 수 없음" };
    //         });
    //     return tags;
    // };

    const redirectTags = (nonfilterTagId) => {
        console.log(nonfilterTagId);

        // ID에 해당하는 태그 이름 찾기
        const AfterfilterIds = nonfilterTagId.map((id) => ({
            tagId: id,
            tagName: tagMap[id] || "알 수 없음", // 예외 처리
        }));

        // 상태 업데이트
        return AfterfilterIds;
    };
    // const redirectTags = (filterTags) => {
    //     // ID 값을 배열로 변환
    //     const filterTagsId = filterTags.split(",").map(Number);

    //     // ID에 해당하는 태그 이름 찾기
    //     const filterTags = filterTagsId.map((id) => ({
    //         tagId: id,
    //         tagName: tagMap[id] || "알 수 없음", // 예외 처리
    //     }));

    //     // 상태 업데이트
    //     return filterTags;
    // };

    const fetchCPData = async () => {
        if (cpPw !== cpPwCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            let filterPreferredTags, filterDislikedTags;
            try {
                filterPreferredTags = redirectTags(cpPreferredTags);
                filterDislikedTags = redirectTags(cpDislikedTags);
            } catch (err) {
                alert(err.message);
                return;
            }

            const data = {
                userId: cpId,
                password: cpPw,
                passwordCheck: cpPwCheck,
                name: cpName,
                nickname: cpNickname,
                age: cpAge,
                gender: cpGender,
                preferredTags: filterPreferredTags,
                dislikedTags: filterDislikedTags,
            };
            console.log(JSON.stringify(data));
            const response = await fetch(
                "http://localhost:8080/api/user/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            alert("회원가입이 완료되었습니다.");
            navigate("/login"); // 회원가입 후 로그인 페이지로 이동
        } catch (error) {
            console.error("Error during registration:", error);
            alert("회원가입 중 오류가 발생했습니다.");
        }
    };

    const cpSubmit = () => {
        // if (window.confirm("위 내용으로 회원가입하시겠습니까?")) {
        //     fetchCPData();
        // }
        fetchCPData();
    };
    // const handleMain = () => {
    //     navigate("/main");
    // };

    const checkPreferHandle = (checked, id) => {
        if (checked) {
            setcpPreferredTags([...cpPreferredTags, id]);
        } else {
            // 체크 해제
            setcpPreferredTags(cpPreferredTags.filter((el) => el !== id));
        }
    };
    const checkDislikeHandle = (checked, id) => {
        if (checked) {
            setcpDislikedTags([...cpDislikedTags, id]);
        } else {
            // 체크 해제
            setcpDislikedTags(cpDislikedTags.filter((el) => el !== id));
        }
    };

    const handleMain = () => {
        navigate(`/`);
    };

    return (
        <div className="user-in-f">
            <div className="text-wrapper" onClick={handleMain}>
                회원가입
            </div>

            <div className="div">
                <div className="text-wrapper-2">아이디</div>
                <input
                    type="text"
                    className="div-2"
                    placeholder=" ID"
                    value={cpId}
                    onChange={(e) => setcpId(e.target.value)}
                />
            </div>

            <div className="div">
                <div className="text-wrapper-2">비밀번호</div>

                <input
                    type="password"
                    className="div-2"
                    placeholder=" PW"
                    value={cpPw}
                    onChange={(e) => setcpPw(e.target.value)}
                />
            </div>

            <div className="div">
                <div className="text-wrapper-2">비밀번호 확인</div>

                <input
                    type="password"
                    className="div-2"
                    placeholder=" PW Check"
                    value={cpPwCheck}
                    onChange={(e) => setcpPwCheck(e.target.value)}
                />
            </div>

            <div className="div">
                <div className="text-wrapper-2">이름</div>

                <input
                    type="text"
                    className="div-2"
                    placeholder=" Name"
                    value={cpName}
                    onChange={(e) => setcpName(e.target.value)}
                />
            </div>

            <div className="div">
                <div className="text-wrapper-2">닉네임</div>

                <input
                    type="text"
                    className="div-2"
                    placeholder=" Nickname"
                    value={cpNickname}
                    onChange={(e) => setcpNickname(e.target.value)}
                />
            </div>

            <div className="div">
                <div className="text-wrapper-2">나이</div>

                <input
                    type="number"
                    className="div-2"
                    placeholder=" Age"
                    value={cpAge}
                    onChange={(e) => setcpAge(e.target.value)}
                />
            </div>

            <div className="user-gender-f">
                <div className="text-wrapper-3">성별</div>
                <select
                    className="checkbox-and-label-wrapper"
                    name="gender"
                    onChange={(e) => setcpGender(e.target.value)}
                    required
                >
                    <option value="">성별 선택</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                {/* <div className="checkbox-and-label-wrapper">
                    <div className="checkbox-and-label">
                        <input
                            type="radio"
                            name="radio"
                            className="radio"
                            value={cpId}
                            defaultChecked={true}
                        />
                        <div className="label">남자</div>
                        <input
                            type="radio"
                            name="radio"
                            className="radio"
                            value={cpPw}
                        />

                        <div className="label">여자</div>
                    </div>
                </div> */}

                <div className="checkbox-and-label-wrapper">
                    {/* <div className="checkbox-and-label-2">
                        <div className="radio-3" />

                        <div className="label">여자</div>
                    </div> */}
                </div>
            </div>

            <div className="user-genre-main-f">
                <div className="div-3">
                    <div className="text-wrapper-4">선호장르</div>

                    <div className="user-genre-list">
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="action"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="액션"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            1
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(1)
                                            ? true
                                            : false
                                    }
                                />
                                액션
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="adventure"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="어드벤처"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            2
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(2)
                                            ? true
                                            : false
                                    }
                                />
                                어드벤처
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="rpg"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="RPG"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            3
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(3)
                                            ? true
                                            : false
                                    }
                                />
                                RPG
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="simulation"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="시뮬레이션"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            4
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(4)
                                            ? true
                                            : false
                                    }
                                />
                                시뮬레이션
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="sport"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="스포츠"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            5
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(5)
                                            ? true
                                            : false
                                    }
                                />
                                스포츠
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="strategy"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="전략"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            6
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(6)
                                            ? true
                                            : false
                                    }
                                />
                                전략
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="casual"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="캐주얼"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            7
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(7)
                                            ? true
                                            : false
                                    }
                                />
                                캐주얼
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="horror"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="공포"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            8
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(8)
                                            ? true
                                            : false
                                    }
                                />
                                공포
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="puzzle"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="퍼즐"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            9
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(9)
                                            ? true
                                            : false
                                    }
                                />
                                퍼즐
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="racing"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="레이싱"
                                    onChange={(e) => {
                                        checkPreferHandle(
                                            e.currentTarget.checked,
                                            10
                                        );
                                    }}
                                    checked={
                                        cpPreferredTags.includes(10)
                                            ? true
                                            : false
                                    }
                                />
                                레이싱
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-3">
                    <div className="text-wrapper-4">비선호장르</div>

                    <div className="user-genre-list">
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="action"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="액션"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            1
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(1)
                                            ? true
                                            : false
                                    }
                                />
                                액션
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="adventure"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="어드벤처"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            2
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(2)
                                            ? true
                                            : false
                                    }
                                />
                                어드벤처
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="rpg"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="RPG"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            3
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(3)
                                            ? true
                                            : false
                                    }
                                />
                                RPG
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="simulation"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="시뮬레이션"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            4
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(4)
                                            ? true
                                            : false
                                    }
                                />
                                시뮬레이션
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="sport"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="스포츠"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            5
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(5)
                                            ? true
                                            : false
                                    }
                                />
                                스포츠
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="strategy"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="전략"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            6
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(6)
                                            ? true
                                            : false
                                    }
                                />
                                전략
                            </div>
                        </div>

                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="casual"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="캐주얼"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            7
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(7)
                                            ? true
                                            : false
                                    }
                                />
                                캐주얼
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="horror"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="공포"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            8
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(8)
                                            ? true
                                            : false
                                    }
                                />
                                공포
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="puzzle"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="퍼즐"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            9
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(9)
                                            ? true
                                            : false
                                    }
                                />
                                퍼즐
                            </div>
                        </div>
                        <div className="checkbox-field">
                            <div className="checkbox-and-label-2">
                                <input
                                    id="racing"
                                    type="checkbox"
                                    name="checkbox"
                                    className="checkbox"
                                    value="레이싱"
                                    onChange={(e) => {
                                        checkDislikeHandle(
                                            e.currentTarget.checked,
                                            10
                                        );
                                    }}
                                    checked={
                                        cpDislikedTags.includes(10)
                                            ? true
                                            : false
                                    }
                                />
                                레이싱
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-regist-button" onClick={cpSubmit}>
                <button className="button">
                    <div className="button-2">회원가입</div>
                </button>
            </div>
        </div>
    );
};

export default UserInF;
