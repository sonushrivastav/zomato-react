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
              <i className="fi fi-rr-marker absolute_center icon_loation"></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute_center"></i>
          </div>
          <div className="location_separate"></div>
          <div className="searchbar">
            <i className="fi fi-rr-search search_icon"></i>
            <input type="text" className="search_input" placeholder="Search for  estaurant, cuisine or a dish"/>
          </div>
        </div>
        <div className="profile-viewer">
          <img className="header_profile" src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile.png" />
          <span className="header_username">Sonu</span>
          <i className="fi fi-rr-angle-small-down absolute_center profile_icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
