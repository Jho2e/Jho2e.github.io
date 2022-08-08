import React, { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useState } from "react";
import productList from "../atoms";

const TotalInfo = styled.div`
  color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: flex-end;
  margin-right: 5%;

  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  > div {
    // 숫자div가 들어있는 div
    width: 50%;
    height: 90%;
    border: 1px dotted black;

    padding-top: 5%;
    padding-left: 5%;
    margin-left: 5%;

    display: flex;
    flex-direction: column;
    > div {
      // 숫자
      width: 100%;
      height: 7vh;
    }
    > span.totalPriceNumber {
      display: flex;
      justify-content: flex-end;
      margin-right: 33%;

      margin-top: 5%;
      margin-bottom: 5%;
      > span.gkqrP {
        color: red;
        font-weight: bold;
        margin-right: 10%;
      }
    }
  }
`;

export function TotalPrice() {
  const ListOfCart = useRecoilValue(productList);
  const setCartList = useSetRecoilState(productList);

  // 할인은 아직 구현안함.
  let discount = 0;

  // 총액 구하기
  let price = 0;
  for (var i = 0; i < ListOfCart.length; i++) {
    let price = Number(ListOfCart[i].price * ListOfCart[i].productCount);
  }

  return (
    <TotalInfo>
      <div>
        {ListOfCart.map((prod) => (
          <div>
            + {prod.price} x {prod.productCount} ={" "}
            {prod.price * prod.productCount}
            <br />
            &nbsp; &nbsp;
          </div>
        ))}
        {/* //      `상품금액 (${price}              }) - 할인금액 (0) = 합계 (${totalPrice - discount})`}</TotalInfo> */}
        {ListOfCart.length > 1 ? (
          <>
            <div>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>
            <span>- 할인금액 {discount}</span>
            <span className="totalPriceNumber">
              <span className="gkqrP">합계</span>
              {price}
            </span>
          </>
        ) : null}
      </div>
    </TotalInfo>
  );
}

export default TotalPrice;
