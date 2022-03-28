import React, { useEffect, useState, useContext } from "react";
import style from "./UsersList.module.css";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import tablestyle from "./UsersList.module.css";
import Card from "../UI/Card";
import "./progressbar.css";
import axios from "axios";
import CoinContext from "../../contexts/coinContext";
import stock from "../../Images/stock.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "../UI/pagination";
import Paginate from "../CustomHooks/Paginate";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
// require("dotenv").config();
// require('dotenv').config({ path: require('find-config')('.env') })

function Details() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState();
  const [order, setOrder] = useState("ASC");
  const [name, setName] = useState("BTC");
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [Invest, setInvest] = useState("100");
  const [LowMiss, setLowMiss] = useState("0");
  const [HighMiss, setHighMiss] = useState("0");

  const yesterday = new Date();
  const pastDate = yesterday.getDate() - 1;
  yesterday.setDate(pastDate);

  /////////////////page and pagination system
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedFilteredCoins = Paginate(
    foundCoins ? foundCoins : "",
    currentPage,
    pageSize
  );
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];
  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const getToday = () => {
    const date = new Date();
    const futureDate = date.getDate();
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-US");
    return defaultValue;
  };

  const getYesterday = () => {
    const date = new Date();
    const pastDate = date.getDate() - 1;
    date.setDate(pastDate);
    const defaultValue = date.toLocaleDateString("en-US");
    return defaultValue;
  };

  const getNumberOfDays = (startDay, endDay) => {
    if (endDay === new Date()) {
      console.log("end", endDay);
      return;
    }
    if (startDay === undefined) {
      startDay = getToday();
    }
    if (endDay === undefined) {
      endDay = getYesterday();
    }
    const Date1 = new Date(startDay).getTime();
    const Date2 = new Date(endDay).getTime();
    const onDay = 1000 * 60 * 60 * 24;
    const diffreantTime = Math.round((Date1 - Date2) / onDay);
    return diffreantTime;
  };

  const Highest = foundCoins
    ? foundCoins.reduce(
        (max, coin) => (coin.high > max ? coin.high : max),
        foundCoins[0].high
      )
    : 0;
  const Lowest = foundCoins
    ? foundCoins.reduce(
        (min, coin) => (coin.low < min ? coin.low : min),
        foundCoins[0].low
      )
    : 0;
  const LowestPriceDate = foundCoins
    ? foundCoins.reduce(
        (min, coin) => (coin.Low < min ? coin.time : min),
        foundCoins[0].time
      )
    : "";

  const loWToHigh = (Invest, lowest, Highest) => {
    const number = Invest / lowest;
    const inHigh = number * Highest;
    return inHigh;
  };

  const priceInEndDay =
    foundCoins && foundCoins[foundCoins.length - 1].high - foundCoins[0].low;

  // foundCoins.find(pind=> pind.time =(new Date(endDay).getTime()/1000))
  // : 0;

  console.log(priceInEndDay);
  // console.log(new Date(endDay).getTime()/1000)
  // let date = foundCoins ? new Date(foundCoins[0].time * 1000) : new Date();
  // let checkDate =
  //   date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  // let checkEndSelect = endDay && endDay.toLocaleDateString("en-US");
  // console.log("checkDate", checkDate, `\n`, "checkEndSelect", checkEndSelect);

  // console.log(LowestPriceDate);

  // console.log(foundCoins);
  // console.log("foundCoins");
  // const relut = foundCoins.find((c) => c.low ==32990.72);
  // console.log(relut.time);

  const PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const optionSelectHandler = (event) => {
    setPageSize(event.value);
    setCurrentPage(1);
  };

  const onRowClick = (coinname) => {
    coinCTX.setSelectedCoin(coinname);
    navigate("/Details");
    // console.log(coinCTX.selectedCoin);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
      console.log(foundCoins);
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
      console.log(foundCoins);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily
    // marketchart
    const search = () =>
      axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=${getNumberOfDays(
            startDay,
            endDay
          )}&api_key={${process.env.REACT_APP_API_KEY}} `
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.data);
          setIsItLoading(false);
          setFoundCoins(res.data.Data.Data);
          coinCTX.setChartData(res.data.prices);
          // console.log(res.data.Data.Data)
        })
        .catch((error) => {
          setError(error);
          setIsItLoading(true);
          setFoundCoins([]);
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    search();
  }, [name, startDay, endDay]);

  if (isItLoading) {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (foundCoins && !isItLoading) {
    return (
      <Card className={classes.card}>
        <div className={style.tableContainer}>
          {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}

          <Card
            className={`${classes.input} ${classes.topchartdetail}`}
            style={{}}
          >
            {foundCoins ? (
              <div className={classes.HeroPlaceWif}>
                <div className={classes.infodisplay}>
                  <div
                    style={{ background: "rgb(37, 54, 106)" }}
                    className={classes.insidetitle}
                  >
                    <div className="infoWhatif">
                      {/* ///////////////////////////////////////////////// coinselect DropDown//////////////////////////////// */}
                      <h3 className={style.tableTitle}>
                        Select Your Crypto Currency
                      </h3>
                      <section>
                        <select
                          className={style.dropdownsmall}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Select Coin"
                          value={name}
                          // options={coinNameList}
                        >
                          {typeof coinCTX.coins !== "undefined" ? (
                            coinCTX.coins.map((coin) => (
                              <option key={coin.id} value={coin.symbol}>
                                {coin.symbol}
                              </option>
                            ))
                          ) : (
                            <option value="btc">btc</option>
                          )}
                        </select>
                      </section>
                      <h3 className={style.tableTitle}>Select Start Time</h3>
                      <section>
                        <DatePicker
                          className={style.dropdownsmall}
                          selected={endDay || yesterday}
                          minDate="2000-01-01"
                          maxDate={yesterday}
                          onChange={(date) => setEndDay(date)}
                          showYearDropdown
                          scrollableMonthYearDropdown
                        />
                      </section>
                      <h3 className={style.tableTitle}>Select End Time</h3>
                      <section>
                        <DatePicker
                          className={style.dropdownsmall}
                          selected={startDay || new Date()}
                          minDate="2000-01-01"
                          maxDate={new Date()}
                          onChange={(date) => {
                            setStartDay(date);
                          }}
                          showYearDropdown
                          scrollableMonthYearDropdown
                        />
                      </section>
                      <h3 className={style.tableTitle}>
                        Money you Wish to Invest at Start? $
                      </h3>
                      <section>
                        <input
                          type="number"
                          className={style.dropdownsmall}
                          onChange={(e) => setInvest(e.target.value)}
                          value={Invest}
                          placeholder="$ invest"
                          min={0}
                        />
                      </section>
                      <h3 className={style.tableTitle}>
                        Maybe You Missed Lower price by %
                      </h3>
                      <section>
                        <input
                          type="number"
                          className={style.dropdownsmall}
                          onChange={(e) => setLowMiss(e.target.value)}
                          value={LowMiss}
                          placeholder="$ invest"
                          min={0}
                          max={100}
                        />
                      </section>
                      <h3 className={style.tableTitle}>
                        Maybe You Missed High price by %
                      </h3>
                      <section>
                        <input
                          type="number"
                          className={style.dropdownsmall}
                          onChange={(e) => setHighMiss(e.target.value)}
                          value={HighMiss}
                          placeholder="$ invest"
                          min={0}
                          max={100}
                        />
                      </section>

                      {/* ///////////////////////////////////////// ////////////////////////////////////////// */}
                    </div>
                  </div>
                  <div className={classes.insidecontent}>
                    {foundCoins && (
                      <div>
                        {/* <h3 className={style.tableTitle}>
                          {getNumberOfDays(startDay, endDay)} Records Show on
                          chart
                        </h3> */}
                      </div>
                    )}

                    <div className={style.toptablestatus}></div>
                  </div>
                </div>
                <div
                  className={classes.chartdisplayWif}
                  style={{
                    color: "white",
                    textAlign: "justify",
                    padding: "0rem 1rem 2rem 1rem",
                  }}
                >
                  <br /> Some Fun Facts around the low and high regardless of
                  priority.
                  <br />
                  and you can guess usually there are some delays for finding
                  those points. So, give it some tolerance in percent then check
                  each of the days.
                  <br />- Highest $ {Highest.toLocaleString("en-US")}
                  <br />- Lowest $ {Lowest.toLocaleString("en-US")}
                  <br />
                  - Price difference between Start & today
                  <br />$ {priceInEndDay.toLocaleString("en-US")}
                  <br />- Price difference between Lowest & Highest with ${" "}
                  {Invest.toLocaleString("en-US")} at start makes: &nbsp;${" "}
                  {loWToHigh(Invest, Lowest, Highest).toLocaleString("en-US")}
                  <br />
                </div>
              </div>
            ) : (
              <h2>{error}</h2>
            )}
          </Card>

          <hr />

          {/* ///////////////////////////////////////table/////////////////////////////// */}
          <Card
            className={`${classes.input} ${classes.topchartdetail}`}
            style={{ minHeight: "22rem" }}
          >
            <hr />
            <div className={cardStyle.infotext}>
              <div className={cardStyle.tableContainer}>
                <Card className={cardStyle.mycard}>
                  <img src={stock} alt="stock" />
                  {/* className="tg" */}
                  {/* /////////////DropDown/////////////////// */}

                  <div className="tablecontrol">
                    <input
                      type="text"
                      className={style.dropdown}
                      style={{
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "600",
                        color: "#000",
                        border: "none",
                      }}
                      onChange={() => console.log()}
                      value={`${
                        getNumberOfDays(startDay, endDay) + 1
                      }  Records `}
                    />

                    <Select
                      className={style.dropdown}
                      options={paginationOptions}
                      onChange={optionSelectHandler}
                      placeholder="Select Duration ..."
                      defaultValue={{ value: 10, label: "10" }}
                    />
                    <Pagination
                      itemsCount={foundCoins.length}
                      pageSize={pageSize}
                      onPageChange={PageChangeHandler}
                      currentPage={currentPage}
                    />
                  </div>

                  <table
                    className={`${tablestyle.container} ${tablestyle.userTable}`}
                  >
                    <thead>
                      <tr>
                        <th
                          onClick={() => sorting("time")}
                          className="tg-yuap"
                          style={{ overflowWrap: "break-word", width: "10%" }}
                        >
                          Time
                        </th>
                        <th
                          onClick={() => sorting("low")}
                          className="tg-0pky"
                          style={{ overflowWrap: "break-word", width: "20%" }}
                        >
                          Low $
                        </th>
                        <th
                          onClick={() => sorting("high")}
                          className="tg-0pky"
                          style={{ overflowWrap: "break-word", width: "20%" }}
                        >
                          Hight $
                        </th>
                        <th
                          className="tg-0pky"
                          style={{ overflowWrap: "break-word", width: "10%" }}
                        >
                          Tolerance %
                        </th>
                        <th
                          className="tg-0pky"
                          style={{ overflowWrap: "break-word", width: "15%" }}
                        >
                          Low with {LowMiss}% Missed
                        </th>
                        <th
                          className="tg-0pky"
                          style={{ overflowWrap: "break-word", width: "15%" }}
                        >
                          High with {HighMiss}% Missed
                        </th>
                        <th
                          className="tg-0lax"
                          style={{ overflowWrap: "break-word", width: "15%" }}
                        >
                          Gain $
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {foundCoins !== "undefined" &&
                        // foundCoins.Data.map((coin) => (
                        paginatedFilteredCoins
                          .filter((coin) => coin !== null)
                          .map((coin) => (
                            <tr key={coin.time}>
                              {/* Time */}
                              <td className="tg-c3ow">
                                {new Date(coin.time * 1000).toLocaleDateString(
                                  "en-US"
                                )}
                              </td>
                              {/* Low */}
                              <td
                                className="tg-0pky"
                                style={{
                                  color:
                                    coin.low.toLocaleString("en-US") ==
                                    Lowest.toLocaleString("en-US")
                                      ? "red"
                                      : "black",
                                }}
                              >
                                $ {coin.low.toLocaleString("en-US")}
                              </td>
                              {/* High */}
                              <td
                                className="tg-0pky"
                                style={{
                                  color:
                                    coin.high.toLocaleString("en-US") ==
                                    Highest.toLocaleString("en-US")
                                      ? "green"
                                      : "black",
                                }}
                              >
                                $ {coin.high.toLocaleString("en-US")}
                              </td>
                              {/* Tolerance */}
                              <td className="tg-0pky">
                                {(
                                  ((coin.high - coin.low) /
                                    ((coin.high + coin.low) / 2)) *
                                  100
                                ).toLocaleString("en-US")}
                              </td>
                              {/* Low With 0% Missed */}
                              <td className="tg-0pky">
                                {(
                                  Invest /
                                  (coin.low + (coin.low * LowMiss) / 100)
                                ).toLocaleString("en-US")}
                              </td>
                              {/* High With 0% Missed */}
                              <td className="tg-0pky">
                                $
                                {(
                                  (Invest /
                                    (coin.low + (coin.low * LowMiss) / 100)) *
                                  (coin.high - (coin.high * HighMiss) / 100)
                                ).toLocaleString("en-US")}
                              </td>
                              {/* gain */}
                              <td
                                className="tg-0lax"
                                style={{
                                  color:
                                    (
                                      (Invest /
                                        (coin.low +
                                          (coin.low * LowMiss) / 100)) *
                                        (coin.high -
                                          (coin.high * HighMiss) / 100) -
                                      Invest
                                    ).toLocaleString("en-US") > 0
                                      ? "green"
                                      : "red",
                                }}
                              >
                                {(
                                  (Invest /
                                    (coin.low + (coin.low * LowMiss) / 100)) *
                                    (coin.high - (coin.high * HighMiss) / 100) -
                                  Invest
                                ).toLocaleString("en-US")}
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </Card>
              </div>

              <hr />
            </div>
          </Card>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Not Loading
        </div>
      </Card>
    );
  }
}

export default Details;

// npm install html-to-text
