import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import TabSections from '../../components/tabsection/TabSections'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const [activeTab,setActiveTab]=useState("Nightlife")

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <div>Delivery</div>;
      case "Dinning Out":
        return <div>Dinning Out</div>;
      case "Nightlife":
        return <div>Nightlife</div>;
      default:
        return <div>Delivery</div>
    }
  }
  return (
    <div>
      <Header />
      <TabSections />
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

export default Home
