import React from "react";
import "./filter.css";
const Filter = ({ filterlist }) => {
  return (
    <div className="filters">
      {filterlist &&
        filterlist?.map((filter) => {
          return (
            <div id={filter?.id} className="filter_item">
              <span>{filter?.icon && filter?.icon}</span>
              <span className="filter_name">{filter?.title}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
