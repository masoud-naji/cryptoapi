import React, { useEffect, useState, useContext } from "react";
import style from "./UsersList.module.css";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import progStyle from "./progressbar.css";
import Card from "../UI/Card";
// import Select from "react-select";
import axios from "axios";
import CoinContext from "../../contexts/coinContext";
import _uniqueId from "lodash/uniqueId";
// import Readmore from "../UI/ReadMore";
import Chart from "../../Chart/News";
import parse from "html-react-parser";
import stock from "../../Images/stock.png";
import stock2 from "../../Images/stock2.png";
import stock3 from "../../Images/stock3.png";
import stock4 from "../../Images/stock4.png";

// import googleTrendShow from "../GoogleTrend/GoogleTrendShow";
// import Script from "react-load-script";

function Details() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState(coinCTX.selectedCoin);
  const [name, setName] = useState(
    coinCTX.selectedCoin ? coinCTX.selectedCoin : "cardano"
  );
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [isItLoadingCoinDetail, setIsItLoadingCoinDetail] = useState(true);
  const [coinAllInfo, setCoinAllInfo] = useState([]);

  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
  const [startTime, setStartTime] = useState(
    (new Date(Date.now()).getTime() / 1000 - 86400).toFixed(0)
  );
  const [endTime] = useState(
    (new Date(Date.now()).getTime() / 1000).toFixed(0)
  );
  const timeController = [
    // { value: new Date().setHours(new Date().getHours() - 1), label: "1H" },
    // { value: new Date().setHours(new Date().getHours() - 4), label: "4H" },
    { value: new Date().setDate(new Date().getDate() - 1), label: "1D" },
    { value: new Date().setDate(new Date().getDate() - 7), label: "7D" },
    { value: new Date().setMonth(new Date().getMonth() - 1), label: "1M" },
    { value: new Date().setMonth(new Date().getMonth() - 3), label: "3M" },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 1),
      label: "1Y",
    },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 5),
      label: "5Y",
    },
  ];
  const setStarthandler = (event) => {
    setStartTime(Math.round(event.target.value / 1000));
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////

  // const handleKeyDown = (e) => {
  //   const keyword = e.target.value;
  //   if (e.key === "Enter") {
  //     setName(keyword);
  //   }
  // };

  useEffect(() => {
    const getCoinNews = () =>
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${name}`)
        .then((res) => {
          if (res.status !== 200) return;
          setIsItLoadingCoinDetail(false);
          setCoinAllInfo(res.data);

          // console.log(res.data);
          // console.log(res.data.description.en);
        })
        .catch((error) => {
          setError(error);
          setIsItLoadingCoinDetail(true);
          setCoinAllInfo([]);
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
    //////////////////////////////////////////////////////////
    const search = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItLoading(false);
          setFoundCoins(res.data.prices);
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

    getCoinNews();
    search();
  }, [name, startTime, endTime]);

  const Progress = ({ done }) => (
    <div className="progress">
      <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
        {done}%
      </div>
    </div>
  );

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
  } else if (isItLoadingCoinDetail) {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (
    foundCoins.length > 0 &&
    !isItLoading &&
    !isItLoadingCoinDetail &&
    Object.keys(coinAllInfo).length > 0
  ) {
    // console.log(coinAllInfo.links);
    // console.log(coinCTX.selectedCoin);
    return (
      <Card className={classes.card}>
        <div className={style.tableContainer}>
          {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}

          <Card className={`${classes.input} ${classes.topchartdetail}`}>
            {foundCoins && foundCoins.length > 0 ? (
              <div className={classes.HeroPlace}>
                <div className={classes.chartdisplay}>
                  <Chart data={foundCoins} />
                </div>
                <div className={classes.infodisplay}>
                  <div className={style.toptable}>
                    {/* ///////////////////////////////////////////////// coinselect DropDown//////////////////////////////// */}
                    <div className={style.toptable_childL}>
                      <select
                        className={style.dropdownsmall}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Select Coin"
                        value={name}
                        // options={coinNameList}
                      >
                        {typeof coinCTX.coins !== "undefined" ? (
                          coinCTX.coins.map((coin) => (
                            <option key={coin.id} value={coin.id}>
                              {coin.symbol}
                            </option>
                          ))
                        ) : (
                          <option value="btc">btc</option>
                        )}
                      </select>
                    </div>

                    {/* ///////////////////////////////////////// TimeControler DropDown////////////////////////////////////////// */}
                    <div className={style.toptable_childM}>
                      {/* <Select
                        className={style.dropdown}
                        options={timeController}
                        onChange={setStarthandler}
                        placeholder="Select Duration ..."
                        defaultValue={{
                          value: new Date().setDate(new Date().getDate() - 1),
                          label: "1D",
                        }}
                      /> */}

                      <select
                        className={style.dropdownsmall}
                        onChange={setStarthandler}
                        placeholder="Select Duration ..."
                        value={name}
                      >
                        {typeof coinCTX.coins !== "undefined" ? (
                          timeController.map((timeC) => (
                            <option key={timeC.value} value={timeC.value}>
                              {timeC.label}
                            </option>
                          ))
                        ) : (
                          <option value="1D">1D</option>
                        )}
                      </select>
                    </div>
                  </div>
                  {foundCoins && (
                    <div>
                      <h3 className={style.tableTitle}>
                        {foundCoins.length} Records Show on chart
                      </h3>
                    </div>
                  )}

                  {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
                  <div className={style.toptablestatus}>
                    <ul>
                      {coinAllInfo.status_updates.length > 0 ? (
                        coinAllInfo.status_updates.map((descript) => (
                          <li
                            key={descript.created_at}
                            className={style.tableTitle}
                          >
                            <p className={cardStyle.infotext}>
                              Date: {descript.created_at} <br />
                              Category: {descript.category}
                            </p>
                            {descript.description}--
                          </li>
                        ))
                      ) : (
                        <div className={style.errorMessage}>
                          Any Event will show here if its available , we
                          coulden't found anything for this Coin
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <h2>{error}</h2>
            )}
          </Card>

          <hr />

          {/* ///////////////////////////////////////table/////////////////////////////// */}
          <Card className={`${classes.input} ${classes.topchartdetail}`}>
            <hr />
            <p className={cardStyle.infotext}>
              <span title="Click to open Google Trend">
                <a
                  href={`https://trends.google.com/trends/explore?q=${coinAllInfo.id}&geo=US`}
                  target="_blank"
                >
                  <img
                    src={
                      coinAllInfo.image.small ? coinAllInfo.image.small : "#"
                    }
                    alt="click to open Google Trend"
                  />
                </a>
              </span>
              <details style={{ color: "#CCC" }}>
                <summary className={cardStyle.infotext}>
                  {coinAllInfo.links.blockchain_site
                    ? coinAllInfo.links.blockchain_site.filter(
                        (sites) => sites !== ""
                      ).length
                    : null}
                  - Official WebSites
                </summary>
                {coinAllInfo.links.blockchain_site
                  ? coinAllInfo.links.blockchain_site
                      .filter((sites) => sites !== "")
                      .map((site) => (
                        <li className={cardStyle.infotext}>
                          <a
                            className={cardStyle.infotext}
                            href={site}
                            target="_blank"
                          >
                            {site}
                          </a>
                        </li>
                      ))
                  : null}
              </details>
              <hr />
              {/* ////////////////////////////////////////first line of detail///////////////////////////////////////// */}
              <div className={cardStyle.container}>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock} />
                    community score
                    <Progress
                      done={
                        coinAllInfo.community_score
                          ? coinAllInfo.community_score
                          : ""
                      }
                    />
                    developer score
                    <Progress
                      done={
                        coinAllInfo.developer_score
                          ? coinAllInfo.developer_score
                          : ""
                      }
                    />
                    liquidity score
                    <Progress
                      done={
                        coinAllInfo.liquidity_score
                          ? coinAllInfo.liquidity_score
                          : ""
                      }
                    />
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock2} />
                    genesis date
                    <div className="emptycontainer">
                      {coinAllInfo.genesis_date ? coinAllInfo.genesis_date : ""}
                    </div>
                    hashing algorithm
                    <div className="emptycontainer">
                      {coinAllInfo.hashing_algorithm
                        ? coinAllInfo.hashing_algorithm
                        : ""}
                    </div>
                    block time in minutes
                    <div className="emptycontainer">
                      {coinAllInfo.block_time_in_minutes
                        ? coinAllInfo.block_time_in_minutes
                        : ""}
                    </div>
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock3} />
                    categories - {coinAllInfo.categories.length}
                    <div className="emptycontainer">
                      {coinAllInfo.categories.length > 1 ? (
                        <ul>
                          {coinAllInfo.categories.map((coincategory, index) => (
                            <li key={index}> {coincategory}</li>
                          ))}
                        </ul>
                      ) : (
                        coinAllInfo.categories
                      )}
                    </div>
                    official forum
                    <div className="emptycontainer">
                      {coinAllInfo.links.official_forum_url
                        ? coinAllInfo.links.official_forum_url
                        : ""}
                    </div>
                    twitter
                    <div className="emptycontainer">
                      {coinAllInfo.links.twitter_screen_name
                        ? coinAllInfo.links.twitter_screen_name
                        : ""}
                    </div>
                  </Card>
                </div>
                <div className={cardStyle.tableContainer}>
                  <Card className={cardStyle.mycard}>
                    <img src={stock4} />
                    public interest stats
                    <div className="emptycontainer">
                      {coinAllInfo.public_interest_stats.alexa_rank
                        ? coinAllInfo.public_interest_stats.alexa_rank
                        : ""}
                    </div>
                    sentiment votes down
                    <Progress
                      done={
                        coinAllInfo.sentiment_votes_down_percentage
                          ? coinAllInfo.sentiment_votes_down_percentage
                          : ""
                      }
                    />
                    sentiment votes up
                    <Progress
                      done={
                        coinAllInfo.sentiment_votes_up_percentage
                          ? coinAllInfo.sentiment_votes_up_percentage
                          : ""
                      }
                    />
                  </Card>
                </div>
              </div>
              {/* ////////////////////////////////////////second line of detail///////////////////////////////////////// */}

              {/* {googleTrendShow(coinAllInfo.name)} */}
              {/* ///////////////////////////////iframe approuch/////////////// */}
              {/* <iframe
              id="trends-widget-1"
              title="trends-widget-1"
              src="https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22%5B'crypto%20currency'%5D%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%222009-01-01%202021-12-02%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=480&amp;eq=q%3D'bitcoin'%26date%3Dall%26geo%3D"
              width="100%"
              height="500rem"
              frameborder="0"
              scrolling="0"
              
            ></iframe> */}
              {/* ///////////////////////////////////////////////////////////GoogleTrend////////////////////////////////////////////////////////////////////// */}
              {/* <Readmore maxCharecterCount={100}>
                {coinAllInfo.description.en
                  ? coinAllInfo.description.en.replace(/<[^>]+>/g, "")
                  : ""}
                              </Readmore> */}

              <details style={{ color: "rgb(57,133,197)" }}>
                <summary className={cardStyle.infotext}>
                  More info {coinAllInfo.id}
                </summary>
                {parse(
                  `${
                    coinAllInfo.description.en ? coinAllInfo.description.en : ""
                  }`
                )}
              </details>
            </p>
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
