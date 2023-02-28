import React from "react";
import "./tabsections.css";


const TabSections = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 1,
      name: "Delivery",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "#FCEEC0",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: "Dining Out",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "#E5F3F3",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: "Nightlife",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#EDf4FF",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];
 
   
  return (
    <div className="tab_options">
      <div className="max_width options_wrapper">
        {tabs?.map((tab) => (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`tab_item absolute_center ${
                activeTab === tab?.name && "active_tab"
                }`}
              style={{cursor:"pointer"}}
            >
              <div
                className="tab_image_container absolute_center"
                style={{
                  backgroundColor: `${
                    activeTab === tab?.name ? tab?.backdrop : ""
                  }`,
                }}
              >
                <img
                  src={activeTab === tab.name ? tab.active_img : tab.inactive_img
                  }
                  className="tab_image"
                  alt={tab.name}
                />
              </div>
              <div className="tab_name">{ tab?.name}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TabSections;
