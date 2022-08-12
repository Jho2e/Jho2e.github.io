import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import productList, { AllProductList } from "../atoms";
import NavTop from "../Components/nav-top";
import styled from "styled-components";
import ItemDetail from "./itemDetail";

/*
recoil에 추가.
onClick={() => setCartList((prevList) => [...prevList, addblues])}
onClick={() => setCartList((prevList) => [...prevList, addBooks])}

담을 상품 개수 정하는 input / 
*/

/* const AllProductList = [
  {
    id: 1,
    productName: "티셔츠", // 상품 이름
    //  size: "L",
    price: 11000, // 원
    productCount: 3, // 개
    active: true,
    deliveryDay: 2,
    // 흰색
    imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
    // 검은색
    imgUrl2: "http://image.auction.co.kr/itemimage/19/79/4a/19794a35d3.jpg",
    // 파란색
    imgUrl3:
      "data:image/png;base64,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",
  },
  {
    id: 2,
    productName: "코트", // 상품 이름
    //    size: "M",
    price: 78000, // 원
    productCount: 1, // 개
    active: true,
    deliveryDay: 2,
    // 검은색
    imgUrl:
      "http://m.bylegacy.co.kr/web/product/big/202111/5437a58a81fe0e813a504011a00fd89e.jpg",
    // 살구색
    imgUrl2:
      "https://assets.burberry.com/is/image/Burberryltd/8541CA75-874F-4BE4-9AC0-607F65BF49BB?$BBY_V2_ML_1x1$&wid=887&hei=887",
    // 녹색
    imgUrl3:
      "https://dnvefa72aowie.cloudfront.net/origin/article/201711/16d3be86ce199cc090c56468c9055016fa78ddde49829689a54ee1ec069c7c68.jpg?q=95&s=1440x1440&t=inside",
  },
  {
    id: 3,
    productName: "신발", // 상품 이름
    //  size: "S",
    price: 69000, // 원
    productCount: 1, // 개
    active: true,
    deliveryDay: 2,
    imgUrl:
      "https://contents.lotteon.com/itemimage/_v114757/LO/15/56/89/67/19/_1/55/68/96/72/0/LO1556896719_1556896720_1.jpg/dims/optimize/dims/resizemc/400x400",
    imgUrl2: "https://image.g9.co.kr/g/2031059493/n?ts=1615957226000",
    imgUrl3:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MDJfMTkx/MDAxNTg4NDMwNjM2NjUx.hQUTRiD_G5Cs6Vfg4YgohxHlKQjOQ6h3wKNFeC-isgIg.c8TgLMaeeXs_KRgf_37gxobKvh3S5uQ6juk0wtqHIkMg.JPEG.realsnuff/Ot_20_S_S_%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A4_M998_%EC%8A%A4%EC%9B%A8%EC%9D%B4%EB%93%9C_%EB%A0%88%EB%8D%94_amp_%EB%A9%94%EC%89%AC_%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88_1.jpg?type=w800",
  },
]; */

const ItemListGrid = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 30px;

  text-align: center;

  > div {
    border: 1px solid black;
    padding: 10px;
    width: 200px;

    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      > img {
        border: 1px solid black;

        width: 200px !important;
        height: 200px !important;

        margin-bottom: 20px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default function ProductPage() {
  const AllProductListy = useRecoilValue(AllProductList);
  console.log("모든 상품 목록", AllProductList);

  return (
    <>
      <NavTop />

      <ItemListGrid>
        {AllProductListy.map((prod) => (
          <>
            <div>
              <Link to={`/products/${prod.id}${prod.productName}`}>
                {/* <Link to="/">*/}
                <img src={prod.imgUrl} alt="profile" />
              </Link>
              <span style={{ marginBottom: "10px" }}>{prod.productName}</span>
              <span>{prod.price}원</span>
            </div>
          </>
        ))}
      </ItemListGrid>

      <Routes>
        <Route path=":ItemId" element={<ItemDetail />}></Route>
      </Routes>
    </>
  );
}

function ProductDetail() {
  const { ItemId } = useParams();
  const ListOfCart = useRecoilValue(productList);
  const setCartList = useSetRecoilState(productList);

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

  console.log("ListOfCart :", ListOfCart);
  /* const [names, setNames] = useState([]);

  let list = [];

  useEffect(
    () =>
      ListOfCart.forEach((prod) => {
        const name = prod.productName;
        list.push(name);
        // console.log("name이 뭔지", name);
        // console.log("현재 list :", list);
        setNames(list);
        // console.log("names란", names);
      }),
    [] 
    );
    */

  return null;
}
