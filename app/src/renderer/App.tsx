import React, { useState } from 'react'
import logo from '../../assets/icon.png'
import home from '../../assets/home.png'
import stocks from '../../assets/stocks.png'
import find from '../../assets/find.png'
import settings from '../../assets/settings.png'
import Home from './components/Home'
import Info from './components/Info'
import Explore from './components/Explore'
import Settings from './components/Settings'

import './App.css'


export default function App() {

  const [active, setActive] = useState([true, false, false, false])

  return (
    <>
      <div className="navbar">
        <img src={logo} className="navbutton logo" />
        <div className="navtrio">
          <div className="liney"></div>
          <img onClick={() => {setActive([true, false, false, false])}} src={home} className={active[0] ? "navbutton active" : "navbutton"} />
          <img onClick={() => {setActive([false, true, false, false])}} src={stocks} className={active[1] ? "navbutton active" : "navbutton"} />
          <img onClick={() => {setActive([false, false, true, false])}} src={find} className={active[2] ? "navbutton active" : "navbutton"} />
          <div className="liney"></div>
        </div>
        <img onClick={() => {setActive([false, false, false, true])}} src={settings} className={active[3] ? "navbutton settings active" : "navbutton settings"} />
      </div>

      {active[0] ? <Home /> : <></>} 
      {active[1] ? <Info /> : <></>} 
      {active[2] ? <Explore /> : <></>} 
      {active[3] ? <Settings /> : <></>} 

    </>
  )
}
