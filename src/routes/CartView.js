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
  const addBooks = {
    id: 2,
    productName: "검은 옷", // 상품 이름
    size: "M",
    price: 8000, // 원
    productCount: 1, // 개
    active: true,
    deliveryDay: 2,
    imgUrl: "http://image.auction.co.kr/itemimage/19/79/4a/19794a35d3.jpg",
  };
  const addblues = {
    id: 3,
    productName: "파란 옷", // 상품 이름
    size: "S",
    price: 9000, // 원
    productCount: 1, // 개
    active: true,
    deliveryDay: 2,
    imgUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAADaCAMAAABHPIrbAAAAD1BMVEUGF1sAI6EAF5ACFXcAEXUgDGxJAAAABXRSTlMIyck0efXTe1wAAAbKSURBVHic7ZyLcuQqDESD8P9/82bGCLUEGMxrt+5F2Uo8iT0+02rxdO3Pz4kTJ06cOHHixIkTJ06cOHHixIn/X1x0Pf7dX34TyY/3F33i4Yb+9897gDzFKArE51x+LdKvLu4Tj0BBPCZaBvN7G2S5b2fup1joe/KzyzqDhQEgObxCUBLfU6ZLhDCfG9wYLvxzcHdS8sULZhJpGCf3vI8CnoMEAV24dB6QhYk4+MrxS20ddf4MoosSGsf5ice3DOEryRV4bhDI52D444ZPT+JtKrNEFw3ApHkSHk7Pp7X7xsU5DNkrXNkNVIQJDg21fv18YO7TqzTdQL78hqgPfXF+bpwozgPNl3miNJEm8PBnvcLr+OOJ56WnC1bMcf02ynTR3SaH6nqEea9PJVGgj/iEYWooHTxt0mA7eHvJSQNUo2nnadHGOTEswdFzUalrW+ur0TfcZSFaG4u79Wmzc7ZbeISKZSZ9VBNPW6qaP6IACVPrNdQ4MrtK/U3TTVrzRY1u9uX+b2aEYWQVZwtM7PprbvbDOE1XM05NHjWKWxg8SHqWx9PbuhqCqclz7bEOjBuf5PFm/L8MRnCe5Bloc94CxXjAkVStproHR8/y+FhUO2iq8lwwe1vOU6911T8sBZJclbOFI4u1MDzleMyWNMg80lyFg+IUs3VnaoOXiVS28vLwzISvWYlDvDpUlmdX/xBXGB7N7IncVnHcY7auhvnRRBxeEyplK6RKT1TW4Tg0TyqPydXKgGS5Es672dUUHOi5EjPHc/bgOLMGnBFnE03S7GTMvE0aJ5Xlik2Pxw5iB44zpaWzdbE6O4DSwrLZ2tZBMA5XVnaGszVXsp+hzJzL1UYccrq4LpWr+8SNONbMlxJne51bdcTMJGdsw+F9hDRb44sozSTiX+1jNDPTLpYnrjzHdscgeRFnTyuoCIx1OFu8wbtnlcnlBqeQLX4mYMcyCrZ9eioa5YHd77U0DsUhZzcrb5z4UMVqK8OuRd46XzPLMx5u9bIXVwu4Q6fLo3nWmlk2d3CKnl2W4wc5uBtZxEPonaQhVKNBBrrPXwEDayOZSCZ+V7TzmqSFXR1d5zZPSiK2zzJ1VIbqS92el7lXAWnHfBWqrrs7mu8eqw7/rD+1cs2veGgCdT01bYeumK/LULRtP8IAzYYxHWjVNCZWmDmI07wtC+Hn0wQg9yZNS3AIYdqfL0CcVQ0zdTy9Mx0nDkY/33twptJEpj7nLMCJjY77B3DUnPw9zS/ORPOEYRcPRv++OtHMverME4eksO4RWBfO7IZnzDsTJzmy8ua6K2t6n04RqwNn3hADRhZDyZoco96ZTMJD087KmohzM8Wh19/DEf9Ctvpw5tcWDYx3JvGQfPGcuANn9pNF4OZZ6nToJc4JjXLn8GvaQ2kERyM9elaLHkIuqzjp6+qzcsnqibAiAjtYfeoUkvUSigCmfzR4TVMHaPrVyeH0KJO0yp2VFQt0TJoIBasXk5LVQ0UxS9JLdOLYe79oBimiaO8MqEPpDcJBjQo2FLDLogHvqC0l/LCN6pAz2ox6h/T7J3l4UsYhBIyVe71D6YYSCUVRJDhHiQPO6S10ghsTfupqxlAT2ViI5ulY/eLFaGQhg5VrtgnVUTNz8U4nDrw3YCggYxorpnzhLtaAOuQy6pgPj6/kV5mM9XuHJPAtySLk8aKYOIEY9o7scJkGVonFRahMowqdefpbZcKQmxJYR4+sLIAUOns5xmCy5OOjTpgQazArjN5wHMLRaQk6oAqGUEHer6Ymy9QIN9cgA6QMTRYK3Ioz6h1+XwTDF5gmQZEc25igjhMPWb0yhZ1xEUR/oUNhyX6U3N1aWtV8pLD6vMfxikYdxxQYcRAMFXFkgd4ny6vrJUkAgxlLHBzdtUgdJ69uMm4SlUcEJsqTOnkQxzYbuuPA2ooUDs6ajwOSJ3dziR7yd33pXBxF5AregRSJUAuSFd/WGR8hG3x7itHKSiRP2kM0FBnXJHCzkmUbESh8KW6UKC/TOI7tlSEn4FtU7CFj89RRdHz/pKbzDl6HwzelqJjUE1T7smSpZBDWkSEjc7RBHd2nOjxI07Sg3SlSxV6p0tKswNEuUXlKakx+uQxHg5HNTLtAU3Eyts11ILtwFFY2MzWkNVaWuyuy0qBrA45u9GoYy3ECQgmi8PtVOM6+aGuC1qmD3Xxzpb/HyfzveFWm+GI+TkGd3KgmTrsiWW3E04+TvGPxwycjnrKRJk1s8iiwjEMwmXgYyM/1Dk7ttCL13nOeOvOiA6cpfr7/Wdz9jy98fasTJ06cOHHixIkTJ06cOHHixIkT/534A5WzU1h3jUPpAAAAAElFTkSuQmCC",
  };
  const addWhite = {
    id: 1,
    productName: "흰 옷", // 상품 이름
    size: "L",
    price: 7000, // 원
    productCount: 3, // 개
    active: true,
    deliveryDay: 2,
    imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
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

  // 장바구니 지우기 버튼
  // 클릭한 휴지통의 id (= prod.id)와
  // 같은 id의 상품을 리스트에서 삭제.
  const onDelete = (e) => {
    const newlist = ListOfCart.filter(
      (list) => Number(list.id) !== Number(e.target.id)
    );
    setCartList(newlist);
  };

  // 체크 ON/OFF버튼
  const onToggle = (e) => {
    console.log(e.target.id);

    const newlist = ListOfCart.map((list) =>
      Number(list.id) === Number(e.target.id)
        ? { ...list, active: !list.active }
        : list
    );
    setCartList(newlist);
  };

  /*  let totalPrice = 0;
  ListOfCart.forEach((prod) => {
    console.log(prod);
    prod.active
      ? (totalPrice += prod.price * prod.productCount)
      : (totalPrice += 0);
    console.log(totalPrice);
  }); */

  // 총 가격
  //  const [totalPrice, setTotalPrice] = useState(0);
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

  console.log("마지막 totalShow 확인", totalShow);
  console.log("마지막 isExist 확인", isExist);

  return (
    <>
      <NavTop /> {/* 상단 메뉴 */}
      <h1>장바구니 ({ListOfCart.length})</h1>
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
    </>
  );
}
