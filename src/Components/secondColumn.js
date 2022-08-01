import { useState } from "react";
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
    background-color: #aba79a;
    transition: all 0.3s ease-in-out;
  }
`;

const Gal2Intro = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5%;

  /*
        <Gal2Intro>
          <div>WOMEN'S SS22</div>
          <div>MEN'S SS22</div>
        </Gal2Intro>
  */

  > div {
    font-size: 1.3em;
  }
  > div:first-child {
    margin-right: 5%;
  }
  // hover대신 active로 밑쭐
  > div:hover {
    cursor: pointer;
  }
  > div.active {
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

export default function SecondColumn({ product }) {
  const [cloth, setCloth] = useState(
    "https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg"
  );
  // 클릭한 텍스트에 밑줄 긋는 용도
  const [ismens, setIsmens] = useState(false);

  const onWomens = () => {
    // 우먼 눌렀을때 사진
    setCloth(
      "https://i.pinimg.com/originals/cc/2d/9a/cc2d9a1ec09d4bb0a31cc9df7c581bdb.jpg"
    );
    setIsmens(false);
  };

  const onmens = () => {
    // 맨 눌렀을때 사진
    setCloth(
      "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/22/02/24/GM0022022493006_0_ORGINL_20220304153410780.jpg"
    );
    setIsmens(true);
  };

  const onMoveToProduct = () => {
    // product.current.focus();
    product.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Gallery2Column>
        <Gal2Intro>
          <div
            className="womens__ss active"
            onClick={onWomens}
            style={{
              textDecoration: ismens ? "none" : "underline",
              textUnderlinePosition: ismens ? "none" : "under",
            }}
          >
            WOMEN'S SS22
          </div>
          <div
            className="mens__ss"
            onClick={onmens}
            style={{
              textDecoration: ismens ? "underline" : "none",
              textUnderlinePosition: ismens ? "under" : "none",
            }}
          >
            MEN'S SS22
          </div>
        </Gal2Intro>

        <ClothImg>
          <div>
            <img alt="profile" src={cloth} />
          </div>
          <div>
            <img alt="profile" src={cloth} />
          </div>
          <div>
            <img alt="profile" src={cloth} />
          </div>
          <div>
            <img alt="profile" src={cloth} />
          </div>
        </ClothImg>
        <button onClick={onMoveToProduct}>VIEW ALL PRODUCTS</button>
      </Gallery2Column>
    </>
  );
}
