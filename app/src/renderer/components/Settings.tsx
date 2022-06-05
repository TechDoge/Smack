import '../styles/Settings.css'
import arrow from '../../../assets/arrow.png'


export default function Settings() {

  let stocksOwned = {"cash": 1000, "aapl": 0, "googl": 0, "amzn": 0, "msft": 0, "prpl": 0, "amc": 0, "fb": 0, "qqq": 0, "ecosia": 0, "lyft": 0, "tsla": 0, "nvda": 0, "nflx": 0, "rblx": 0, "t": 0, "gme": 0, "coke": 0, "razff": 0, "logi": 0, "adbe": 0}
  if(localStorage.getItem("stocksOwned") == null){
    localStorage.setItem("stocksOwned", JSON.stringify(stocksOwned))
  }else{
    stocksOwned = JSON.parse(localStorage.getItem("stocksOwned")!)
  }

    return (
      <div>
          <div className="settings-frame">

            <div className="settings-title">
              User Settings
            </div>

            <div className="restart">
              Restart
              <img className="restart-button" src={arrow} onClick={() => {
                localStorage.clear()
                window.location.reload()
              }}></img>
            </div>

            <div className="currency">
              Currency
              <div className="currency-button">USD</div>
            </div>

          </div>
      </div>
    );
}
  