import React, { useEffect, useState, useContext } from "react";
import style from "./UsersList.module.css";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import progStyle from "./progressbar.css";
import Card from "../UI/Card";
import Select from "react-select";
import axios from "axios";
import CoinContext from "../../contexts/coinContext";
import _uniqueId from "lodash/uniqueId";
import Readmore from "../UI/ReadMore";
import Chart from "../../Chart/News";
import parse from "html-react-parser";
import stock from "../../Images/stock.png";
import stock2 from "../../Images/stock2.png";
import stock3 from "../../Images/stock3.png";
import stock4 from "../../Images/stock4.png";

function Details() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState(coinCTX.selectedCoin);
  const [name, setName] = useState("cardano");
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

    //////////////////////////////////////////
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

  // console.log(Object.keys(coinAllInfo).length);
  // console.log(foundCoins);
  // console.log(foundCoins.length);
  // console.log(coinAllInfo.status_updates[0].description);

  // const Coindescription = () => {
  //   // if (coinAllInfo.status_updates) {
  //   coinAllInfo.status_updates.map((descript) => {
  //      <p>descript[descript.index]</p>;
  //     //   });
  //     // } else {
  //     //   return <p>Not Any StatusUpdates</p>
  //   }

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
    console.log(coinAllInfo.links.blockchain_site);
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
                    {foundCoins && (
                      <h3 className={style.tableTitle}>
                        Found {foundCoins.length} Records
                      </h3>
                    )}

                    {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
                  </div>

                  {coinAllInfo.status_updates.length > 0 &&
                    coinAllInfo.status_updates.map((descript, index) => (
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
                    ))}
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
              <img
                src={coinAllInfo.image.small ? coinAllInfo.image.small : "#"}
              />
              <details style={{ color: "#CCC" }}>
                <summary className={cardStyle.infotext}>
                  {coinAllInfo.links.blockchain_site
                    ? coinAllInfo.links.blockchain_site.filter(
                        (sites) => sites !== ""
                      ).length
                    : null}{" "}
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
                    homepage
                    <div className="emptycontainer">
                      {coinAllInfo.links.homepage[0]
                        ? coinAllInfo.links.homepage[0]
                        : ""}
                    </div>
                    {/* {coinAllInfo.links.homepage[1] ?  <div className="emptycontainer">
                      {coinAllInfo.links.homepage[1]}
                    </div> : ""}
                    {coinAllInfo.links.homepage[2] ?  <div className="emptycontainer">
                      {coinAllInfo.links.homepage[2]}
                    </div> : ""} */}
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
              {/* <Readmore maxCharecterCount={100}>
                {coinAllInfo.description.en
                  ? coinAllInfo.description.en.replace(/<[^>]+>/g, "")
                  : ""}
                
              </Readmore> */}

              <details style={{ color: "#CCC" }}>
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
