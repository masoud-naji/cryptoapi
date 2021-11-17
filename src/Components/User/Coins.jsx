import React, { useState, useContext } from "react";
import style from "./UsersList.module.css";
import classes from "../UI/Card";
import Card from "../UI/Card";
import Pagination from "../UI/pagination";
import Paginate from "../CustomHooks/Paginate";
import Select from "react-select";
import CoinContext from "../../contexts/coinContext";
import PieChart from "../../Chart/pieChart";

function Coins() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState(coinCTX.coins);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedFilteredCoins = Paginate(foundCoins, currentPage, pageSize);
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  console.log(coinCTX.coins);

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
    } else {
      setFoundCoins(coinCTX.coins);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

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
        {/* ///////////////Search///////////////// */}
        <div className={style.toptable}>
          <div className={style.toptable_childL}>
            <input
              type="search"
              value={name}
              id={style.myInput}
              onChange={filter}
              placeholder="Search for names.."
              />
          </div>
          {/* /////////////DropDown/////////////////// */}
          <div className={style.toptable_childM}>
            <Select
              className={style.dropdown}
              options={paginationOptions}
              onChange={optionSelectHandler}
              placeholder="Select Duration ..."

            />
          </div>

          {/* ///////////////Pagination///////////////// */}
          <div className={style.toptable_childR}>
            <Pagination
              itemsCount={foundCoins.length}
              pageSize={pageSize}
              onPageChange={PageChangeHandler}
              currentPage={currentPage}
              // placeholder={<div>Type to search</div>}
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}

        <div>
          {" "}
          <Card className={classes.input}>
            
            {foundCoins && foundCoins.length > 0 ? (
              <PieChart />
            ) : (
              <h2>{error}</h2>
            )}
          </Card>
        </div>
        <hr />

        <form>
          <table className={style.userTable}>
            <thead>
              <tr>
                <th>image</th>
                <th>Name</th>
                <th>symbol</th>
                <th>current_price</th>
                <th>total_volume</th>
                <th>market_cap_rank</th>
                <th>high_24h</th>
                <th>low_24h</th>
                <th>price_change24h</th>
              </tr>
            </thead>
            <tbody>
              {foundCoins && foundCoins.length > 0 ? (
                paginatedFilteredCoins
                  .filter((coin) => coin !== null)
                  .map(
                    (coin) =>
                      coin !== null && (
                        <tr key={coin.id}>
                          <td>
                            <img
                              src={coin.image}
                              height="50rem"
                              alt={coin.image}
                            ></img>
                          </td>
                          <td data-label="Name"> {coin.name}</td>
                          <td data-label="symbol"> {coin.symbol}</td>
                          <td data-label="current_price">
                            {" "}
                            {coin.current_price}
                          </td>
                          <td data-label="total_volume">
                            {" "}
                            {coin.total_volume}
                          </td>
                          <td data-label="market_cap_rank">
                            {" "}
                            {coin.market_cap_rank}
                          </td>
                          <td data-label="high_24h">{coin.high_24h}</td>
                          <td data-label="low_24h">{coin.low_24h} $</td>
                          <td data-label="price_change_percentage_24h">
                            {coin.price_change_percentage_24h}%
                          </td>
                        </tr>
                      )
                  )
              ) : (
                <h3>No results found!</h3>
              )}
            </tbody>
          </table>
        </form>
      </div>
    </Card>
  );
}

export default Coins;
