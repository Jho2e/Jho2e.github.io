import styled from "styled-components";
import AddressInput from "./addressInput";

const Gallery6column = styled.div`
  margin-top: 10%;
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
/*
const FooterCard = styled.div`
  width: 100%;
  > img {
    margin-left: 4%;
    width: 80%;
    height: 60px;
    object-fit: cover;
  }
`;
*/
let bold = {
  fontWeight: "bold",
};

/* 
보낼정보

성별 , 이메일, 이름
 */

export default function SixthColumn() {
  return (
    <>
      <Gallery6column>
        <div className="grid6__column">
          {/*  <div className="grid6-1">
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
              <div>
                <span>WOMEN'S</span>
              </div>
              <div>
                <span>MEN'S</span>
              </div>
            </Btn>
          </div> */}
          <AddressInput />

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
      {/*
      <FooterCard>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ARk84r_lTvJterbBQ1FlPuAID6Vp5u0-eGk-XhnhZeHeKdbwe-PvFlRE1kl3YD9QVA&usqp=CAU" />
      </FooterCard>
  */}
    </>
  );
}
