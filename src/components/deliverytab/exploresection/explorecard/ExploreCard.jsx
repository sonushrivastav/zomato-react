import React from "react";
import "./explorecard.css";
const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item?.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore_card" style={{ cursor: "pointer" }}>
      <div className="explore_card_cover">
        <img src={coverImg} alt={name} className="expore_card_image" />
        <div className="deliverytime">{deliveryTime}</div>
        {proOff && <div className="pro_off">{proOff}</div>}
        {goldOff && <div className="gold_off absolute_center">{goldOff}</div>}
        {discount && <div className="discount absolute_center">{discount}</div>}
      </div>
      <div className="res_row">
        <div className="res_name">{name}</div>
        {rating && (
          <div className="res_rating absolute_center">
            {rating} <i className="fi fi-rr-star absolute_center"></i>
          </div>
        )}
      </div>
      <div className="res_row">
        {cuisines.length && (
          <div className="res_cuisine">
            {cuisines?.map((item, i) => {
              return (
                <span className="res_cuisine_tag">
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
            {
              approxPrice && <div className="approx_price">{ approxPrice}</div>
            }
          </div>
        )}
      </div>
      {
        bottomContainers.length > 0 && (
          <div>
            <div></div>
            <div>
              <img style={{height:"18px"}} src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} />
              <div className="res_bottom_text">{ bottomContainers[0]?.text}</div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ExploreCard;
