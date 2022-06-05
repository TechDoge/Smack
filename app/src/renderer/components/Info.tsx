import '../styles/Info.css'
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


export default function Info() {
  let stocksOwned = {"cash": 1000, "aapl": 0, "googl": 0, "amzn": 0, "msft": 0, "prpl": 0, "amc": 0, "fb": 0, "qqq": 0, "ecosia": 0, "lyft": 0, "tsla": 0, "nvda": 0, "nflx": 0, "rblx": 0, "t": 0, "gme": 0, "coke": 0, "razff": 0, "logi": 0, "adbe": 0}
  if(localStorage.getItem("stocksOwned") == null){
    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
  }else{
    stocksOwned = JSON.parse(localStorage.getItem("stocksOwned")!)
  }
  const symbols = ["AAPL" , "GOOGL", "AMZN","MSFT","PRPL","AMC","FB","QQQ","LYFT","TSLA","NVDA","NFLX","RBLX", "T", "GME", "COKE","LOGI"]
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    let i = 0;
    for (const [key, value] of Object.entries(stocksOwned)) {
      if (value <= 0 && document.getElementById(key) != null) {
        document.getElementById(key)!.style.display = "none"
        document.getElementById(key+"-line")!.style.display = "none"
      }else if (document.getElementById(key) != null){
        document.getElementById(key)!.style.display = "flex"
        document.getElementById(key+"-line")!.style.display = "block"
        document.getElementById(key)!.getElementsByClassName("stock-owned")[0].innerHTML = String(value)
        document.getElementById(key)!.getElementsByClassName("stock-value")[0].innerHTML = "$"+String(value*prices[i])
      }
      if (document.getElementById(key) != null){
        i += 1;
      }
    }
  }, [update])

  function updatePrices(){
    if (update == false){
      setUpdate(true)
    }else if(update == true){
      setTimeout(() => {setUpdate(false)}, 90)
    }
    console.log("updating")
    setTimeout(() => {updatePrices()}, 100)
  }updatePrices()

    return (
      <div className="main">
          <div className="stocks-title">
            Stocks
          </div>

          <div className="stock-line" id = "aapl-line"></div>
          <div className="stock" id = "aapl"> 
            <div className="stock-title">{symbols[0]}</div>
            <img className="stock-logo" src={Apple} />
            <div className="stock-owned">{stocksOwned["aapl"]}</div>
            <div className="stock-value">{stocksOwned["aapl"]*prices[0]}</div>
            <div className="curr-value">{prices[0]}</div>
            <div className="sell">
            <div className="sellButton" onClick={() => {
              let inpf = document.getElementById("aapl-inp") as HTMLInputElement
              if (stocksOwned.aapl >= parseInt(inpf.value)) {
                stocksOwned.aapl -= parseInt(inpf.value)
                stocksOwned.cash += parseInt(inpf.value) * prices[0]
                localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                if (stocksOwned.aapl == 0){
                  document.getElementById("aapl")!.style.display = "none"
                  document.getElementById("aapl-line")!.style.display = "none"
                }
              }
            }}>SELL</div><input className="sellInput" id = "aapl-inp" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-line" id = "googl-line"></div>
          <div className="stock" id = "googl"> 
            <div className="stock-title">{symbols[1]}</div>
            <img className="stock-logo" src={Google} />
            <div className="stock-owned">{stocksOwned["googl"]}</div>
            <div className="stock-value">{stocksOwned["googl"]*prices[1]}</div>
            <div className="curr-value">{prices[1]}</div>
            <div className="sell">
            <div className="sellButton" onClick={() => {
              let inpf = document.getElementById("googl-inp") as HTMLInputElement
              if (stocksOwned.googl >= parseInt(inpf.value)) {
                stocksOwned.googl -= parseInt(inpf.value)
                stocksOwned.cash += parseInt(inpf.value) * prices[1]
                localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                if (stocksOwned.googl == 0){
                  document.getElementById("googl")!.style.display = "none"
                  document.getElementById("googl-line")!.style.display = "none"
                }
              }
            }}>SELL</div><input className="sellInput" id = "googl-inp" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-line" id = "amzn-line"></div>
          <div className="stock" id = "amzn"> 
            <div className="stock-title">{symbols[2]}</div>
            <img className="stock-logo" src={Amazon} />
            <div className="stock-owned">{stocksOwned["amzn"]}</div>
            <div className="stock-value">{stocksOwned["amzn"]*prices[2]}</div>
            <div className="curr-value">{prices[2]}</div>
            <div className="sell">
            <div className="sellButton" onClick={() => {
              let inpf = document.getElementById("amzn-inp") as HTMLInputElement
              if (stocksOwned.amzn >= parseInt(inpf.value)) {
                stocksOwned.amzn -= parseInt(inpf.value)
                stocksOwned.cash += parseInt(inpf.value) * prices[2]
                localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                if (stocksOwned.amzn == 0){
                  document.getElementById("amzn")!.style.display = "none"
                  document.getElementById("amzn-line")!.style.display = "none"
                }
              }
            }}>SELL</div><input className="sellInput" id = "amzn-inp" placeholder="0" type="number"></input>
            </div>
          </div>
          
          
          <div className="stock-line" id = "msft-line"></div>
            <div className="stock" id = "msft"> 
              <div className="stock-title">{symbols[3]}</div>
              <img className="stock-logo" src={Microsoft} />
              <div className="stock-owned">{stocksOwned["msft"]}</div>
              <div className="stock-value">{stocksOwned["msft"]*prices[3]}</div>
              <div className="curr-value">{prices[3]}</div>
              <div className="sell">
              <div className="sellButton" onClick={() => {
                let inpf = document.getElementById("msft-inp") as HTMLInputElement
                if (stocksOwned.msft >= parseInt(inpf.value)) {
                  stocksOwned.msft -= parseInt(inpf.value)
                  stocksOwned.cash += parseInt(inpf.value) * prices[3]
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                  if (stocksOwned.msft == 0){
                    document.getElementById("msft")!.style.display = "none"
                    document.getElementById("msft-line")!.style.display = "none"
                  }
                }
              }}>SELL</div><input className="sellInput" id = "msft-inp" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-line" id = "prpl-line"></div>
              <div className="stock" id = "prpl"> 
                <div className="stock-title">{symbols[4]}</div>
                <img className="stock-logo" src={Purple} />
                <div className="stock-owned">{stocksOwned["prpl"]}</div>
                <div className="stock-value">{stocksOwned["prpl"]*prices[4]}</div>
                <div className="curr-value">{prices[4]}</div>
                <div className="sell">
                <div className="sellButton" onClick={() => {
                  let inpf = document.getElementById("prpl-inp") as HTMLInputElement
                  if (stocksOwned.prpl >= parseInt(inpf.value)) {
                    stocksOwned.prpl -= parseInt(inpf.value)
                    stocksOwned.cash += parseInt(inpf.value) * prices[4]
                    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                    if (stocksOwned.prpl == 0){
                      document.getElementById("prpl")!.style.display = "none"
                      document.getElementById("prpl-line")!.style.display = "none"
                    }
                  }
                }}>SELL</div><input className="sellInput" id = "prpl-inp" placeholder="0" type="number"></input>
                </div>
          </div>

          <div className="stock-line" id = "amc-line"></div>
          
          
          <div className="stock" id = "amc"> 
            <div className="stock-title">{symbols[5]}</div>
            <img className="stock-logo" src={AMC} />
            <div className="stock-owned">{stocksOwned["amc"]}</div>
            <div className="stock-value">{stocksOwned["amc"]*prices[5]}</div>
            <div className="curr-value">{prices[5]}</div>
            <div className="sell">
            <div className="sellButton" onClick={() => {
              let inpf = document.getElementById("amc-inp") as HTMLInputElement
              if (stocksOwned.amc >= parseInt(inpf.value)) {
                stocksOwned.amc -= parseInt(inpf.value)
                stocksOwned.cash += parseInt(inpf.value) * prices[5]
                localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                if (stocksOwned.amc == 0){
                  document.getElementById("amc")!.style.display = "none"
                  document.getElementById("amc-line")!.style.display = "none"
                }
              }
            }}>SELL</div><input className="sellInput" id = "amc-inp" placeholder="0" type="number"></input>
            </div>
          </div>

          <div className="stock-line" id = "fb-line"></div>
            <div className="stock" id = "fb"> 
              <div className="stock-title">{symbols[6]}</div>
              <img className="stock-logo" src={Facebook} />
              <div className="stock-owned">{stocksOwned["fb"]}</div>
              <div className="stock-value">{stocksOwned["fb"]*prices[6]}</div>
              <div className="curr-value">{prices[6]}</div>
              <div className="sell">
              <div className="sellButton" onClick={() => {
                let inpf = document.getElementById("fb-inp") as HTMLInputElement
                if (stocksOwned.fb >= parseInt(inpf.value)) {
                  stocksOwned.fb -= parseInt(inpf.value)
                  stocksOwned.cash += parseInt(inpf.value) * prices[6]
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                  if (stocksOwned.fb == 0){
                    document.getElementById("fb")!.style.display = "none"
                    document.getElementById("fb-line")!.style.display = "none"
                  }
                }
              }}>SELL</div><input className="sellInput" id = "fb-inp" placeholder="0" type="number"></input>
              </div>
          </div>
          

          <div className="stock-line" id = "qqq-line"></div>
            <div className="stock" id = "qqq"> 
              <div className="stock-title">{symbols[7]}</div>
              <img className="stock-logo" src={QQQ} />
              <div className="stock-owned">{stocksOwned["qqq"]}</div>
              <div className="stock-value">{stocksOwned["qqq"]*prices[7]}</div>
              <div className="curr-value">{prices[7]}</div>
              <div className="sell">
              <div className="sellButton" onClick={() => {
                let inpf = document.getElementById("qqq-inp") as HTMLInputElement
                if (stocksOwned.qqq >= parseInt(inpf.value)) {
                  stocksOwned.qqq -= parseInt(inpf.value)
                  stocksOwned.cash += parseInt(inpf.value) * prices[7]
                  localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                  if (stocksOwned.qqq == 0){
                    document.getElementById("qqq")!.style.display = "none"
                    document.getElementById("qqq-line")!.style.display = "none"
                  }
                }
              }}>SELL</div><input className="sellInput" id = "qqq-inp" placeholder="0" type="number"></input>
              </div>
            </div>
          

            <div className="stock-line" id = "lyft-line"></div>
              <div className="stock" id = "lyft"> 
                <div className="stock-title">{symbols[8]}</div>
                <img className="stock-logo" src={Lyft} />
                <div className="stock-owned">{stocksOwned["lyft"]}</div>
                <div className="stock-value">{stocksOwned["lyft"]*prices[8]}</div>
                <div className="curr-value">{prices[8]}</div>
                <div className="sell">
                <div className="sellButton" onClick={() => {
                  let inpf = document.getElementById("lyft-inp") as HTMLInputElement
                  if (stocksOwned.lyft >= parseInt(inpf.value)) {
                    stocksOwned.lyft -= parseInt(inpf.value)
                    stocksOwned.cash += parseInt(inpf.value) * prices[8]
                    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                    if (stocksOwned.lyft == 0){
                      document.getElementById("lyft")!.style.display = "none"
                      document.getElementById("lyft-line")!.style.display = "none"
                    }
                  }
                }}>SELL</div><input className="sellInput" id = "lyft-inp" placeholder="0" type="number"></input>
                </div>
              </div>


              <div className="stock-line" id = "tsla-line"></div>
                <div className="stock" id = "tsla"> 
                  <div className="stock-title">{symbols[9]}</div>
                  <img className="stock-logo" src={Tesla} />
                  <div className="stock-owned">{stocksOwned["tsla"]}</div>
                  <div className="stock-value">{stocksOwned["tsla"]*prices[9]}</div>
                  <div className="curr-value">{prices[9]}</div>
                  <div className="sell">
                  <div className="sellButton" onClick={() => {
                    let inpf = document.getElementById("tsla-inp") as HTMLInputElement
                    if (stocksOwned.tsla >= parseInt(inpf.value)) {
                      stocksOwned.tsla -= parseInt(inpf.value)
                      stocksOwned.cash += parseInt(inpf.value) * prices[9]
                      localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                      if (stocksOwned.tsla == 0){
                        document.getElementById("tsla")!.style.display = "none"
                        document.getElementById("tsla-line")!.style.display = "none"
                      }
                    }
                  }}>SELL</div><input className="sellInput" id = "tsla-inp" placeholder="0" type="number"></input>
                  </div>
                </div>

                <div className="stock-line" id = "nvda-line"></div>
                    <div className="stock" id = "nvda"> 
                      <div className="stock-title">{symbols[10]}</div>
                      <img className="stock-logo" src={Nvidia} />
                      <div className="stock-owned">{stocksOwned["nvda"]}</div>
                      <div className="stock-value">{stocksOwned["nvda"]*prices[10]}</div>
                      <div className="curr-value">{prices[10]}</div>
                      <div className="sell">
                      <div className="sellButton" onClick={() => {
                        let inpf = document.getElementById("nvda-inp") as HTMLInputElement
                        if (stocksOwned.nvda >= parseInt(inpf.value)) {
                          stocksOwned.nvda -= parseInt(inpf.value)
                          stocksOwned.cash += parseInt(inpf.value) * prices[10]
                          localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                          if (stocksOwned.nvda == 0){
                            document.getElementById("nvda")!.style.display = "none"
                            document.getElementById("nvda-line")!.style.display = "none"
                          }
                        }
                      }}>SELL</div><input className="sellInput" id = "nvda-inp" placeholder="0" type="number"></input>
                      </div>
                    </div>
                    <div className="stock-line" id = "nflx-line"></div>
              <div className="stock" id = "nflx"> 
                <div className="stock-title">{symbols[11]}</div>
                <img className="stock-logo" src={Netflix} />
                <div className="stock-owned">{stocksOwned["nflx"]}</div>
                <div className="stock-value">{stocksOwned["nflx"]*prices[11]}</div>
                <div className="curr-value">{prices[11]}</div>
                <div className="sell">
                <div className="sellButton" onClick={() => {
                  let inpf = document.getElementById("nflx-inp") as HTMLInputElement
                  if (stocksOwned.nflx >= parseInt(inpf.value)) {
                    stocksOwned.nflx -= parseInt(inpf.value)
                    stocksOwned.cash += parseInt(inpf.value) * prices[11]
                    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                    if (stocksOwned.nflx == 0){
                      document.getElementById("nflx")!.style.display = "none"
                      document.getElementById("nflx-line")!.style.display = "none"
                    }
                  }
                }}>SELL</div><input className="sellInput" id = "nflx-inp" placeholder="0" type="number"></input>
                </div>
              </div>
            
              <div className="stock-line" id = "rblx-line"></div>
                  <div className="stock" id = "rblx"> 
                    <div className="stock-title">{symbols[12]}</div>
                    <img className="stock-logo" src={Roblox} />
                    <div className="stock-owned">{stocksOwned["rblx"]}</div>
                    <div className="stock-value">{stocksOwned["rblx"]*prices[12]}</div>
                    <div className="curr-value">{prices[12]}</div>
                    <div className="sell">
                    <div className="sellButton" onClick={() => {
                      let inpf = document.getElementById("rblx-inp") as HTMLInputElement
                      if (stocksOwned.rblx >= parseInt(inpf.value)) {
                        stocksOwned.rblx -= parseInt(inpf.value)
                        stocksOwned.cash += parseInt(inpf.value) * prices[12]
                        localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                        if (stocksOwned.rblx == 0){
                          document.getElementById("rblx")!.style.display = "none"
                          document.getElementById("rblx-line")!.style.display = "none"
                        }
                      }
                    }}>SELL</div><input className="sellInput" id = "rblx-inp" placeholder="0" type="number"></input>
                    </div>
                </div>
                

                <div className="stock-line" id = "t-line"></div>
                    <div className="stock" id = "t"> 
                      <div className="stock-title">{symbols[13]}</div>
                      <img className="stock-logo" src={ATNT} />
                      <div className="stock-owned">{stocksOwned["t"]}</div>
                      <div className="stock-value">{stocksOwned["t"]*prices[13]}</div>
                      <div className="curr-value">{prices[13]}</div>
                      <div className="sell">
                      <div className="sellButton" onClick={() => {
                        let inpf = document.getElementById("t-inp") as HTMLInputElement
                        if (stocksOwned.t >= parseInt(inpf.value)) {
                          stocksOwned.t -= parseInt(inpf.value)
                          stocksOwned.cash += parseInt(inpf.value) * prices[13]
                          localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                          if (stocksOwned.t == 0){
                            document.getElementById("t")!.style.display = "none"
                            document.getElementById("t-line")!.style.display = "none"
                          }
                        }
                      }}>SELL</div><input className="sellInput" id = "t-inp" placeholder="0" type="number"></input>
                   </div>
                </div>
              
                <div className="stock-line" id = "gme-line"></div>
                      <div className="stock" id = "gme"> 
                        <div className="stock-title">{symbols[14]}</div>
                        <img className="stock-logo" src={Gamestop} />
                        <div className="stock-owned">{stocksOwned["gme"]}</div>
                        <div className="stock-value">{stocksOwned["gme"]*prices[14]}</div>
                        <div className="curr-value">{prices[14]}</div>
                        <div className="sell">
                        <div className="sellButton" onClick={() => {
                          let inpf = document.getElementById("gme-inp") as HTMLInputElement
                          if (stocksOwned.gme >= parseInt(inpf.value)) {
                            stocksOwned.gme -= parseInt(inpf.value)
                            stocksOwned.cash += parseInt(inpf.value) * prices[14]
                            localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                            if (stocksOwned.gme == 0){
                              document.getElementById("gme")!.style.display = "none"
                              document.getElementById("gme-line")!.style.display = "none"
                            }
                          }
                        }}>SELL</div><input className="sellInput" id = "gme-inp" placeholder="0" type="number"></input>
                        </div>
                </div>



                <div className="stock-line" id = "coke-line"></div>
                    <div className="stock" id = "coke"> 
                      <div className="stock-title">{symbols[15]}</div>
                      <img className="stock-logo" src={Coke} />
                      <div className="stock-owned">{stocksOwned["coke"]}</div>
                      <div className="stock-value">{stocksOwned["coke"]*prices[15]}</div>
                      <div className="curr-value">{prices[15]}</div>
                      <div className="sell">
                      <div className="sellButton" onClick={() => {
                        let inpf = document.getElementById("coke-inp") as HTMLInputElement
                        if (stocksOwned.coke >= parseInt(inpf.value)) {
                          stocksOwned.coke -= parseInt(inpf.value)
                          stocksOwned.cash += parseInt(inpf.value) * prices[15]
                          localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                          if (stocksOwned.coke == 0){
                            document.getElementById("coke")!.style.display = "none"
                            document.getElementById("coke-line")!.style.display = "none"
                          }
                        }
                      }}>SELL</div><input className="sellInput" id = "coke-inp" placeholder="0" type="number"></input>
                      </div>
                  </div>



                  <div className="stock-line" id = "logi-line"></div>
                      <div className="stock" id = "logi"> 
                        <div className="stock-title">{symbols[16]}</div>
                        <img className="stock-logo" src={Logitech} />
                        <div className="stock-owned">{stocksOwned["logi"]}</div>
                        <div className="stock-value">{stocksOwned["logi"]*prices[16]}</div>
                        <div className="curr-value">{prices[16]}</div>
                        <div className="sell">
                        <div className="sellButton" onClick={() => {
                          let inpf = document.getElementById("logi-inp") as HTMLInputElement
                          if (stocksOwned.logi >= parseInt(inpf.value)) {
                            stocksOwned.logi -= parseInt(inpf.value)
                            stocksOwned.cash += parseInt(inpf.value) * prices[16]
                            localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
                            if (stocksOwned.logi == 0){
                              document.getElementById("logi")!.style.display = "none"
                              document.getElementById("logi-line")!.style.display = "none"
                            }
                          }
                        }}>SELL</div><input className="sellInput" id = "logi-inp" placeholder="0" type="number"></input>
                        </div>
                      </div>


                
            


      </div>
    );
}
  