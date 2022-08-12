import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavTop from "../Components/nav-top";

import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";
import CartTable from "../Components/cartTable";

const TotalInfo = styled.div`
  position: fixed;
  bottom: 3%;
  right: 5%;
  border-radius: 15px;

  color: rgba(0, 0, 0, 0.6);
  box-sizing: content-box;

  display: flex;
  justify-content: flex-end;

  > div {
    border-radius: 40px;
    background-color: #ffd43b;
    color: white;
    font-weight: bold;
    text-align: center;
    z-index: 100;

    // 숫자div가 들어있는 div
    width: 200px;
    height: 70px;

    padding-top: 1%;
    padding-left: 3%;
    padding-right: 3%;

    display: flex;
    flex-direction: column;
    > div {
      // 숫자
      display: flex;
      justify-content: center;
      width: 100%;
      height: 30px;
    }
    > span#totalPriceNumber {
      display: flex;
      justify-content: flex-end;

      margin-bottom: 5%;
      > span#gkqrP {
        color: red;
        font-weight: bold;
        margin-right: 5%;
      }
    }
  }
`;

const PlusBtn = styled.button`
  z-index: 150;
  position: fixed;
  bottom: 1%;
  right: 2%;
  color: white;
  background-color: orange;

  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
  // 벨로퍼트 모던 리액트 참조해서 lighter , darker 쓰기
`;

export default function CartView() {
  const ListOfCart = useRecoilValue(productList);
  const setCartList = useSetRecoilState(productList);
  console.log("listofcart확인용", ListOfCart);

  // 할인은 아직 구현안함.
  let discount = 0;

  // 장바구니 지우기 버튼

  const onDelete = (e) => {
    const newDeleteList = ListOfCart.filter(
      (list) =>
        `fa-solid fa-trash-can ${list.colorFinal} ${list.productName}` !==
        e.target.attributes[0].value
    );

    setCartList(newDeleteList);
  };

  // 체크 ON/OFF버튼
  const onToggle = (e) => {
    console.log(e.target.id);

    const newActivelist = ListOfCart.map((list) =>
      Number(list.id) === Number(e.target.id)
        ? { ...list, active: !list.active }
        : list
    );
    setCartList(newActivelist);
  };

  // 버튼의 아이디와 상품의 아이디가 같다면, obj.prouductCount를 +1 또는 -1
  const onChangeCount = (e) => {
    const newCountList = ListOfCart;

    if (e.target.className === "fa-solid fa-arrow-up") {
      let newlist = newCountList.map((list) =>
        Number(list.id) === Number(e.target.id)
          ? { ...list, productCount: list.productCount + 1 }
          : { ...list }
      );
      setCartList(newlist);
    } else if (e.target.className === "fa-solid fa-arrow-down") {
      let newlist = newCountList.map((list) =>
        Number(list.id) === Number(e.target.id)
          ? { ...list, productCount: list.productCount - 1 }
          : { ...list }
      );
      setCartList(newlist);
    }

    /*  for (var i = 0; i < ListOfCart.length; i++) {
      if (Number(ListOfCart[i].productCount) === 0) {
        console.log("발견");
        console.log(ListOfCart[i]);
        //        ListOfCart[i] = { ...ListOfCart[i], productCount: ListOfCart[i] + 1 };
      }
    } */
  };

  // 총 가격
  let tp = 0;
  ListOfCart.forEach((prod) => {
    prod.active ? (tp += prod.price * prod.productCount) : (tp += 0);
  });

  // 장바구니에 상품이 0개인지 아닌지에 대한 boolean값
  const [isExist, setIsExist] = useState(true);
  useEffect(() => setIsExist(ListOfCart.length > 0), [ListOfCart]);
  // useEffect(() => {
  //   if (Number(tp) === 0) {
  //     setIsExist(false);
  //   }
  // }, [ListOfCart, tp]);

  // 총액 토글 버튼
  const [totalShow, setTotalShow] = useState(true);
  const showTotal = () => {
    setTotalShow((prev) => !prev);
  };

  //  const [howMany, setHowMany] = useState(1);

  return (
    <>
      <NavTop /> {/* 상단 메뉴 */}
      <h1>장바구니 ({ListOfCart.length})</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifycontent: "center",
        }}
      >
        {/* 장바구니가 비었을 경우 표시 */}
        {ListOfCart.length > 0 ? null : (
          <h2
            style={{
              width: "100%",
              marginTop: "30%",
              top: "50%",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            장바구니가 비었습니다. 상품을 담아주세요.
          </h2>
        )}
        {/* 상품이미지 , 개수 ,가격 등 "표" */}
        <CartTable></CartTable>
        {/* 클릭해야 확인할수 있게 바꿀 예정인, 총 합계 표시. 
      position: "fixed", bottom: "1%" 
      */}
        <TotalInfo style={isExist ? {} : {}}>
          {/* // style={ isSpecial ? { color:'blue'} : {color : 'red'} */}
          <div
            style={
              isExist & totalShow
                ? { border: "1px solid black", height: "auto" }
                : { display: "none" }
            }
          >
            {ListOfCart.map((prod) =>
              prod.active ? (
                <div>
                  + {prod.price} x {prod.productCount} ={" "}
                  {prod.price * prod.productCount}
                  <br />
                  &nbsp; &nbsp;
                </div>
              ) : null
            )}
            {/* //      `상품금액 (${price}              }) - 할인금액 (0) = 합계 (${totalPrice - discount})`}</TotalInfo> */}

            {ListOfCart.length > 1 ? (
              <>
                {Number(tp) === 0 ? null : (
                  <div id="mm" style={{ height: "15px" }}>
                    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                  </div>
                )}
                <span id="totalPriceNumber">
                  -할인 ({discount}) &nbsp;&nbsp;&nbsp;
                  <span id="gkqrP">합계 {tp}</span>
                </span>
              </>
            ) : null}
          </div>
          {tp !== 0 ? (
            <PlusBtn onClick={showTotal}>=</PlusBtn>
          ) : (
            <PlusBtn onClick={showTotal}>=</PlusBtn>
          )}
        </TotalInfo>
      </div>
    </>
  );
}
