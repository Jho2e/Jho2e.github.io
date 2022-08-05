import { useState } from "react";
import { atom } from "recoil";

export const productList = atom({
  key: "productList",
  default: [
    {
      id: 1,
      productName: "생수", // 상품 이름
      price: 17000, // 원
      productCount: 3, // 개
      check: false,
      deliveryDay: 4,
      imgUrl:
        "http://img3.tmon.kr/cdn3/deals/2019/12/24/2398028526/original_2398028526_front_084b8_1577156046production.png",
      /*  productName: "", // 상품 이름
      price: 0, // 원
      productCount: 0, // 개 */
    },
    /* {
      id: 2,
      productName: "모던 자바스크립트", // 상품 이름
      price: 25000, // 원
      productCount: 5, // 개
      check: true,
      deliveryDay: 6,
      deliveryFee: 2500,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332",
    }, */
  ],
});

export default productList;
