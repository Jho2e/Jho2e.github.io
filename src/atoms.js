import { atom } from "recoil";

// 장바구니에 담은 상품
export const productList = atom({
  key: "productList",
  default: [
    // {
    //   id: 1,
    //   productName: "흰 옷", // 상품 이름
    //   size: "L",
    //   price: 7000, // 원
    //   productCount: 3, // 개
    //   active: true,
    //   deliveryDay: 2,
    //   imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
    // },
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

// 전체 상품
export const AllProductList = atom({
  key: "AllProductList",
  default: [
    {
      id: 1,
      productName: "티셔츠", // 상품 이름
      size: "L",
      price: 11000, // 원
      productCount: 3, // 개
      active: true,
      deliveryDay: 2,

      // 흰색
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/127E30425061A49419",
      color: "흰 색",

      // 검은색
      imgUrl2: "http://image.auction.co.kr/itemimage/19/79/4a/19794a35d3.jpg",
      color2: "검은색",

      // 파란색

      imgUrl3:
        "https://contents.sixshop.com/uploadedFiles/162329/product/image_1619492759350.jpg",
      color3: "파란색",

      // 최종적으로 장바구니에 담길
      imgFinal: "",
      countFinal: "",
      colorFinal: "",
    },
    {
      id: 2,
      productName: "코트", // 상품 이름
      size: "M",
      price: 78000, // 원
      productCount: 1, // 개
      active: true,
      deliveryDay: 2,
      imgUrl:
        "http://m.bylegacy.co.kr/web/product/big/202111/5437a58a81fe0e813a504011a00fd89e.jpg",
      // 살구색
      imgUrl2:
        "https://assets.burberry.com/is/image/Burberryltd/8541CA75-874F-4BE4-9AC0-607F65BF49BB?$BBY_V2_ML_1x1$&wid=887&hei=887",
      // 녹색
      imgUrl3:
        "https://dnvefa72aowie.cloudfront.net/origin/article/201711/16d3be86ce199cc090c56468c9055016fa78ddde49829689a54ee1ec069c7c68.jpg?q=95&s=1440x1440&t=inside",
      color: "검은색",
      color2: "살구색",
      color3: "녹색",

      // 최종적으로 장바구니에 담길
      imgFinal: "",
      countFinal: "",
      colorFinal: "",
    },
    {
      id: 3,
      productName: "신발", // 상품 이름
      size: "S",
      price: 69000, // 원
      productCount: 1, // 개
      active: true,
      deliveryDay: 2,
      imgUrl:
        "https://contents.lotteon.com/itemimage/_v114757/LO/15/56/89/67/19/_1/55/68/96/72/0/LO1556896719_1556896720_1.jpg/dims/optimize/dims/resizemc/400x400",
      imgUrl2: "https://image.g9.co.kr/g/2031059493/n?ts=1615957226000",
      imgUrl3:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MDJfMTkx/MDAxNTg4NDMwNjM2NjUx.hQUTRiD_G5Cs6Vfg4YgohxHlKQjOQ6h3wKNFeC-isgIg.c8TgLMaeeXs_KRgf_37gxobKvh3S5uQ6juk0wtqHIkMg.JPEG.realsnuff/Ot_20_S_S_%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A4_M998_%EC%8A%A4%EC%9B%A8%EC%9D%B4%EB%93%9C_%EB%A0%88%EB%8D%94_amp_%EB%A9%94%EC%89%AC_%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88_1.jpg?type=w800",
      color: "흰색",
      color2: "검은색",
      color3: "살구색",

      // 최종적으로 장바구니에 담길
      imgFinal: "",
      countFinal: "",
      colorFinal: "",
    },
  ],
});

export default productList;
