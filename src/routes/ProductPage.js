import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

export default function ProductPage() {
  return (
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
  );
}

function ProductDetail() {
  const { prodId } = useParams();
  return <h2>{`${prodId} 페이지에 접근했습니다. `}</h2>;
}
