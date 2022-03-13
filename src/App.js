import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter ,BrowserRouter } from "react-router-dom";
import MyNavbar from "./Components/UI/Navbar";
import Home from "./Home";
import Details from "./Components/SubPages/Details";
import Compare from "./Components/SubPages/Compare";
import Whatif from "./Components/SubPages/Whatif";
import Coins from "./Components/SubPages/Coins";
import Twittespl from "./Components/SubPages/Twittespl";
import Inventory from "./Components/SubPages/Inventory";
import Regextest from "./Components/SubPages/Regextest";
import CompareText from "./Components/SubPages/CompareText";
import NotFound from "./Components/UI/NotFound";
import CoinContext from "./contexts/coinContext";
import styles from "./App.module.css";
import axios from "axios";
import Chart from "./Chart/News";
import About from "./About";


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
    // <HashRouter>
       <BrowserRouter>
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
            {/* <section className={classes.Navbar}>*/}
            {/* <section> */}
            <MyNavbar />
          </section>
          <div className={styles.mainfram}>
            {/* // <Home coins={coins} error={error} isPending={isPending} /> */}
            <Routes>
          
              <Route path="/" element={<Home />}></Route>
              <Route path="/Details" element={<Details />}></Route>
              <Route path="/Compare" element={<Compare />}></Route>
              <Route path="/Whatif" element={<Whatif />}></Route>
              <Route path="/Coins" element={<Coins />}></Route>
              <Route path="/News" element={<Chart />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Twittespl" element={<Twittespl />}></Route>
              <Route path="/Inventory" element={<Inventory />}></Route>
              <Route path="/Regextest" element={<Regextest />}></Route>
              <Route path="/CompareText" element={<CompareText />}></Route>
              <Route path="/needs/*" element={<NotFound />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
        </CoinContext.Provider>
        </BrowserRouter>
    //</HashRouter> 
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
