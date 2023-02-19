import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import TabSections from '../../components/tabsection/TabSections'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <TabSections />
      <Footer/>
    </div>
  )
}

export default Home
