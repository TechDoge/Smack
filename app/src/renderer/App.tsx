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
import Videos from './components/Videos'
import videoIcon from '../../assets/video.png'
import prices from './components/prices'
import './App.css'



export default function App() {

  const [active, setActive] = useState([true, false, false, false, false])
  let symbols = ["aapl" , "googl", "amzn","msft","prpl","amc","fb","qqq","ecosia","lyft","tsla","nvda","nflx","rblx", "t", "gme", "coke","razff","logi","adbe"]
  let stocksOwned = {"cash": 1000, "aapl": 0, "googl": 0, "amzn": 0, "msft": 0, "prpl": 0, "amc": 0, "fb": 0, "qqq": 0, "ecosia": 0, "lyft": 0, "tsla": 0, "nvda": 0, "nflx": 0, "rblx": 0, "t": 0, "gme": 0, "coke": 0, "razff": 0, "logi": 0, "adbe": 0}
  if(localStorage.getItem("stocksOwned") == null){
    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
  }else{
    stocksOwned = JSON.parse(localStorage.getItem("stocksOwned")!)
  }
  
  const [stockPrices, setStockPrices] = useState([""])

  const API_KEY = 'iGN78cTpM29Y7LXe1Sfvjanrjud8ErM280DlA1JJ';
  let StockSymbols = ''
  for (let i = 0; i < symbols.length; i++) {
    StockSymbols += symbols[i].toUpperCase() + ','
  }
  StockSymbols = StockSymbols.slice(0, -1)
  let API_Call = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='+StockSymbols+'/'
  // fetch(API_Call, {
  //   method: 'GET',
  //   headers: {
  //     'x-api-key': API_KEY
  //   }
  // })
  // .then(
  //   function(response) {
  //     return response.json();
  //   }
  // )
  // .then(
  //   function(data) {
  //     let tempPrices = []
  //     for (let i = 0; i < 17; i++){
  //       tempPrices.push(data["quoteResponse"]["result"][String(i)]["bid"])
  //       prices[i] = data["quoteResponse"]["result"][String(i)]["bid"]
  //     }
  //     setStockPrices([...tempPrices])
      
  //   }
  // )



  return (
    <>
      <div className="navbar">
        <img src={logo} className="navbutton logo" />
        <div className="navtrio">
          <div className="liney"></div>
          <img onClick={() => {setActive([true, false, false, false, false]); document.getElementsByTagName("body")[0].style.overflowY = "hidden"}} src={home} className={active[0] ? "navbutton active" : "navbutton"} />
          <img onClick={() => {setActive([false, true, false, false, false]); document.getElementsByTagName("body")[0].style.overflowY = "auto"}} src={stocks} className={active[1] ? "navbutton active" : "navbutton"} />
          <img onClick={() => {setActive([false, false, true, false, false]); document.getElementsByTagName("body")[0].style.overflowY = "auto"}} src={find} className={active[2] ? "navbutton active" : "navbutton"} />
          <img onClick={() => {setActive([false, false, false, true, false]); document.getElementsByTagName("body")[0].style.overflowY = "hidden"}} src={videoIcon} className={active[3] ? "navbutton active" : "navbutton"} />
          <div className="liney"></div>
        </div>
        <img onClick={() => {setActive([false, false, false, false, true]); document.getElementsByTagName("body")[0].style.overflowY = "hidden"}} src={settings} className={active[4] ? "navbutton settings active" : "navbutton settings"} />
      </div>

      {active[0] ? <Home /> : <></>} 
      {active[1] ? <Info /> : <></>} 
      {active[2] ? <Explore /> : <></>} 
      {active[3] ? <Videos /> : <></>} 
      {active[4] ? <Settings /> : <></>} 

    </>
  )
}
