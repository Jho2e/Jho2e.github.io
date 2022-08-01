import { useState } from "react";
import styled from "styled-components";

const CheckBox = styled.form.attrs(
  { action: "#" },
  { method: "get" },
  { id: "gallery6-form" }
)`
  display: flex;

  > input {
    width: 70%;
    height: 4vh;
    box-sizing: border-box;
  }
  > input::placeholder {
    padding-left: 2%;
  }

  // 새로 추가한 화살표
  // a 태그나 react-router를 이용해서
  // 전달한 정보 표시할 예정

  > div {
    margin-left: 1%;
    > img {
      width: 10px;
      height: 10px;
    }
    > img:hover {
      cursor: pointer;
    }
  }
`;
/* 체크박스 만들기*/

/*input 은 숨겨주기*/

const CheckBox2 = styled.div`
  margin-bottom: 3%;
  > label {
    margin-right: 2%;
  }
  > input#chk_top {
    display: none;
  }
  /*input 바로 다음의 label*/
  input#chk_top + label {
    cursor: pointer;
  }

  /*input 바로 다음의 label:before 에 체크하기 전 CSS 설정*/
  input#chk_top + label:before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 17px;
    line-height: 17px;
    border: 1px solid #cbcbcb;
    vertical-align: middle; /*체크 전과 체크 후 높이 차이 때문에 설정*/
  }

  /*checked된 input 바로 다음의 label:before 에 체크 후 CSS 설정*/
  input#chk_top:checked + label:before {
    content: "\f00c"; /*폰트어썸 유니코드*/
    font-family: "Font Awesome 5 free"; /*폰트어썸 아이콘 사용*/
    font-weight: 900; /*폰트어썸 설정*/
    color: black;
    background-color: white;
    border: 1px solid black;
    font-size: 1em;
    text-align: center;
  }
`;

const Btn = styled.div`
  box-sizing: border-box;
  background-color: #aba79a;
  color: white;
  width: 70%;
  height: 5vh;

  font-size: 0.9em;
  font-weight: 500;
  display: flex;

  > div:first-child,
  div:nth-child(2) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  > div:first-child:hover,
  div:nth-child(2):hover {
    cursor: pointer;
  }
`;

export default function AddressInput() {
  // 이메일 확보
  const [text, setText] = useState("");

  // 남자인가 여자인가.
  const [isWomens, setIsWomens] = useState(true);

  const userInfo = {
    emailAdress: text,
    sex: isWomens ? "Woman" : "man",
  };

  const onWomens = () => {
    setIsWomens(true);
  };

  const onmens = () => {
    setIsWomens(false);
  };

  // 체크시 이메일 활성화
  const [Ok, setOk] = useState(false);
  const emailOk = () => {
    setOk((prev) => !prev);

    const email = document.getElementById("emailInput");

    if (Ok === false) {
      email.removeAttribute("disabled");
    } else if (Ok === true) {
      // ok === false
      email.setAttribute("disabled", "disabled");
      setText("");
    }
  };

  return (
    <div className="grid6-1">
      <span>SUBSCRIBE AND GET 10% OFF YOUR FIRST ORDER</span>

      <CheckBox2>
        <input type="checkbox" id="chk_top" />
        <label onClick={emailOk} htmlFor="chk_top"></label>
        <span>I agree, to receive emails from Won Hundred.</span>
      </CheckBox2>
      <CheckBox>
        <input
          id="emailInput"
          disabled
          name="username"
          required
          type="text"
          placeholder="Email address"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div onClick={() => console.log(userInfo)}>
          <img
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJQ3F_vX_Bt633SdGGovZWrbIvXLhwvhW3Nn5FVRoEE7KGJyKMiJN10I80EzwDKX7DVQ&usqp=CAU"
          />
        </div>
      </CheckBox>

      <Btn>
        <div
          onClick={onWomens}
          style={{
            backgroundColor: isWomens ? "black" : "#aba79a",
          }}
        >
          <span>WOMEN'S</span>
        </div>
        <div
          onClick={onmens}
          style={{
            backgroundColor: isWomens ? "#aba79a" : "black",
          }}
        >
          <span>MEN'S</span>
        </div>
      </Btn>
    </div>
  );
}
