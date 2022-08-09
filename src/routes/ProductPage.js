import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import productList from "../atoms";
import NavTop from "../Components/nav-top";

/*
recoil에 추가.
onClick={() => setCartList((prevList) => [...prevList, addblues])}
onClick={() => setCartList((prevList) => [...prevList, addBooks])}

담을 상품 개수 정하는 input / 
*/

export default function ProductPage() {
  return (
    <>
      <NavTop />
      <div>
        여기는 상품페이지들로 이동하는 경로입니다
        <br />
        <Link to="todtn">
          <h1>todtn 상품페이지로</h1>
        </Link>
        <br />
        <Link to="dht">
          <h1>dht 상품페이지로</h1>
        </Link>
        <br />
        <Routes>
          <Route path=":prodId" element={<ProductDetail />}></Route>
          <Route exact path="/" element={<h4>잘못된 클릭입니다.</h4>}></Route>
        </Routes>
      </div>
    </>
  );
}

function ProductDetail() {
  const { prodId } = useParams();
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

  return (
    <>
      <h2>{`${prodId} 페이지에 접근했습니다. `}</h2>
      <button
        onClick={() => setCartList((prevList) => [...prevList, addBooks])}
      >{`${prodId} `}</button>
      <h3>{ListOfCart.forEach((list) => list.productName)}</h3>
      <h3>{ListOfCart.length}</h3>
    </>
  );
}
