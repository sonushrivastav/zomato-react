import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import TabSections from '../../components/tabsection/TabSections'
import Footer from '../../components/footer/Footer'
import Delivery from '../../components/deliverytab/Delivery'
import DinningOut from '../../components/dinningouttab/DinningOut'
import NightLife from '../../components/nightlifetab/NightLife'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = () => {
  const [activeTab,setActiveTab]=useState("Delivery")

 
  return (
    <div>
      <Header />
      <TabSections activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
      
      <Routes>
        <Route path='/Delivery' element={ <Delivery/>} />
        <Route path='/Dining Out' element={ <DinningOut/>} />
        <Route path='/Nightlife' element={ <NightLife/>} />
     </Routes>

    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery/>;
    case "Dining Out":
      return <DinningOut/>;
    case "Nightlife":
      return <NightLife/>;
    default:
      return <Delivery/>
  }
}

export default Home
