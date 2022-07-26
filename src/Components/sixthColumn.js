import styled from "styled-components";

const Gallery6column = styled.div`
  padding-left: 5%;
  padding-right: 2%;

  // grid6__column
  > div:first-child {
    display: grid;
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-rows: auto;

    height: 30vh;
    > div > span {
      font-size: 0.8em;
      font-weight: bold;
      white-space: nowrap;
    }

    //grid6-1
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;

      > span:first-child {
        margin-bottom: 1%;
      }
    }

    //grid6-2
    > div:nth-child(2) {
      margin-right: 5%;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 0.8em;
        font-weight: 500;
      }
      > div:first-child {
        margin-bottom: 10%;
      }
    }
    //grid6-3
    > div:nth-child(3) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      font-size: 0.8em;
      font-weight: 500;

      padding-right: 5%;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      > div:first-child {
        margin-right: 15%;
      }
    }
  }
`;

const Btn = styled.div`
  box-sizing: border-box;
  background-color: black;
  color: white;
  width: 70%;
  height: 5vh;

  font-size: 0.9em;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CheckBox = styled.form.attrs(
  { action: "#" },
  { method: "get" },
  { id: "gallery6-form" }
)`
  > input {
    width: 70%;
    height: 4vh;
    box-sizing: border-box;
  }
  > input::placeholder {
    padding-left: 2%;
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

const FooterCard = styled.div`
  width: 100%;
  > img {
    margin-left: 4%;
    width: 80%;
    height: 60px;
    object-fit: cover;
  }
`;

let bold = {
  fontWeight: "bold",
};
export default function SixthColumn() {
  return (
    <>
      <Gallery6column>
        <div className="grid6__column">
          <div className="grid6-1">
            <span>SUBSCRIBE AND GET 10% OFF YOUR FIRST ORDER</span>

            <CheckBox2>
              <input type="checkbox" id="chk_top" />
              <label htmlFor="chk_top"></label>
              <span>I agree, to receive emails from Won Hundred.</span>
            </CheckBox2>
            <CheckBox>
              <input
                name="username"
                required
                type="text"
                placeholder="Email address"
              />
            </CheckBox>

            <Btn>
              <span>WOMEN'S</span>
              <span>MEN'S</span>
            </Btn>
          </div>

          <div className="grid6-2">
            <div>
              <span>
                <span className="bold" style={bold}>
                  FOLLOW
                </span>
                USFACEBOOK INSTAGRAM
              </span>
              <span className="bold" style={bold}>
                WON HUNDRED
              </span>
              <span>GAMMEL KONGEVEJ 102, 1 TV</span>
              <span>1850 FREDERIKSBERG C, DENMARK</span>
              <span>CVR 27759491</span>
            </div>
            <div>
              <span>CUSTOMERCARE@WONHUNDRED.COM</span>
              <span>+45 52 10 42 20[U+202C]</span>
            </div>
          </div>

          <div className="grid6-3">
            <div>
              <span>Gift Card</span>
              <span>Terms & Conditions</span>
              <span>Privacy</span>
              <span>Account</span>
              <span>Exchange & Return</span>
            </div>
            <div>
              <span>About</span>
              <span>Contact</span>
              <span>Sustainability</span>
              <span>B2B</span>
            </div>
          </div>
        </div>
      </Gallery6column>

      <FooterCard>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ARk84r_lTvJterbBQ1FlPuAID6Vp5u0-eGk-XhnhZeHeKdbwe-PvFlRE1kl3YD9QVA&usqp=CAU" />
      </FooterCard>
    </>
  );
}
