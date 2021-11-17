import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/User/Details";
import Navbar from "./Components/UI/Navbar";
import NotFound from "./Components/UI/NotFound";
import Home from "./Home";
import styles from "./App.module.css";
import CoinContext from "./contexts/coinContext";
import axios from "axios";
import Chart from "./Chart/Chart";


function App() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const [coins, setCoins] = useState();
  const [Chartdata, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
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

  return (
    <BrowserRouter>
      <CoinContext.Provider
        value={{
          coins: coins,
          error: error,
          isPending: isPending,
          Chartdata: Chartdata,
          setChartData: setChartData,
        }}
      >
        <div>
          <section className={styles.myNavbar}>
            <Navbar />
          </section>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                  // <Home coins={coins} error={error} isPending={isPending} />
                }
              ></Route>
              <Route path="/Details" element={<Details />}></Route>
              <Route path="/Chart" element={<Chart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </CoinContext.Provider>
    </BrowserRouter>
  );
}

export default App;

//npx json-server --watch Post/db.json --port 8000
//npm i react-id-generator
