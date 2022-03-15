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
import stock2 from "../../Images/stock2.png";
import stock3 from "../../Images/stock3.png";
import stock4 from "../../Images/stock4.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// require("dotenv").config();
// require('dotenv').config({ path: require('find-config')('.env') })

function Details() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState();
  const [name, setName] = useState(
    "BTC"
    // coinCTX.selectedCoin ? coinCTX.selectedCoin : "BTC"
  );
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [Invest, setInvest] = useState("100");
  const [LowMiss, setLowMiss] = useState("0");
  const [HighMiss, setHighMiss] = useState("0");
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
          setFoundCoins(res.data.Data);
          coinCTX.setChartData(res.data.prices);
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

  const Progress = ({ done }) => (
    <div className="MyProgress">
      <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
        {done}%
      </div>
    </div>
  );

  // console.log(foundCoins.Data !== undefined && foundCoins.Data[1].time);
  // const timenewtest = foundCoins.Data !== undefined && foundCoins.Data[1].time;
  // console.log(new Date(timenewtest * 1000).toLocaleDateString("en-US"));

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
                          selected={endDay || new Date()}
                          minDate="2000-01-01"
                          maxDate={new Date()}
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
                        <h3 className={style.tableTitle}>
                          {getNumberOfDays(startDay, endDay)} Records Show on
                          chart
                        </h3>
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
                    padding: "2rem 1rem 2rem 1rem",
                  }}
                >
                  {/* <div className={classes.chartdisplay}> */}
                  Imagine we have a time machine!
                  <br /> This is the difference between low and high regardless
                  of priority and you can guess usually there are some delays
                  for finding those points. So, give it some tolerance in
                  percent then check each of the days. It does not mean you
                  could always sell or buy, but it is good to know by missing a
                  small percent of high or low you could lose your money or make
                  some! It is just a simple sample of the opportunities that we
                  missed every day!
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
              <span title="Click to open Google Trend"></span>
              {/* <details style={{ color: "#CCC" }}>
                <summary className={cardStyle.infotext}> */}
                  - Table With {getNumberOfDays(startDay, endDay)}
                  &nbsp;Record/s
                {/* </summary> */}
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock} alt="stock" />
                    {/* className="tg" */}
                    <table
                      className={`{table container} ${tablestyle.userTable}`}
                    >
                      <thead>
                        <tr>
                          <th
                            className="tg-yuap"
                            style={{ overflowWrap: "break-word", width: "10%" }}
                          >
                            Time
                          </th>
                          <th
                            className="tg-0pky"
                            style={{ overflowWrap: "break-word", width: "20%" }}
                          >
                            Low $
                          </th>
                          <th
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
                        {foundCoins.Data !== "undefined" &&
                          foundCoins.Data.map((coin) => (
                            <tr key={coin.time}>
                                {/* Time */}
                              <td className="tg-c3ow">
                                {new Date(coin.time * 1000).toLocaleDateString(
                                  "en-US"
                                )}
                              </td>
                              {/* Low */}
                              <td className="tg-0pky">
                              $  {coin.low.toLocaleString("en-US")}
                              </td>
                              {/* High */}
                              <td className="tg-0pky">
                             $   {coin.high.toLocaleString("en-US")}
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
              {/* </details> */}
              <hr />
              {/* ////////////////////////////////////////first line of detail///////////////////////////////////////// */}
              {/* <div className={cardStyle.container}>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock} alt="stock" />
                    community score developer score liquidity score
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock2} />
                    genesis date
                    <div className="emptycontainer"></div>
                    hashing algorithm
                    <div className="emptycontainer"></div>
                    block time in minutes
                    <div className="emptycontainer"></div>
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock3} alt="stock" />
                    <div className="emptycontainer"></div>
                    official forum
                    <div className="emptycontainer"></div>
                    twitter
                    <div className="emptycontainer"></div>
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock4} alt="stock" />
                    public interest stats
                    <div className="emptycontainer"></div>
                    sentiment votes down
                    <Progress />
                    sentiment votes up
                    <Progress />
                  </Card>
                </div>
              </div>

              <details style={{ color: "rgb(57,133,197)" }}>
                <summary className={cardStyle.infotext}></summary>
              </details> */}
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
