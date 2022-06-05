import '../styles/Home.css'
import prices from '../components/prices'
import React, { useState, useEffect } from 'react'

export default function Home() {

  let stocksOwned = {"cash": 1000, "aapl": 0, "googl": 0, "amzn": 0, "msft": 0, "prpl": 0, "amc": 0, "fb": 0, "qqq": 0, "ecosia": 0, "lyft": 0, "tsla": 0, "nvda": 0, "nflx": 0, "rblx": 0, "t": 0, "gme": 0, "coke": 0, "razff": 0, "logi": 0, "adbe": 0}
  if(localStorage.getItem("stocksOwned") == null){
    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
  }else{
    stocksOwned = JSON.parse(localStorage.getItem("stocksOwned")!)
  }
  const symbols = ["AAPL" , "GOOGL", "AMZN","MSFT","PRPL","AMC","FB","QQQ","LYFT","TSLA","NVDA","NFLX","RBLX", "T", "GME", "COKE","LOGI"]
  for (let i = 0; i < 17; i++)
  {
    symbols[i] = symbols[i].toLowerCase()
  }
  useEffect(() => {
    let totalHoldings = 0;
    if (localStorage.getItem("stocksOwned") != null && prices !== null){
      for (const [key, value] of Object.entries(stocksOwned)) {
        if (key !== "cash" && symbols.includes(key)){
          totalHoldings += value*prices[symbols.indexOf(key)];
          console.log(value*prices[symbols.indexOf(key)])
        }
        else if (key === "cash"){
          totalHoldings += value;
        }
      }
      document.getElementById("container-value")!.innerHTML = "$" + totalHoldings.toFixed(2);
      document.getElementsByClassName("green-percent")[0].innerHTML = ((totalHoldings-1000)/10).toFixed(2) + "%";
    }
  }, [prices, stocksOwned])

    return (
      <div>
        <div className="top-row">
          <div className="holdings">
              <div className="container-title">Total Holdings</div>
              <div className="container-value" id="container-value">$0.00</div>
              <div className="green-info">
                <div className="green-up"></div>
                <div className="green-percent">0%</div>
                <div className="green-money">$0</div>
              </div>
          </div>
          <div className="learn">
              <div className="container-title">Learn</div>
              <div className="button-container">
                <div className="green-button" onClick={() => {window.open("https://www.nerdwallet.com/m/investing/how-to-buy-stocks-cs?bucket_id=Without+Chase&ds_rl=1251954&gclsrc=aw.ds&mktg_body=2989&mktg_hline=19335&mktg_place=kwd-21866581&model_execution_id=6CFCF0FF-A87F-44A9-87ED-52334798BDB7&nw_campaign_id=154950223590786600&utm_campaign=in_mktg_paid_101719_htbs_broad_dt&utm_content=ta&utm_medium=cpc&utm_source=goog&utm_term=learn+about+stocks")}}>Nerd Wallet</div>
                <div className="blue-button" onClick={() => {window.open("https://www.investopedia.com/articles/basics/06/invest1000.asp")}}>Investopedia</div>
                <div className="red-button" onClick={() => {window.open("https://www.edx.org/learn/stocks")}}>EDX</div>
              </div>
          </div>
        </div>


        <div className="bottom-row">
          <div className="research">
            <div className="container-title">Research</div>
            <div className="research-containers">
              <div className="research-container" onClick={() => {window.open("https://www.tradingview.com/markets/")}} style={{background: "#4F95FF", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}}>TradingView</div>
              <div className="research-container" onClick={() => {window.open("https://www.google.com/finance/")}} style={{background: "#FF498B"}}>Google Finance</div>
              <div className="research-container" onClick={() => {window.open("https://www.nasdaq.com/market-activity")}} style={{background: "#7BFFA0", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}>Nasdaq</div>
            </div>
          </div>

          <div className="interests">
            <div className="container-title">Stocks That Might Interest You</div>
            <div className="interests-containers">
              <div className="interest-container" style={{background: "#7E9CCA"}}>AAPL</div>
              <div className="interest-container" style={{background: "#FFCD82"}}>GOOGL</div>
              <div className="interest-container" style={{background: "#8467C4"}}>PURPLE</div>
              <div className="interest-container" style={{background: "#5E9EFF"}}>QQQ</div>
              <div className="interest-container" style={{background: "#7AFF97"}}>ECOSIA</div>
              <div className="interest-container" style={{background: "#FF74C7"}}>LYFT</div>
              
            </div>
          </div>
        </div>

      </div>
    );
}
  