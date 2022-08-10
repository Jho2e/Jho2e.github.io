import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import productList, { AllProductList } from "../atoms";
import NavTop from "../Components/nav-top";

const ShowDetail = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 600px;

  // img와 text를 담은 div

  > div.div__img {
    display: flex;
    align-items: center;
    > img {
      width: 400px;
      height: 400px;
    }
  }

  > div.div__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* width: 400px;
      height: 400px; */

    > div {
      width: 100%;
      padding-left: 50px;
    }
    > div:first-child {
      // 상품이름

      @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
      font-family: "Black Han Sans", sans-serif;

      width: 100%;
      padding-bottom: 15px;

      font-size: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    > div:nth-child(2) {
      // 가격
      width: 60%;

      font-family: "Black Han Sans", sans-serif;
      font-weight: bold;
      font-size: 25px;
      color: #ae0000;
    }
    > div:nth-child(3) {
      // 배송일
      display: flex;
      flex-direction: column;

      color: #00891a;
      font-weight: bold;
    }
    > div:nth-child(4) {
      // 인풋창

      padding: 50px;
      border: 1px solid black;
    }
  }
`;

export default function ItemDetail() {
  const ItemName = useParams();
  const AllList = useRecoilValue(AllProductList);

  const setCartList = useSetRecoilState(productList);

  for (var i = 0; i < AllList.length; i++) {
    if (Number(AllList[i].id) === Number(ItemName.ItemId[0])) {
      var selectItemInfo = {
        id: AllList[i].id,
        productName: AllList[i].productName,
        size: AllList[i].size,
        price: AllList[i].price,
        productCount: AllList[i].productCount,
        active: AllList[i].active,
        deliveryDay: AllList[i].deliveryDay,
        imgUrl: AllList[i].imgUrl,
      };
    }
  }

  let wantShow = { ...selectItemInfo };

  return (
    <>
      <NavTop />
      {/* 1흰 옷 OR 2검은 옷 OR 3파란 옷 */}
      <ShowDetail>
        <div className="div__img">
          <img src={wantShow["imgUrl"]} alt="profile" />
        </div>

        <div className="div__text">
          <div>
            <h1>
              {`${wantShow["productName"]}`}
              <span style={{ fontSize: "10px" }}>( 찜 기능 나중에 추가)</span>
            </h1>
          </div>
          <div>
            <span>{wantShow["price"]}원</span>
          </div>
          <div>
            <span>{`배송일 :  ${wantShow["deliveryDay"]}일 (무료배송)`}</span>
          </div>
          <div>
            <h1>인풋창</h1>
          </div>
          <div>
            <button>개수 정하는 인풋</button>
            <button
              onClick={() => setCartList((prevList) => [...prevList, wantShow])}
            >
              장바구니 담기
            </button>
            <button>바로 구매</button>
          </div>
        </div>
      </ShowDetail>
    </>
  );
}
