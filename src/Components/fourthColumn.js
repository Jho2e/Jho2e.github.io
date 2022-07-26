import styled from "styled-components";

const Gallery4Column = styled.div`
  margin-bottom: 8%;

  // intro
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span:first-child {
      margin-bottom: 3%;
      font-size: 0.7em;
      font-weight: 500;
    }
    > span:nth-child(2) {
      margin-bottom: 10%;
      font-size: 1.2em;
      font-weight: bold;
    }
  }

  // grid4__column
  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 6fr 3fr 1fr;
    grid-template-rows: auto;
    height: 90vh;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    //grid4-image1
    > div:nth-child(2) {
      background: url("https://cdn.shopify.com/s/files/1/0092/9605/2282/files/won-hundred-ss22-kbuitrago-30_9f639496-fabd-4937-9cb7-fe76aa9cca90_550x.jpg?v=1642170843")
        no-repeat;
      background-size: cover;
    }
    > div:nth-child(3) {
      > div {
        // grid4-image2
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 100%;
        > img {
          width: 100%;
          height: 50%;
          margin-bottom: 5%;
        }
        > span {
          font-size: 0.9em;
          font-weight: 500;
        }
      }
    }
    > div > i:hover {
      cursor: pointer;
    }
  }
`;

export default function FourthColumn() {
  return (
    <Gallery4Column>
      <div className="gallery4-intro">
        <span>Look like</span>
        <span>CAMILLE JAFFAR & MAX HUNTER</span>
      </div>

      <div className="grid4__column">
        <div>
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>

        <div className="grid4-image1">
          <div className="dot1"></div>
          <div className="점2"></div>
          <div className="점3"></div>
        </div>

        <div>
          <div className="grid4-image2" title="자세히">
            <img src="https://cdn.webshopapp.com/shops/308240/files/393080776/image.jpg" />
            <span>VIEW THIS PRODUCT</span>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </Gallery4Column>
  );
}
