import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import TabSections from '../../components/tabsection/TabSections'
import Footer from '../../components/footer/Footer'
import Delivery from '../../components/deliverytab/Delivery'
import DinningOut from '../../components/dinningouttab/DinningOut'
import NightLife from '../../components/nightlifetab/NightLife'

const Home = () => {
  const [activeTab,setActiveTab]=useState("Nightlife")

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery/>;
      case "Dinning Out":
        return <DinningOut/>;
      case "Nightlife":
        return <NightLife/>;
      default:
        return <Delivery/>
    }
  }
  return (
    <div>
      <Header />
      <TabSections activeTab={activeTab} setActiveTab={ setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

export default Home
