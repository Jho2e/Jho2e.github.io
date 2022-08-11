import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

      padding-bottom: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
    > div:nth-child(5) {
      // 개수 정하는 인풋 / 장바구니 담기 / 바로구매
      padding-left: 0%;
      display: grid;
      grid-template-columns: 30px 150px 150px;
      grid-template-rows: 50px;

      grid-gap: 30px;
      > div {
        // 인풋과 버튼이 내장된 div
        width: 30px;

        display: flex;
        > input {
          text-align: center;
          font-size: 15px;
          width: 20px;
        }
        > div {
          > button {
            z-index: 30;
          }
          > button:first-child {
            width: 25px;
            height: 25px;

            text-align: center;
          }
          > button:nth-child(2) {
            width: 25px;
            height: 25px;

            text-align: center;
          }
        }
      }

      > button:hover {
        cursor: pointer;
      }

      > button:nth-child(2) {
        // 장바구니 담기
        background-color: white;
        color: #3390ff;

        font-weight: bold;
        border: 1px solid #3390ff;
        position: relative;
        &:hover {
          color: #0f5ca8;
          border: 1px solid #0f5ca8;
        }
        > div {
          // 바로이동을 내장한 div
          position: absolute;
          top: -100px;
          left: -50px;
          background-color: white;

          z-index: 999999;
          border: 1px solid black;
          padding: 25px;
          padding-top: 10px;

          width: 200px;

          cursor: default;
          > span {
            color: black;
            &:hover {
              cursor: default;
            }
          }
          > p {
            // x버튼과 물어보는 text
            margin-bottom: 35px;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            &:hover {
              cursor: default;
            }
            > span:first-child {
              // x 버튼
              font-size: 15px;

              color: rgba(0, 0, 0, 0.4);

              width: 10px;

              position: relative;
              left: 200px;

              &:hover {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.7);
              }
            }
            > span:nth-child(2) {
              color: black;
            }
          }
          > a > div {
            // 바로이동 버튼
            border: 1px solid #3390ff;
            color: #3390ff;
            padding: 5px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
      > button:nth-child(3) {
        // 바로구매
        background-color: #3390ff;
        color: white;

        border: 1px solid #3390ff;
        &:hover {
          background-color: #0f5ca8;
        }
      }
    }
  }
`;

export default function ItemDetail() {
  const [howMany, setHowMany] = useState(1);

  const ItemName = useParams();
  console.log(ItemName);
  /*{ItemId: '1흰 옷'} {ItemId: '2검은 옷'} {ItemId: '3파란 옷'}*/

  const AllList = useRecoilValue(AllProductList);
  const setCartList = useSetRecoilState(productList);

  // 음수 x, 10이상 x
  if (howMany > 10) {
    alert("10이상 멈춰 !");
    setHowMany(10);
  } else if (howMany < 0) {
    alert("음수 멈춰 !");
    setHowMany(1);
  }

  //  장바구니에 담을 객체 생성
  for (var i = 0; i < AllList.length; i++) {
    // 더욱 꼼꼼히 하고싶다면 ,
    // && 로 아이디 뿐만 아니라 다른 조건들도 같은지 확인하면 가능
    if (Number(AllList[i].id) === Number(ItemName.ItemId[0])) {
      var selectItemInfo = {
        id: AllList[i].id,
        productName: AllList[i].productName,
        size: AllList[i].size,
        price: AllList[i].price,
        productCount: howMany,
        active: AllList[i].active,
        deliveryDay: AllList[i].deliveryDay,
        imgUrl: AllList[i].imgUrl,
      };
    }
  }
  let wantShow = { ...selectItemInfo };

  const onChange = () => {
    // 장바구니 담기 버튼

    wantShow["productCount"] = Number(howMany);
    setCartList((prevList) => [...prevList, wantShow]);
    //   moveToCart();
    ChangeAreYouMove();
  };

  const [areYouMove, setAreYouMove] = useState(false);
  const ChangeAreYouMove = () => {
    setAreYouMove((prev) => !prev);
  };

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
            <div style={{ fontSize: "10px" }}>
              <input
                type="text"
                id="prodCount"
                value={howMany}
                onChange={(e) => setHowMany(e.target.value)}
              ></input>
              <div>
                <button onClick={() => setHowMany((prev) => prev + 1)}>
                  +1
                </button>
                <button onClick={() => setHowMany((prev) => prev - 1)}>
                  -1
                </button>
              </div>
            </div>

            <button

            //              onClick={() => setCartList((prevList) => [...prevList, wantShow])}
            >
              {/* 장바구니 담기 누르면 alert창으로 바로가시겠습니까? 생성. */}
              <span onClick={onChange}>장바구니 담기</span>
              {areYouMove ? (
                <div id="AreYouMoveDiv">
                  <p>
                    <span onClick={ChangeAreYouMove}>X</span>
                    <span>상품이 장바구니에 담겼습니다.</span>
                  </p>
                  <Link to="/cartView">
                    <div>장바구니 바로가기</div>
                  </Link>
                </div>
              ) : null}
            </button>
            <button>바로 구매</button>
          </div>
        </div>
      </ShowDetail>
    </>
  );
}
