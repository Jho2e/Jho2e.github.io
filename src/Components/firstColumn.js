import styled from "styled-components";

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 95vh;

  margin-bottom: 5%;

  // grid1-1
  > div:first-child {
    position: relative;

    padding-top: 3%;
    padding-left: 5%;

    background: url("https://assets-global.website-files.com/5e4f771ff45e4c54cb345de3/6066902fea2201a8529778be_FASTER_(2).png")
      no-repeat center;
    background-size: 100% 100%;

    > span:first-child {
      text-align: center;

      width: 5%;
      text-align: center;

      // 공
      color: red;
      text-align: center;

      display: flex;
      flex-direction: column;
      white-space: nowrap;

      width: 30%;

      justify-content: center;
    }
    > span:nth-child(2) {
      // 공
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      color: white;
      font-size: 3em;
      font-weight: bold;

      white-space: nowrap;
    }
  }
`;

//

// grid 1-2

const Column2 = styled.div`
  position: relative;

  background: url("https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/3UIz/image/TETK7Mvprvhz_Z8EXk9PqH49LLg.JPG")
    no-repeat center;

  background-size: 100% 100%;

  > div:first-child {
    padding-top: 3%;
    padding-left: 5%;

    > span:first-child {
      color: red;
      text-align: center;

      display: flex;
      flex-direction: column;
      white-space: nowrap;

      width: 30%;

      justify-content: center;
    }

    > span:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      color: white;
      font-size: 3em;
      font-weight: bold;

      white-space: nowrap;
    }
  }
`;

const SpanEmphasize = styled.span`
  font-weight: 600;
  letter-spacing: 2px;
`;

export default function FirstColumn() {
  return (
    <>
      <Column>
        <div className="grid1-1">
          <span>
            WOMEN'S SALE
            <br />
            <SpanEmphasize>SAVE UP TO 60%</SpanEmphasize>
          </span>
          <span>MID SEASON SALE</span>
        </div>

        <Column2>
          <div className="grid1-2">
            <span>
              MEN'S SALE <br />
              <SpanEmphasize>SAVE UP TO 60%</SpanEmphasize>
            </span>
            <span>SAVE UP TO 60%</span>
          </div>
        </Column2>
      </Column>
    </>
  );
}
