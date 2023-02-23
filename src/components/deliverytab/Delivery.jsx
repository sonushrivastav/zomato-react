import React from 'react'
import Filter from '../filters/Filter'
import "./delivery.css"
import DeliveryCollection from './deliverycollection/DeliveryCollection'
import TopBrands from './topBrands/TopBrands'
const Delivery = () => {
  const deliveryFilter = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
      id: 6,
      title: "Great Offers",
    },
  ]
  return (
    <>
      <div className='max_width'>
        <Filter filterlist={ deliveryFilter} />
      </div>
      <DeliveryCollection />
      <TopBrands/>
    </>
  )
}

export default Delivery
