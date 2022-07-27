import styled from "styled-components";

const Gallery5Column = styled.div`
  width: 100%;
  height: 40vh;

  margin-bottom: 5%;
  > div {
    > img {
      width: 100%;
      height: 100%;
    }
  }

  //gallery5-images
  > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    height: 40vh;
    > div:first-child {
      width: 100%;
      height: 100%;
      background: url("https://i.pinimg.com/236x/0b/9d/07/0b9d076f2b6d4fdd499f652c3cc9c1df.jpg")
        no-repeat center;
      background-size: cover;
    }
    > div:nth-child(2) {
      width: 100%;
      height: 100%;
      background: url("https://i.pinimg.com/564x/d8/9b/fc/d89bfc8376f86ef8052ce050051c99b7.jpg")
        no-repeat center;
      background-size: cover;
    }
    > div:nth-child(3) {
      width: 100%;
      height: 100%;
      background: url("https://previews.123rf.com/images/jacephoto/jacephoto0905/jacephoto090500212/4891556-smart-casual-young-asian-man.jpg")
        no-repeat center;
      background-size: cover;
    }
    > div:nth-child(4) {
      width: 100%;
      height: 100%;
      background: url("https://images.healthshots.com/healthshots/en/uploads/2021/05/11122010/sitting-too-long-1.jpg")
        no-repeat center;
      background-size: cover;
    }
    > div:nth-child(5) {
      width: 100%;
      height: 100%;
      background: url("https://image.shutterstock.com/image-photo/full-length-portrait-blonde-girl-260nw-1521688430.jpg")
        no-repeat center;
      background-size: cover;
    }
  }
`;

const Relative = styled.div`
  margin-top: 30%;

  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  :hover .gallery5__invisible {
    z-index: 1;
    cursor: pointer;
  }
  // gallery5__invisible
  > div:first-child {
    z-index: -1;
    color: white;
    background-color: black;
    opacity: 0.3;
    font-size: 2em;
    font-weight: bold;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    position: absolute;
    > span {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function FifthColumn() {
  return (
    <Gallery5Column>
      <div className="gallery5-images">
        <Relative>
          <div className="gallery5__invisible">
            <span>@</span>
          </div>
        </Relative>

        <Relative>
          <div className="gallery5__invisible">
            <span>@</span>
          </div>
        </Relative>
        <Relative>
          <div className="gallery5__invisible">
            <span>@</span>
          </div>
        </Relative>
        <Relative>
          <div className="gallery5__invisible">
            <span>@</span>
          </div>
        </Relative>
        <Relative>
          <div className="gallery5__invisible">
            <span>@</span>
          </div>
        </Relative>
      </div>
    </Gallery5Column>
  );
}
