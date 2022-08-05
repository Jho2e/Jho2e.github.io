import { useState } from "react";
import styled from "styled-components";
import NavTop from "../Components/Nav-top";
import { Link } from "react-router-dom";
import { MdDone, MdDelete, MdCheckBoxOutlineBlank } from "react-icons/md";

import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";

const CartTable = styled.div`
  margin-top: 10%;

  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: 0.7fr 2fr 5fr 1fr 1fr;

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
  > div > div#checkBoxs {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  //제품사진
  div > a#prodImgs {
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
  div#productCounts {
  }

  // 가격 / 삭제버튼
  > div#productPrices {
    display: flex;
    flex-direction: column;
  }

  // 배송예정일, 배송비
  > div#deliveryInfos {
    display: flex;
    flex-direction: column;
  }

  // 총액
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
    > span#totalPriceNumber {
      display: flex;
      justify-content: flex-end;
      margin-right: 33%;

      margin-top: 5%;
      margin-bottom: 5%;
      > span#gkqrP {
        color: red;
        font-weight: bold;
        margin-right: 10%;
      }
    }
  }
`;

export default function CartView() {
  const ListOfCart = useRecoilValue(productList);
  const WhatsIn = ListOfCart;
  const setCartList = useSetRecoilState(productList);
  // const [CartList, setCartList] = useState(ListOfCart);
  // 클릭 이벤트로 생성할 예정 //
  const NewProduct = {
    id: 2,
    productName: "모던 자바스크립트", // 상품 이름
    price: 25000, // 원
    productCount: 5, // 개
    check: true,
    deliveryDay: 6,
    imgUrl: "https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332",
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
  let totalPrice = 0;
  for (var i = 0; i < ListOfCart.length; i++) {
    totalPrice += WhatsIn[i].price * WhatsIn[i].productCount;
    //    console.log(WhatsIn[i].productCount);
    console.log(WhatsIn[i].price * WhatsIn[i].productCount);
  }
  console.log(totalPrice);

  const onDelete = (e) => {
    console.log(e);
    console.log(e.key);
    console.log("delete");
  };

  return (
    <>
      <NavTop />
      <h1>장바구니 ({ListOfCart.length})</h1>
      <CartTable>
        {ListOfCart.map((prod) => (
          <>
            <div>
              <div
                id="checkBoxs"
                key={prod.id}
                onClick={() => {
                  // 체크 토글버튼

                  if (ListOfCart.length < 3) {
                    // 최대 4개
                    setCartList((prevList) => [...prevList, NewProduct]);
                    console.log(ListOfCart);
                    //  setCartList((prevList)=>[{...prevList},{...prevList, prevList.check = !prevList.check}])
                  }
                }}
              >
                {prod.check ? <MdDone /> : <MdCheckBoxOutlineBlank />}
              </div>
            </div>

            <div>
              <Link id="prodImgs" to="/" key={prod.productName}>
                <img key={prod.price} src={prod.imgUrl} alt="profile" />
                {prod.productName}
              </Link>
            </div>

            <div id="productCounts" key={prod.productCount}>
              <div>{`${prod.productCount}개/ 변경(input창)`} </div>
            </div>

            <div id="productPrices" key={prod.check}>
              {prod.price}
              <MdDelete dataset={prod.id} onClick={onDelete} />
            </div>

            <div id="deliveryInfos" key={prod.deliveryDay}>
              <span>{prod.deliveryFee}원</span>
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
              <span id="totalPriceNumber">
                <span id="gkqrP">합계</span>
                {totalPrice}
              </span>
            </>
          ) : null}
        </div>
      </TotalInfo>
    </>
  );
}
