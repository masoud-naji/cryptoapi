import React, { useState, useEffect } from "react";
import "./inventory.css";
import * as XLSX from "xlsx";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import Card from "../UI/Card";
import InventoryCHart from "../../Chart/inventoryChart";
// import infostyle from "../../about.module.css";
import Svgimage from "../../Images/Business_SVG.svg";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [chartElemet, setChartElemet] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterdList, setfilterdList] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    // console.log(chartElemet.length);
    items.length > 0 && console.log(Object.keys(items[0]).length);

    items.length > 0 &&
      setCheckedState(Array(Object.keys(items[0]).length).fill(false));

    // console.log("new check lenght is " + checkedState.length);
  }, [items]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
      setfilterdList(d);
      setChartElemet([]);
    });
  };

  // chekbox add or remove item check if its more than 3 check this https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

  const checkHandler = (e, position, item) => {
    console.log(checkedState[position]);
    if (checkedState[position] == false) {
      if (checkedState.filter(Boolean).length < 3) {
        const updatedCheckedState = checkedState.map((chItem, index) => {
          return position === index ? !chItem : chItem;
        });
        setCheckedState(updatedCheckedState);
        setChartElemet([...chartElemet, item]);
      } else {
        alert(
          `No More than 3 Item for showing on chart 
          --------------------------------------
            1- X-axis
            2- Y-axis
            3- Items
          `
        );
      }
    } else {
      const updatedCheckedState = checkedState.map((chItem, index) => {
        return position === index ? !chItem : chItem;
      });
      setCheckedState(updatedCheckedState);
      setChartElemet(chartElemet.filter((val) => val !== item));
    }
  };

  const filterHandler = (e) => {
    const filterWord = e.target.value;

    if (filterWord !== "") {
      const newlist = items.filter((nlist) => {
        return Object.values(nlist)[0]
          .toLowerCase()
          .includes(filterWord.toLowerCase());
      });
      setfilterdList(newlist);
    } else {
      setfilterdList(items);
    }
    setFilterValue(filterWord);
  };

  console.log(checkedState);
  console.log(checkedState.length);
  console.log(checkedState.filter(Boolean).length);
  console.log(chartElemet);

  return (
    <div>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.HeroPlace}>
          {filterdList && filterdList.length > 0 ? (
            <div className={classes.chartdisplay}>
              <InventoryCHart data={filterdList} items={chartElemet} />
            </div>
          ) : (
            <div>
              <img
                src={Svgimage}
                style={{ width: "60%", marginLeft: "2rem" }}
              />
            </div>
          )}
          <div className={classes.infodisplay}>
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={cardStyle.container}
              className={classes.card}
            >
              {/* ////////////////////////////  Browose file //////////////////////////////// */}
              <div class={cardStyle.tableContainer}>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                  }}
                />
              </div>
              {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
              <div class={cardStyle.tableContainer}>
                {filterdList && (
                  <div>
                    <br />
                    {items.length > 0 && (
                      <small>
                        {filterdList.length} &nbsp;Records Show on chart
                      </small>
                    )}
                  </div>
                )}
              </div>
              {/* ////////////////////////////  filter //////////////////////////////// */}
              <div class={cardStyle.tableContainer}>
                <input
                  style={{ width: "fit-content" }}
                  type="text"
                  placeholder="search..."
                  value={filterValue}
                  onChange={(e) => filterHandler(e)}
                />
              </div>
              {/* ////////////////////////////  Chart List //////////////////////////////// */}
              <div class={cardStyle.tableContainer}>
                {chartElemet && (
                  <>                   
                    {
                      <ul>
                        <li>1-X-axis ➡️  {chartElemet[0]} </li>
                        <li>2-Y-axis ➡️  {chartElemet[1]} </li>
                        <li>3-Items  ➡️  {chartElemet[2]} </li>
                      </ul>
                    }
                  </>
                )}
              </div>
              {/* ////////////////////////////   //////////////////////////////// */}
            </div>
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
      </Card>

      <table class="table container">
        <thead>
          <tr>
            {items.length > 0 ? (
              Object.keys(items[0]).map((item, index) => (
                <th scope="col" key={index}>
                  {item}
                  &nbsp;
                  <input
                    type="checkbox"
                    value={item}
                    name={item}
                    checked={checkedState[index]}
                    id={`custom-checkbox-${index}`}
                    onChange={(e) => {
                      checkHandler(e, index, item);
                    }}
                  />
                </th>
              ))
            ) : (
              <th scope="col"></th>
            )}
          </tr>

          {/* <select>
            {items.map((item) => (
              <option>{Object.values(item)[1]}</option>
            ))}
          </select> */}
          {/* 
            {items.length > 0 ? <th scope="col">{Object.keys(items[0])[0]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[1]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[2]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[3]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[4]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[5]}</th>: <th scope="col"></th>}
            {items.length > 0  ? <th scope="col">{Object.keys(items[0])[6]}</th>: <th scope="col"></th>} */}
        </thead>
        <tbody>
          <rowsinfo />

          {items &&
            filterdList.map((d) => (
              <tr key={d.id}>
                {d &&
                  Object.values(d).map((item) => <th scope="col">{item}</th>)}
              </tr>
            ))}

          {/* {items.map((d) => (
            <tr key={d.id}>
              <th>{d[Object.keys(d)[0]]}</th>
              <td>{d[Object.keys(d)[1]]}</td>
              <td>{d[Object.keys(d)[2]]}</td>
              <td>{d[Object.keys(d)[3]]}</td>
              <td>{d[Object.keys(d)[4]]}</td>
              <td>{d[Object.keys(d)[5]]}</td>
              <td>{d[Object.keys(d)[6]]}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
