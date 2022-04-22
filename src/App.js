import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import CoinContext from "./contexts/coinContext";
import MyNavbar from "./Components/UI/Navbar";
import styles from "./Components/Styles/App.module.css";
import axios from "axios";
import AnimatedRoutes from "./AnimatedRoutes";
import { Helmet } from "react-helmet";

function App() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const [coins, setCoins] = useState();
  const [Chartdata, setChartData] = useState([]);
  const [Chartdata2, setChartData2] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  useEffect(() => {
    axios
      .get(
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
      )
      .then((res) => {
        setIsPending(false);
        setCoins(res.data);
      })
      .catch((error) => {
        setError(error);
        setIsPending(true);
      });
  }, []);

  // console.log(coins);

  return (
    <HashRouter>
      <Helmet>
        <meta charset="utf-8" />
        <title>Masoud Naji</title>
        <meta name="description" content="Masoud Naji , FrontEnd Developer" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      {/* <BrowserRouter> */}
      <CoinContext.Provider
        value={{
          coins: coins,
          error: error,
          isPending: isPending,
          Chartdata: Chartdata,
          setChartData: setChartData,
          Chartdata2: Chartdata2,
          setChartData2: setChartData2,
          selectedCoin: selectedCoin,
          setSelectedCoin: setSelectedCoin,
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <section>
            <MyNavbar />
          </section>
          <div className={styles.mainfram}>
            <AnimatedRoutes />
          </div>
        </div>
      </CoinContext.Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;

//npx json-server --watch Post/db.json --port 8000
//npm install react-confirm-alert --save
//npm install bootstrap react-bootstrap
//npm i lodash
//npm install --save react-chartjs-2 chart.js
//npm i react-router
//npm install -S react-router-dom
//npm i react-select
// npm install html-to-text
//npx json-server --watch Post/db.json --port 8000
//npm i react-id-generator
//npm install  react-table
