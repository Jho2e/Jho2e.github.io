import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import NavTop from "../Components/Nav-top";
import { Link } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";

import { TotalPrice } from "./totalInfo";

const CartTable = styled.div`
  margin-top: 10%;

  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: 0.7fr 2fr 5fr 2fr 1fr;

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
  div.productCounts {
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

export default function CartView() {
  const ListOfCart = useRecoilValue(productList);
  const setCartList = useSetRecoilState(productList);

  // 클릭 이벤트로 생성할 예정 //
  const addBooks = {
    id: 2,
    productName: "검은 옷", // 상품 이름
    price: 8000, // 원
    productCount: 1, // 개
    active: true,
    deliveryDay: 2,
    imgUrl: "http://image.auction.co.kr/itemimage/19/79/4a/19794a35d3.jpg",
  };

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
  console.log("총액구하기", ListOfCart[0].active);

  // 장바구니 지우기 버튼

  // 클릭한 휴지통의 id (= prod.id)와
  // 같은 id의 상품을 리스트에서 삭제.
  const onDelete = (e) => {
    const newlist = ListOfCart.filter(
      (list) => Number(list.id) !== Number(e.target.id)
    );
    setCartList(newlist);
  };

  const onToggle = (e) => {
    console.log(e.target.id);

    const newlist = ListOfCart.map((list) =>
      Number(list.id) === Number(e.target.id)
        ? { ...list, active: !list.active }
        : list
    );
    console.log("newlist", newlist);
    setCartList(newlist);
    console.log(ListOfCart);
    console.log(ListOfCart[0].active);
    //    console.log(ListOfCart[1].active);
  };

  return (
    <>
      <NavTop />
      <h1>장바구니 ({ListOfCart.length})</h1>
      <div
        style={{
          marginTop: "1%",
          display: "flex",
        }}
      >
        <div
          style={{
            marginRight: "5%",
            backgroundColor: "wheat",
            width: "33%",
          }}
        >
          {/*
          setCartList((prevList) => [...prevList, addBooks]);
          console.log(ListOfCart); 
                    */}
          A 추가
        </div>
        <div
          style={{
            marginRight: "5%",
            border: "1px soild black",
            backgroundColor: "green",
            width: "33%",
          }}
        >
          B 추가
        </div>
        <div
          style={{
            border: "1px soild black",
            backgroundColor: "skyblue",
            width: "33%",
          }}
        >
          C 추가
        </div>
      </div>
      <CartTable>
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
                {prod.productName}
              </Link>
            </div>

            <div className="productCounts">
              <div>{`${prod.productCount}개/ 변경(input창)`} </div>
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
      <TotalPrice />
      {/*  <TotalInfo>
          <div>
            {ListOfCart.map((prod) => (
              <div>
                + {prod.price} x {prod.productCount} ={" "}
                {prod.price * prod.productCount}
                <br />
                &nbsp; &nbsp;
              </div>
            ))}
            { //      `상품금액 (${price}              }) - 할인금액 (0) = 합계 (${totalPrice - discount})`}</TotalInfo> }
            {ListOfCart.length > 1 ? (
              <>
                <div>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>
                <span>- 할인금액 {discount}</span>
                <span className="totalPriceNumber">
                  <span className="gkqrP">합계</span>
                  {totalPrice}
                </span>
              </>
            ) : null}
          </div>
        </TotalInfo> */}
    </>
  );
}
