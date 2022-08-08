import { useState } from "react";
import { atom } from "recoil";

export const productList = atom({
  key: "productList",
  default: [
    {
      id: 1,
      productName: "흰 옷", // 상품 이름
      price: 7000, // 원
      productCount: 3, // 개
      active: true,
      deliveryDay: 2,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
      /*  productName: "", // 상품 이름
      price: 0, // 원
      productCount: 0, // 개 */
    },
    /* {
      id: 2,
      productName: "모던 자바스크립트", // 상품 이름
      price: 25000, // 원
      productCount: 5, // 개
      active: true,
      deliveryDay: 6,
      deliveryFee: 2500,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332",
    }, */
  ],
});

export default productList;
