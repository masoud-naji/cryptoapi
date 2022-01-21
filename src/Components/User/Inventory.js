import React, { useState, useEffect } from "react";
import "./inventory.css";
import * as XLSX from "xlsx";
// import xlsx from "json-as-xlsx";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import tablestyle from './UsersList.module.css';
import Card from "../UI/Card";
import InventoryCHart from "../../Chart/inventoryChart";
import Svgimage from "../../Images/Business_SVG.svg";
// import MOCK_DATA from "./MOCK_DATA.json";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [chartElemet, setChartElemet] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterdList, setfilterdList] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [errorData, setErrorData] = useState("");
  useEffect(() => {
    items.length > 0 &&
      setCheckedState(Array(Object.keys(items[0]).length).fill(false));
  }, [items]);

  const readExcel = (file) => {
    if (!file || file.length === 0) {
      return;
    }
    // console.log(typeof file);
    var resultFile = {};
    // console.log(typeof resultFile);
    const name = file.name;
    const lastDot = name.lastIndexOf(".");
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
    // console.log(`this is the ${ext}`);
    // Reading JSON from input
    if (ext === "json") {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        try {
          setItems(JSON.parse(fileReader.result));
          setfilterdList(JSON.parse(fileReader.result));
          setChartElemet([]);
          console.log(JSON.parse(fileReader.result));
          setErrorData(null);
        } catch (e) {
          setErrorData("**Not valid JSON file!**");
        }
      };
      if (file !== undefined) fileReader.readAsText(file, "UTF-8");
    } else {
      resultFile = file; // Reading all Other formates as well
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(resultFile);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };
        fileReader.onerror = (errorData) => {
          reject(errorData);
        };
      });

      promise.then((d) => {
        setItems(d);
        setfilterdList(d);
        setChartElemet([]);
      });
    }
  };

  // chekbox add or remove item check if its more than 3 check this https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

  const checkHandler = (e, position, item) => {
    // console.log(checkedState[position]);
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
    console.log(items.length);
    try {
      if (filterWord !== "" && items.length > 0) {
        console.log(items);
        const newlist = items.filter((nlist) => {
          return Object.values(nlist)
            .toString()
            .toLowerCase()
            .includes(filterWord.toString().toLowerCase());
        });
        setfilterdList(newlist);
      } else {
        setfilterdList(items);
      }
      setFilterValue(filterWord);
    } catch (error) {
      alert("Something wnt wrong with Search " + error);
    }
  };

  // console.log(checkedState);
  // console.log(checkedState.length);
  // console.log(checkedState.filter(Boolean).length);
  // console.log(chartElemet);

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
                style={{ width: "40%", marginLeft: "2rem" }}
              />
            </div>
          )}
          <div className={classes.infodisplay}>
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={cardStyle.container}
              className={classes.card}
            >
              {/* ////////////////////////////  Browose resultFile //////////////////////////////// */}
              <div className={cardStyle.tableContainer}>
                <input
                  type="file"
                  accept=".xlsx,.xlsm,.xlsb,.xls,xlw,.xlr,.csv,.json,.JSON"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                  }}
                />
              </div>
              {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
              <div className={cardStyle.tableContainer}>
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
              <div className={cardStyle.tableContainer}>
                <input
                  style={{ width: "fit-content" }}
                  type="text"
                  placeholder="search..."
                  value={filterValue}
                  onChange={(e) => filterHandler(e)}
                />
              </div>
              {/* ////////////////////////////  Chart List //////////////////////////////// */}
              <div className={cardStyle.tableContainer}>
                {chartElemet && (
                  <>
                    {
                      <ul>
                        <li>1-Items ➡️ {chartElemet[0]} </li>
                        <li>2-X-axis ➡️ {chartElemet[1]} </li>
                        <li>3-Y-axis ➡️ {chartElemet[2]} </li>
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
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
      
        <table className={`{table container} ${tablestyle.userTable}`} >
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
          {/* <rowsinfo /> */}

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
        </Card>
    </div>
  );
};

export default Inventory;
