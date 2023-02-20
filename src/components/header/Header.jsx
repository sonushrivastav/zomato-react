import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max_width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header_logo"
      />

      <div className="header_left">
        <div className="search_container">
          <div className="location_wrapper">
            <div className="location_icon">
              <i className="fi fi-rr-marker"></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute_center"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
