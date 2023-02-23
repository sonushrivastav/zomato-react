import React from "react";
import "./deliveryitem.css";
const DeliveryItem = ({ item }) => {
  return (
    <>
      <div className="delivery_item_cover">
        <img
          src={item?.cover}
          className="delivery_item_image"
          alt={item?.title}
        />
          </div>
          <div className="delivery_item_title">{ item?.title}</div>
    </>
  );
};

export default DeliveryItem;
