import React, { useState, useContext, useEffect } from "react";
import style from "../../Styles/UsersList.module.css";
import classes from "../../Styles/Card.module.css";
import Card from "../../UI/Card";
import Pagination from "../../UI/pagination";
import Paginate from "../../CustomHooks/Paginate";
import CoinContext from "../../../contexts/coinContext";
import PieChart from "../../Chart/pieChart";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { set } from "lodash";
// import "../Styles/progressbar.css";
// import { reduce } from "lodash";
// import cardStyle from "./infoCard.module.css";
// import GoogleTrends from "../GoogleTrend/GoogleTrends";
// import { LineChart, Line } from "recharts";
// import BasicTable from "./Table/BasicTable";




function Coins() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState(coinCTX.coins);
  const [order, setOrder] = useState("ASC");
  const [isItLoading, setIsItLoading] = useState(true);
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [favShow, setFavShow] = useState(false);
  const paginatedFilteredCoins = Paginate(foundCoins, currentPage, pageSize);
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  useEffect(() => {
    coinCTX ? setIsItLoading((prev) => false) : setIsItLoading((prev) => false);
  }, [coinCTX]);

  //////////////////////////////////////////// search by filter//////////////////////////////////////////////////
  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const results = coinCTX.coins
        .filter((coin) => coin !== null)
        .filter((coin) => {
          return (
            coin.id.startsWith(keyword.toLowerCase()) ||
            coin.symbol.startsWith(keyword.toLowerCase())
          );
        });
      setFoundCoins(results);
      setCurrentPage(1);
    } else {
      setFoundCoins(coinCTX.coins);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };
  ////////////////////////////////////  Sorting ////////////////////////////////////////////////////////////
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };
  //////////////////////////////sort onfav///////////////////////////////////////////////////////////////
  const sortOnFav = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };

  ////////////////////////////////////Pagination////////////////////////////////////////////////////////////
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
  };

  // ///////////////////////////////Tops gainer and loser Finder////////////////
  const TopGainer = coinCTX.coins
    ? coinCTX.coins.reduce(
        (max, coin) =>
          coin.price_change_percentage_24h > max
            ? coin.price_change_percentage_24h
            : max,
        coinCTX.coins[0].price_change_percentage_24h
      )
    : 0;

  const TopGainerID = coinCTX.coins
    ? coinCTX.coins.filter(
        (coin) => coin.price_change_percentage_24h === TopGainer
      )[0].id
    : "No Gainer";

  const TopLoser = coinCTX.coins
    ? coinCTX.coins.reduce(
        (min, coin) =>
          coin.price_change_percentage_24h < min
            ? coin.price_change_percentage_24h
            : min,
        coinCTX.coins[0].price_change_percentage_24h
      )
    : 0;
  const TopLoserID = coinCTX.coins
    ? coinCTX.coins.filter(
        (coin) => coin.price_change_percentage_24h === TopLoser
      )[0].id
    : "No loser";
  // ///////////////////////////////Favorite////////////////
  const addFavoritehandler = (coin) => {
    coinCTX.setFavoritesCoin((prev) => [...prev, coin.id]);
  };

  const removeFavoritehandler = (FavoriteCoin) => {
    coinCTX.setFavoritesCoin((prev) =>
      prev.filter((coin) => coin !== FavoriteCoin.id)
    );
  };

  const itemIsFavorite = (coin) => {
    if (coinCTX.FavoritesCoin) {
      return coinCTX.FavoritesCoin.some((favorite) => favorite === coin.id);
    }
    return false;
  };

  const toggleFavorite = (e, coin) => {
    e.preventDefault();
    localStorage.removeItem("favorites");
    if (itemIsFavorite(coin)) {
      removeFavoritehandler(coin);
    } else {
      addFavoritehandler(coin);
    }
    localStorage.setItem(
      "favoriteCoins",
      JSON.stringify(coinCTX.FavoritesCoin)
    );
  };

  const FavCoinsList = () => {
    if (favShow) {
      const favelistcoin =
        coinCTX.coins &&
        coinCTX.coins.length > 0 &&
        coinCTX.coins.filter((coin) => coinCTX.FavoritesCoin.includes(coin.id));
      setFoundCoins(favelistcoin);
    } else {
      setFoundCoins(coinCTX.coins);
    }
    setFavShow((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////

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
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Crypto Currency</title>
          <meta
            name="description"
            content="Crypto Currency , FrontEnd Developer"
          />
        </Helmet>
        <Card className={classes.card}>
          <div className={style.tableContainer}>
            {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}
            <div>
              <Card className={`${classes.input} ${classes.topchart}`}>
                {foundCoins && foundCoins.length > 0 ? (
                  <PieChart />
                ) : (
                  <div className={style.toptable}>
                    <div>
                      <img
                        src="https://alternative.me/crypto/fear-and-greed-index.png"
                        alt="Latest Crypto Fear & Greed Index"
                        className={style.fearimg}
                      />
                    </div>
                    <div className={style.errorMessage}>
                      There is an Error with server or
                      <br />
                      No Coin Found With This Name
                    </div>
                  </div>
                )}
              </Card>
            </div>
            <hr />

            {/* ///////////////Search///////////////// */}
            {/* <div className={style.toptable}> */}
            <div className={style.toptable_child}>
              <input
                style={{ position: "relative" }}
                type="search"
                value={name}
                id={style.myInput}
                onChange={filter}
                onDoubleClick={() => setShowDetails(!showDetails)}
                placeholder="Search for coin names.."
                list={showDetails && "suggestions"}
              />

              <datalist id="suggestions" style={{ width: "100%" }}>
                <option value="bitcoin">btc</option>
                <option value="avalanche">AVAX</option>
                <option value="shiba">shib</option>
                <option value="Cardano">ada</option>
                <option value="crypto">cro</option>
                <option value="terra">luna</option>
                <option value="wrapped">wbtc</option>
                <option value="litecoin">ltc</option>
                <option value="binance">busd</option>
                <option value="matic">matic</option>
                <option value="chainlink">link</option>
                <option value="bitcoin">bch</option>
                <option value="algorand">algo</option>
                <option value="uniswap">uni</option>
                <option value="dai">dai</option>
                <option value="axie">axs</option>
                <option value="stellar">xlm</option>
                <option value="elrond">egld</option>
                <option value="cosmos">atom</option>
                <option value="vechain">vet</option>
                <option value="terrausd">ust</option>
                <option value="internet">icp</option>
                <option value="filecoin">fil</option>
                <option value="compound">ceth</option>
                <option value="ftx">ftt</option>
                <option value="tron">trx</option>
                <option value="theta">theta</option>
                <option value="the">sand</option>
                <option value="decentraland">mana</option>
                <option value="okb">okb</option>
                <option value="ethereum">etc</option>
                <option value="staked">steth</option>
                <option value="hedera">hbar</option>
                <option value="gala">gala</option>
                <option value="fantom">ftm</option>
                <option value="near">near</option>
                <option value="cdai">cdai</option>
                <option value="the">grt</option>
                <option value="helium">hnt</option>
                <option value="tezos">xtz</option>
                <option value="monero">xmr</option>
                <option value="compound">cusdc</option>
                <option value="iota">miota</option>
                <option value="radix">xrd</option>
                <option value="eos">eos</option>
                <option value="enjincoin">enj</option>
                <option value="flow">flow</option>
                <option value="olympus">ohm</option>
                <option value="loopring">lrc</option>
                <option value="klay">klay</option>
                <option value="magic">mim</option>
                <option value="thorchain">rune</option>
                <option value="pancakeswap">cake</option>
                <option value="aave">aave</option>
                <option value="zcash">zec</option>
                <option value="leo">leo</option>
                <option value="harmony">one</option>
                <option value="ecash">xec</option>
                <option value="kusama">ksm</option>
                <option value="amp">amp</option>
                <option value="maker">mkr</option>
                <option value="arweave">ar</option>
                <option value="kadena">kda</option>
                <option value="bitcoin">bsv</option>
                <option value="quant">qnt</option>
                <option value="neo">neo</option>
                <option value="chiliz">chz</option>
                <option value="bitcoin">bcha</option>
                <option value="holotoken">hot</option>
                <option value="huobi">hbtc</option>
                <option value="basic">bat</option>
                <option value="bittorrent">btt</option>
                <option value="curve">crv</option>
                <option value="blockstack">stx</option>
                <option value="waves">waves</option>
                <option value="dash">dash</option>
                <option value="theta">tfuel</option>
                <option value="kucoin">kcs</option>
                <option value="safemoon">safemoon</option>
                <option value="wonderland">time</option>
                <option value="celsius">cel</option>
                <option value="celo">celo</option>
                <option value="compound">comp</option>
                <option value="immutable">imx</option>
                <option value="iotex">iotx</option>
                <option value="e">exrd</option>
                <option value="link">ln</option>
                <option value="qtum">qtum</option>
                <option value="huobi">ht</option>
                <option value="nem">xem</option>
                <option value="havven">snx</option>
                <option value="mina">mina</option>
              </datalist>

              <Select
                className={style.dropdown}
                options={paginationOptions}
                onChange={optionSelectHandler}
                placeholder="Select Duration ..."
                defaultValue={{ value: 10, label: "10" }}
              />

              {/* ///////////////Pagination///////////////// */}
              <div className={style.toptable_childR}>
                <Pagination
                  itemsCount={foundCoins ? foundCoins.length : 0}
                  pageSize={pageSize}
                  onPageChange={PageChangeHandler}
                  currentPage={currentPage}
                />
              </div>
              <section
                type="text"
                className={`${style.dropdown} ${style.infobox}`}
              >
                TopGainer | {TopGainerID} {parseFloat(TopGainer).toFixed(2)} %
              </section>
              <section
                type="text"
                className={`${style.dropdown} ${style.infobox}`}
              >
                TopLoser | {TopLoserID} {parseFloat(TopLoser).toFixed(2)} %
              </section>
            </div>

            <form>
              <table className={style.userTable}>
                <thead>
                  <tr>
                    <th>image</th>
                    <th onClick={FavCoinsList}>Fav</th>
                    <th onClick={() => sorting("market_cap_rank")}>Rank</th>
                    <th onClick={() => sorting("name")}>Name</th>
                    <th onClick={() => sorting("symbol")}>symbol</th>
                    <th onClick={() => sorting("current_price")}>
                      current price
                    </th>
                    <th onClick={() => sorting("total_volume")}>
                      total volume
                    </th>
                    <th onClick={() => sorting("low_24h")}>low 24h</th>
                    <th onClick={() => sorting("high_24h")}>high 24h</th>
                    <th onClick={() => sorting("price_change_percentage_24h")}>
                      price change24h
                    </th>
                    {/* <th>7Days Change</th> */}
                  </tr>
                </thead>
                <tbody>
                  {foundCoins && foundCoins.length > 0 ? (
                    paginatedFilteredCoins
                      .filter((coin) => coin !== null)
                      .map(
                        (coin) =>
                          coin !== null && (
                            <tr
                              key={coin.id}
                              // onClick={(e) => onRowClick(coin.id)}
                            >
                              <td onClick={(e) => onRowClick(coin.id)}>
                                <img
                                  src={coin.image}
                                  height="50rem"
                                  alt={coin.image}
                                ></img>
                              </td>
                              <td>
                                <button
                                  onClick={(e) => toggleFavorite(e, coin)}
                                  style={{
                                    backgroundColor: "#ff000000",
                                    border: "0",
                                    padding: "0",
                                  }}
                                >
                                  {itemIsFavorite(coin) ? "❤️" : "🤍"}
                                </button>
                              </td>
                              <td
                                data-label="market_cap_rank"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.market_cap_rank}
                              </td>
                              <td
                                data-label="Name"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {" "}
                                {coin.name}
                              </td>
                              <td
                                data-label="symbol"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {" "}
                                {coin.symbol}
                              </td>
                              <td
                                data-label="current_price"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.current_price}
                              </td>
                              <td
                                data-label="total_volume"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.total_volume}
                              </td>
                              <td
                                data-label="low_24h"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.low_24h} $
                              </td>
                              <td
                                data-label="high_24h"
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.high_24h} $
                              </td>
                              <td
                                data-label="price_change_percentage_24h"
                                style={{
                                  color:
                                    Math.sign(
                                      coin.price_change_percentage_24h
                                    ) < 0
                                      ? "red"
                                      : "#6adc6a",
                                }}
                                onClick={(e) => onRowClick(coin.id)}
                              >
                                {coin.price_change_percentage_24h}%
                              </td>
                              {/* <td> */}

                              {/* {render7DayChart} */}
                              {/* </td> */}
                            </tr>
                          )
                      )
                  ) : (
                    <tr>
                      <td style={{ textAlign: "center", padding: "auto" }}>
                        <h3>No results found!</h3>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* ////////////////////////////////////new table using usetable////////////////////////////////////////////////// */}
              {/* <BasicTable/> */}
              {/* 
////////////////////////////////////////////////////////////////////////////////////// */}
            </form>
          </div>
        </Card>
      </motion.div>
    );
  }
}
export default Coins;

