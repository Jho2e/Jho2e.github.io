import React, { Component } from "react";
import Slider from "react-slick";

import "./slickStyle.css";
import "./slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slider__slick">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <span>1</span>
            <img
              alt="profile"
              src="https://cdn.webshopapp.com/shops/308240/files/393080776/image.jpg"
            />
          </div>
          <div>
            <span>2</span>
            <img
              alt="profile"
              src="https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Kelis_Trousers-Trousers-1687-14149-Coffee_Bean-7_800x.jpg?v=1642155760"
            />
          </div>
          <div>
            <span>3</span>
            <img
              alt="profile"
              src="https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Kelis_Trousers-Trousers-1687-14149-Coffee_Bean-3_800x.jpg?v=1642155747"
            />
          </div>
          <div>
            <span>4</span>
            <img
              alt="profile"
              src="https://img01.ztat.net/article/spp-media-p1/00e97b0184bb46bf875bc74e8691588f/ec3a51eb43e147d198707dcd066b8a53.jpg?imwidth=762"
            />
          </div>
          <div>
            <span>5</span>
            <img
              alt="profile"
              src="https://clothbase.s3.amazonaws.com/uploads/052b3ff2-3967-4a93-98f6-3f30096b5068/211636F087000_2.jpg"
            />
          </div>
          <div>
            <span>6</span>
            <img
              alt="profile"
              src="https://i.ebayimg.com/images/g/M70AAOSwpE5fy488/s-l500.png"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
