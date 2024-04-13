import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Expert from './Expert'
import C1 from './C1'
import AI from './AI'
import Skincare from './Skincare'
import Choice from './Choice'
import Belive from './Belive'
const Home = () => {
  return (
  <div className="">
    <div className=""><Nav/></div>
    <div className=" capitalize"><Content/></div>
    <div className=" capitalize"><img src="https://www.redonblue.in/skinpheras/resources/page/zcfha9d98n.PNG" alt=" image is no found" /></div>
    <div><Expert/></div>
    
    <div><C1/></div>
    <div><AI/></div>
    <div><Skincare/></div>
    <div><Choice/></div>
    <div><Belive/></div>

  </div>
  )
}

export default Home