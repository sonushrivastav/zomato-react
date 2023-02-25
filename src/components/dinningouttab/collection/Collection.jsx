import React from "react";
import "./collection.css";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import Slider from "react-slick";

const Collection = ({list}) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="collection-wrapper">
      <div className="max_width collection">
        <div className="collection_title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className="collection-location">
            <div>All Collections in Bangalore </div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                  <i className="fi fi-rr-caret-right absolute-center"></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
