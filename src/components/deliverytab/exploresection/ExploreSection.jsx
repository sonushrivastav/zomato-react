import React from "react";
import ExploreCard from "./explorecard/ExploreCard";
import "./exploresection.css";
const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max_width explore_section">
      <div className="collection_title">{collectionName}</div>
      <div className="explore_grid">
        {list?.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
