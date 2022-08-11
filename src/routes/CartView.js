import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavTop from "../Components/nav-top";
import { Link } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";

const CartTable = styled.div`
  z-index: 15000;
  margin-top: 30px;
  margin-bottom: 100px;
  overflow: auto;

  display: grid;
  width: 100%;
  height: 400px;
  //  grid-template-columns: 0.7fr 2fr 5fr 2fr 1fr;
  grid-template-columns: 70px 200px 500px 200px 100px;

  > div,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  // 체크박스
  > div > div.checkBoxs {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  //제품사진
  div > a.prodImgs {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    > img {
      width: 50%;
      height: 40%;
      object-fit: cover;
    }
  }

  // 도착예정일 /상품 개수 확인/변경(input창)
  > div.productCounts {
    display: flex;
    flex-direction: column;
    > div {
      // xx개
      border: none;
    }
    > div:first-child {
      //xx개
    }
    > div:nth-child(3) {
      //화살표 아이콘 내장한 div
      display: flex;
      > div {
        border: none;
      }
      i {
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;
        border: 1px solid black;
        border-radius: 7.5px;
        opacity: 0.5;
      }
      i:hover {
        opacity: 1;
      }
      > i:first-child {
        margin-right: 10px;
      }
      > i:nth-child(2) {
      }
    }
  }

  // 가격 / 삭제버튼
  > div.productPrices {
    display: flex;
    flex-direction: column;
  }

  // 배송예정일, 배송비
  > div.deliveryInfos {
    display: flex;
    flex-direction: column;
  }
`;

const TotalInfo = styled.div`
  position: fixed;
  bottom: 3%;
  right: 5%;
  border-radius: 15px;

  color: rgba(0, 0, 0, 0.6);
  box-sizing: content-box;

  display: flex;
  justify-content: flex-end;
  /*  
  width: 100%;
  padding-right: 5%;
  width: 90%;
  
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%; */
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

  // 클릭 이벤트로 생성할 예정 //

  /* 
  새로 장바구니 배열에 추가
  onClick={() =>
                setCartList((prevList) => [...prevList, NewProduct])
              } */
  //  setCartList((prevList) => [...prevList]);

  // 할인은 아직 구현안함.
  let discount = 0;

  // 총 가격 구하기
  //  let totalPrice = 0;

  //  console.log("토탈 1st", totalPrice);
  //  console.log("길이", ListOfCart.length);

  /*  const [totalPrice], setTotalPrice] = useState(0);

  for (var i = 0; i < ListOfCart.length; i++) {
    if (ListOfCart[i].active === true) {
      setTotalPrice(Number(ListOfCart[i].price * ListOfCart[i].productCount));
    }
 */

  /*
  바뀌긴하는데 리렌더링이 안됨.
  const price = ListOfCart.reduce((acc, cur) => {
    if (cur.active) {
      acc += cur.price;
    }
    return acc;
  }, 0);

  console.log(price); 
  */

  //    console.log("토탈 2nd", price);

  // 장바구니 지우기 버튼
  // 클릭한 휴지통의 id (= prod.id)와
  // 같은 id의 상품을 리스트에서 삭제.
  const onDelete = (e) => {
    const newDeleteList = ListOfCart.filter(
      (list) => Number(list.id) !== Number(e.target.id)
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

  // const onChangeUp = (e) => {
  //   console.log(e);
  // };
  // const onChangeDown = (e) => {
  //   console.log(e);
  // };

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
        <CartTable style={isExist ? {} : {}}>
          {ListOfCart.map((prod) => (
            <>
              <div>
                <div
                  className="checkBoxs"

                  /*  // 체크 토글버튼
                onClick={() => {

                  if (ListOfCart.length < 2) {
                    // 최대 4개
                    setCartList((prevList) => [...prevList, addBooks]);
                    //  setCartList((prevList)=>[{...prevList},{...prevList, prevList.check = !prevList.check}]) 
                  };
                }}
                */
                >
                  {prod.active ? (
                    // 체크표시가 true &0개 이상 일 경우
                    <i
                      className="fa-solid fa-check"
                      id={prod.id}
                      onClick={onToggle}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-square"
                      id={prod.id}
                      onClick={onToggle}
                    ></i>
                  )}
                </div>
              </div>

              <div>
                <Link className="prodImgs" to="/">
                  <img src={prod.imgUrl} alt="profile" />
                  {prod.productName} <br />
                  <span>({prod.size})</span>
                </Link>
              </div>

              <div className="productCounts">
                <div>{`${prod.productCount}개`} </div>
                <br />
                <div>
                  <div
                  // id={prod.id} onClick={onChangeUp}
                  >
                    <i
                      id={prod.id}
                      className="fa-solid fa-arrow-up"
                      onClick={onChangeCount}
                    ></i>
                  </div>
                  <div
                  //</div> id={prod.id} onClick={onChangeDown}
                  >
                    <i
                      id={prod.id}
                      className="fa-solid fa-arrow-down"
                      onClick={onChangeCount}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="productPrices">
                {prod.price}원
                <i
                  className="fa-solid fa-trash-can"
                  onClick={onDelete}
                  id={prod.id}
                ></i>
              </div>

              <div className="deliveryInfos">
                {/*
              <span>{prod.deliveryFee}원</span>
            */}
                <span>{prod.deliveryDay}일</span>
              </div>
            </>
          ))}

          {/*     <div
          onClick={() => {
            setDone((prev) => !prev);
          }}
          >
          {done ? <MdCheckBoxOutlineBlank /> : <MdDone />}
          </div>
          <div>
          <Link to="/">제품사진</Link>
          </div>
          <div>도착예정일 /상품 개수 확인/변경(input창) </div>
        <div>
          <MdDelete />
        </div>

        <div
          onClick={() => setCartList((prevList) => [...prevList, NewProduct])}
        >
          
          배송ㅂㅣ
        </div> */}
        </CartTable>
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
