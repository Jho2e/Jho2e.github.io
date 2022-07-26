import styled from "styled-components";

const Gallery2Column = styled.div`
  padding-right: 5%;
  padding-left: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    width: 18%;
    padding-top: 1%;
    padding-bottom: 1%;

    font-weight: 500;
    font-size: 0.8em;
    letter-spacing: 2px;

    border: none;

    margin-bottom: 8%;
  }
  > button:hover {
    cursor: pointer;
  }
`;

const Gal2Intro = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5%;

  > div {
    font-size: 1.3em;
  }
  > div:first-child {
    margin-right: 5%;
  }
  > div:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const ClothImg = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80vh;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  margin-bottom: 8%;
  > div {
    width: 100%;
    box-sizing: border-box;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover !important;
    }
  }
`;

export default function SecondColumn() {
  return (
    <>
      <Gallery2Column>
        <Gal2Intro>
          <div>WOMEN'S SS22</div>
          <div>MEN'S SS22</div>
        </Gal2Intro>

        <ClothImg>
          <div>
            <img src="https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg" />
          </div>
        </ClothImg>
        <button>VIEW ALL PRODUCTS</button>
      </Gallery2Column>
    </>
  );
}
