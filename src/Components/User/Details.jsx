import React, { useEffect, useState, useContext } from "react";
import style from "./UsersList.module.css";
import classes from "../UI/Card";
import Card from "../UI/Card";
import Pagination from "../UI/pagination";
import Paginate from "../CustomHooks/Paginate";
import Select from "react-select";
import axios from "axios";
import CoinContext from "../../contexts/coinContext";
import _uniqueId from "lodash/uniqueId";

import Chart from "../../Chart/Chart";

function Details(props) {
    const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState("bitcoin");
  const [name, setName] = useState("bitcoin");
  const [error, setError] = useState();
  const [isItPending, setIsItPending] = useState(false);
  ////////////////////////////////////////////////Pagination item maker///////////////////////////////////////////
  const [pageSize, setPageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedFilteredCoins = Paginate(foundCoins, currentPage, pageSize);
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];
  ////////////////////////////////////////////coins drop down maker//////////////////////////////////////////
  // const coinNameList = coinCTX.coins.map((coin) => {
  //   return { value: coin.name, label: coin.name };
  // });
  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
  const [startTime, setStartTime] = useState(
    (new Date(Date.now()).getTime() / 1000 - 86400).toFixed(0)
  );
  const [endTime, setEndTime] = useState(
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
    setStartTime(Math.round(event.value / 1000));
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleKeyDown = (e) => {
    const keyword = e.target.value;
    if (e.key === "Enter") {
      setName(keyword);
    }
  };

  useEffect(() => {
    const search = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItPending(false);
          setFoundCoins(res.data.prices);
          // console.log(res.data.prices);
          coinCTX.setChartData(res.data.prices);
        })
        .catch((error) => {
          setError(error);
          setIsItPending(false);
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

    const timmerId = setTimeout(() => {
      search();
    }, 500);

    return () => {
      clearTimeout(timmerId);
    };
  }, [name, startTime, endTime]);

  ////////////////////////////////////Pagination////////////////////////////////////////////////////////////
  const PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const optionSelectHandler = (event) => {
    setPageSize(event.value);
    setCurrentPage(1);
  };

  return (
    <Card className={classes.card}>
      <div className={style.tableContainer}>
        {foundCoins && (
          <h3 className={style.tableTitle}>
            Currently Table Contain {foundCoins.length} Records
          </h3>
        )}
        <div className={style.toptable}>
          {/* ///////////////////////////////////////////////Search////////////////////////////////////////////////// */}
          {/* <div className={style.toptable_left}>
            <input
              type="search"
              value={name}
              id={style.myInput}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for coin name.."
              list="mylist"
            />
            <datalist id="mylist" className={style.toptable_left}>
              {coinCTX.coins.map((coin) => (
                <option key={coin.id}>{coin.id}</option>
              ))}
            </datalist>
          </div> */}
          {/* ///////////////////////////////////////////////// coinselect DropDown//////////////////////////////// */}
          <div className={style.toptable_childL}>
            <select
              className={style.dropdown}
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
              {/* <MyListcoin /> */}
            </select>
          </div>
          {/* ////////////////////////////////////////////// Pagination DropDown//////////////////////////////////// */}
          <div className={style.toptable_childM}>
            <Select
              className={style.dropdown}
              options={paginationOptions}
              onChange={optionSelectHandler}
              placeholder="Records on page ..."
            />
          </div>
          {/* ///////////////////////////////////////// TimeControler DropDown////////////////////////////////////////// */}
          <div className={style.toptable_childM}>
            <Select
              className={style.dropdown}
              options={timeController}
              onChange={setStarthandler}
              placeholder="Select Duration ..."
            />
          </div>

          {/* ////////////////////////////////////////////////Pagination////////////////////////////////////////////////// */}
          <div className={style.toptable_childR}>
            <Pagination
              itemsCount={foundCoins.length}
              pageSize={pageSize}
              onPageChange={PageChangeHandler}
              currentPage={currentPage}
              placeholder={<div>Type to search</div>}
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}
        <Card className={classes.input}>
          {foundCoins && foundCoins.length > 0 ? (
            <Chart data={foundCoins} />
          ) : (
            <h2>{error}</h2>
          )}
        </Card>
        <hr />

        {/* ///////////////////////////////////////table/////////////////////////////// */}
        <form>
          <table className={style.userTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!foundCoins && foundCoins.length === 0 ? (
                <h3>No results found!</h3>
              ) : (
                paginatedFilteredCoins
                  .filter((coin) => coin !== null)
                  .map(
                    (coin) =>
                      coin !== null && (
                        <tr key={_uniqueId()}>
                          {/*_uniqueId() is  lodash */}
                          <td data-label="Name">
                            {new Date(coin[0]).toLocaleDateString("en-US")}
                          </td>
                          <td data-label="Name"> {coin[1]} $</td>
                        </tr>
                      )
                  )
              )}
            </tbody>
          </table>
        </form>
      </div>
    </Card>
  );
}

export default Details;
