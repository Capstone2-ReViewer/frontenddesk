import React from "react";
import "../css/userregist.css";

const UserInF = () => {
  return (
    <div className="user-in-f">
      <div className="text-wrapper">회원가입</div>

      <div className="input-field">
        <div className="label">아이디</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="input-field">
        <div className="label">비밀번호</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="input-field">
        <div className="label">비밀번호 확인</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="input-field">
        <div className="label">이름</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="input-field">
        <div className="label">닉네임</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="input-field">
        <div className="label">나이</div>

        <div className="input">
          <div className="value">{""}</div>
        </div>
      </div>

      <div className="frame">
        <div className="div">성별</div>

        <div className="radio-field">
          <div className="checkbox-and-label">
            <div className="radio">
              <div className="radio-2" />
            </div>

            <div className="label-2">남자</div>
          </div>
        </div>

        <div className="radio-field">
          <div className="checkbox-and-label-2">
            <div className="radio-3" />

            <div className="label-2">여자</div>
          </div>
        </div>
      </div>

      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-2">선호장르</div>

          <div className="frame-4">
            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">액션</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">판타지</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">FPS</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">샌드박스</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">RPG</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">어드벤처</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">MMORPG</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-3">
          <div className="text-wrapper-2">비선호장르</div>

          <div className="frame-4">
            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">액션</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">판타지</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">FPS</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">샌드박스</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">RPG</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">어드벤처</div>
              </div>
            </div>

            <div className="checkbox-field">
              <div className="checkbox-and-label-2">
                <div className="checkbox" />

                <div className="label-3">MMORPG</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="button">
          <button className="button-2">회원가입</button>
        </button>
      </div>
    </div>
  );
};

export default UserInF;