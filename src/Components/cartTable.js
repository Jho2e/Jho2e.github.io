import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";
import styled from "styled-components";

const CartTableStyle = styled.div`
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

export default function CartTable() {
  const ListOfCart = useRecoilValue(productList);
  const setCartList = useSetRecoilState(productList);

  const onToggle = (e) => {
    console.log(e.target.id);

    const newActivelist = ListOfCart.map((list) =>
      Number(list.id) === Number(e.target.id)
        ? { ...list, active: !list.active }
        : list
    );
    setCartList(newActivelist);
  };
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
  };
  const onDelete = (e) => {
    const newDeleteList = ListOfCart.filter(
      (list) =>
        `fa-solid fa-trash-can ${list.colorFinal} ${list.productName}` !==
        e.target.attributes[0].value
    );

    setCartList(newDeleteList);
  };

  return (
    <CartTableStyle>
      {ListOfCart.map((prod) => (
        <>
          <div>
            <div className="checkBoxs">
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
              <img src={prod.imgFinal} alt="profile" />
              {prod.productName} <br />
              <span>({prod.colorFinal})</span>
            </Link>
          </div>

          <div className="productCounts">
            <div>{`${prod.countFinal}개`} </div>
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
              className={`fa-solid fa-trash-can ${prod.colorFinal} ${prod.productName}`}
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
    </CartTableStyle>
  );
}
