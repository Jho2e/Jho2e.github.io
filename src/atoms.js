import { atom } from "recoil";

export const productList = atom({
  key: "productList",
  default: [
    {
      id: 1,
      productName: "흰 옷", // 상품 이름
      size: "L",
      price: 7000, // 원
      productCount: 3, // 개
      active: true,
      deliveryDay: 2,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
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

export const AllProductList = atom({
  key: "AllProductList",
  default: [
    {
      id: 1,
      productName: "흰 옷", // 상품 이름
      size: "L",
      price: 7000, // 원
      productCount: 3, // 개
      active: true,
      deliveryDay: 2,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
    },
    {
      id: 2,
      productName: "검은 옷", // 상품 이름
      size: "M",
      price: 8000, // 원
      productCount: 1, // 개
      active: true,
      deliveryDay: 2,
      imgUrl: "http://image.auction.co.kr/itemimage/19/79/4a/19794a35d3.jpg",
    },
    {
      id: 3,
      productName: "파란 옷", // 상품 이름
      size: "S",
      price: 9000, // 원
      productCount: 1, // 개
      active: true,
      deliveryDay: 2,
      imgUrl:
        "data:image/png;base64,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",
    },
  ],
});

export default productList;
