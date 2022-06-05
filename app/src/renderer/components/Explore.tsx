import '../styles/Explore.css'
import React, { useState, useEffect } from 'react'
import prices from '../components/prices'
import Apple from "../components/images/AAPL.png"
import Google from "../components/images/GOOGL.png"
import Amazon from "../components/images/AMZN.png"
import Microsoft from "../components/images/MSFT.png"
import Purple from "../components/images/PRPL.jpg"
import AMC from "../components/images/AMC.png"
import Facebook from "../components/images/FB.png"
import QQQ from "../components/images/QQQ.png"
import Lyft from "../components/images/LYFT.png"
import Tesla from "../components/images/TSLA.png"
import Nvidia from "../components/images/NVDA.png"
import Netflix from "../components/images/NFLX.jpg"
import Roblox from "../components/images/RBLX.png"
import ATNT from "../components/images/T.jpg"
import Gamestop from "../components/images/GME.png"
import Coke from "../components/images/COKE.jpg"
import Logitech from "../components/images/LOGI.jpg"

export default function Explore() {

    let stocksOwned = {"cash": 1000, "aapl": 0, "googl": 0, "amzn": 0, "msft": 0, "prpl": 0, "amc": 0, "fb": 0, "qqq": 0, "ecosia": 0, "lyft": 0, "tsla": 0, "nvda": 0, "nflx": 0, "rblx": 0, "t": 0, "gme": 0, "coke": 0, "razff": 0, "logi": 0, "adbe": 0}
    if(localStorage.getItem("stocksOwned") == null){
      localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
    }else{
      stocksOwned = JSON.parse(localStorage.getItem("stocksOwned")!)
    }

    return (
      <div className="mains">

        <div className="pages-title">Buy Stocks</div>

        <div className="stock-containers">


          <div className="stock-container">
            <div className="stockName">AAPL</div>
            <img className="stockLogo" src={Apple} />
            <div className="stockPrice">${prices[0]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("aapl-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[0] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[0]
                  stocksOwned.aapl += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="aapl-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">GOOGL</div>
            <img className="stockLogo" src={Google} />
            <div className="stockPrice">${prices[1]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("googl-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[1] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[1]
                  stocksOwned.googl += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="googl-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">AMZN</div>
            <img className="stockLogo" src={Amazon} />
            <div className="stockPrice">${prices[2]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("amzn-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[2] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[2]
                  stocksOwned.amzn += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="amzn-buy" placeholder="0" type="number"></input>
            </div>
          </div>
          
          <div className="stock-container">
            <div className="stockName">MSFT</div>
            <img className="stockLogo" src={Microsoft} />
            <div className="stockPrice">${prices[3]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("msft-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[3] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[3]
                  stocksOwned.msft += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="msft-buy" placeholder="0" type="number"></input>
            </div>
          </div>
          

        <div className="stock-container">
            <div className="stockName">PRPL</div>
            <img className="stockLogo" src={Purple} />
            <div className="stockPrice">${prices[4]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("prpl-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[4] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[4]
                  stocksOwned.prpl += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="prpl-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">AMC</div>
            <img className="stockLogo" src={AMC} />
            <div className="stockPrice">${prices[5]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("amc-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[5] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[5]
                  stocksOwned.amc += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="amc-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">FB</div>
            <img className="stockLogo" src={Facebook} />
            <div className="stockPrice">${prices[6]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("fb-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[6] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[6]
                  stocksOwned.fb += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="fb-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">QQQ</div>
            <img className="stockLogo" src={QQQ} />
            <div className="stockPrice">${prices[7]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("qqq-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[7] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[7]
                  stocksOwned.qqq += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="qqq-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">LYFT</div>
            <img className="stockLogo" src={Lyft} />
            <div className="stockPrice">${prices[8]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("lyft-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[8] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[8]
                  stocksOwned.lyft += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="lyft-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">TSLA</div>
            <img className="stockLogo" src={Tesla} />
            <div className="stockPrice">${prices[9]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("tsla-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[9] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[9]
                  stocksOwned.tsla += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="tsla-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">NVDA</div>
            <img className="stockLogo" src={Nvidia} />
            <div className="stockPrice">${prices[10]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("nvda-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[10] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[10]
                  stocksOwned.nvda += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="nvda-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">NFLX</div>
            <img className="stockLogo" src={Netflix} />
            <div className="stockPrice">${prices[11]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("nflx-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[11] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[11]
                  stocksOwned.nflx += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="nflx-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">RBLX</div>
            <img className="stockLogo" src={Roblox} />
            <div className="stockPrice">${prices[12]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("rblx-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[12] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[12]
                  stocksOwned.rblx += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="rblx-buy" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-container">
            <div className="stockName">T</div>
            <img className="stockLogo" src={ATNT} />
            <div className="stockPrice">${prices[13]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("t-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[13] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[13]
                  stocksOwned.t += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="t-buy" placeholder="0" type="number"></input>
            </div>
          </div>
          

          <div className="stock-container">
            <div className="stockName">GME</div>
            <img className="stockLogo" src={Gamestop} />
            <div className="stockPrice">${prices[14]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("gme-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[14] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[14]
                  stocksOwned.gme += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="gme-buy" placeholder="0" type="number"></input>
            </div>
          </div>
          

          <div className="stock-container">
            <div className="stockName">COKE</div>
            <img className="stockLogo" src={Coke} />
            <div className="stockPrice">${prices[15]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("coke-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[15] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[15]
                  stocksOwned.coke += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="coke-buy" placeholder="0" type="number"></input>
            </div>
          </div>
          
          <div className="stock-container">
            <div className="stockName">LOGI</div>
            <img className="stockLogo" src={Logitech} />
            <div className="stockPrice">${prices[14]}</div>
            <div className="buy">
              <div className="buy-button" onClick={() => {
                const inp = document.getElementById("logi-buy") as HTMLInputElement
                const num = parseInt(inp.value)
                if (num * prices[14] > stocksOwned.cash) {
                } else {
                  stocksOwned.cash -= num * prices[14]
                  stocksOwned.logi += num
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                }
              }}>Buy</div>
              <input className="buy-inp" id="logi-buy" placeholder="0" type="number"></input>
            </div>
          </div>
        </div>
      </div>

    );
}
  