import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../Styles/inventory.css";
import * as XLSX from "xlsx";
import { MockDocument } from "./MockDocument";
import MOCK_DOCUMENT from "../CustomHooks/MOCK_DOCUMENT.json";
import classes from "../UI/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import InventoryCHart from "../Chart/inventoryChart";
import Svgimage from "../../Images/Business_SVG.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TopPage from "../../Images/TopPage.png";
import { useDropzone } from "react-dropzone";
import ReactTooltip from "react-tooltip";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Helmet } from "react-helmet";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DocumentView = () => {
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterdList, setfilterdList] = useState(MockDocument);
  const [chartElemet, setChartElemet] = useState(["name", "age", "money"]);
  const [checkedState, setCheckedState] = useState([]);
  const [FileDetail, setFileDetail] = useState(false);
  const [TableDetail, setTableDetail] = useState(false);
  const [errorData, setErrorData] = useState("");

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  useEffect(() => {
    items.length > 0 &&
      setCheckedState(Array(Object.keys(items[0]).length).fill(false));
  }, [items]);

  /////////////////////////drag and drop file upload/////////////////////////////

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    readExcel(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept:
        ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  ///////////////Read file and convert to json format/////////////////////////////
  const readExcel = (file) => {
    if (!file || file.length === 0 || file === undefined) {
      return;
    }
    // console.log(typeof file);
    var resultFile = {};
    const name = file.name;
    const lastDot = name.lastIndexOf(".");
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
    // console.log(`this is the ${ext}`);
    // console.dir(fileName);
    // Reading JSON from input
    if (ext === "json") {
      const fileReader = new FileReader();
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        const result = JSON.parse(e.target.result);
        if (!result.length) {
          setErrorData("**Not valid JSON file!**");
          setfilterdList([]);
          return;
        }
        try {
          console.log(typeof result[0]);
          setChartElemet([]);
          setErrorData(null);
          setItems(result);
          console.log(result);
          setfilterdList(result);
        } catch (e) {
          setErrorData("**Not valid JSON file!**");
        }
      };
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
      console.log(filterdList);
      promise.then((d) => {
        setItems(d);
        console.log(d);
        setfilterdList(d);
        setChartElemet([]);
      });
    }
  };

  // chekbox add or remove item check if its more than 3 check this https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

  const checkHandler = (e, position, item) => {
    // console.log(checkedState[position]);
    if (checkedState[position] === false) {
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
      alert("Something went wrong with Search " + error);
    }
  };
  // console.log(filterdList);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <title>Documents Viewer</title>
        <meta name="description" content="Documents Viewers" />
      </Helmet>

      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>

      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.HeroPlace}>
          {filterdList && filterdList.length > 0 ? (
            <div className={classes.chartdisplay}>
              <InventoryCHart data={filterdList} items={chartElemet} />
            </div>
          ) : (
            <div>
              <h1 className={tablestyle.title}>Document Viewer</h1>
              <img
                alt="stock"
                src={Svgimage}
                style={{ width: "40%", marginLeft: "2rem" }}
              />
            </div>
          )}
          <div className={classes.infodisplay}>
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
            >
              {/* ////////////////////////////  Browose resultFile //////////////////////////////// */}

              <div className="container">
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p style={{ wordBreak: "break-word" }}>
                    Drag 'n' drop some files here, or click to select files
                  </p>
                  <p style={{ wordBreak: "break-word" }}>
                    .xlsx,.xlsm,.xlsb,.xls,xlw,.xlr,.csv,.json,doc,.docx,.xml
                  </p>
                </div>
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
                  className={tablestyle.dropdownsmall}
                  type="text"
                  placeholder="search..."
                  value={filterValue}
                  onChange={(e) => filterHandler(e)}
                />

                {/* ////////////////////////////  Chart List //////////////////////////////// */}

                {chartElemet && (
                  <>
                    {
                      <ul style={{ display: "flex" }}>
                        <li
                          data-for="main"
                          data-tip="Item to show on chart <br/> it should be string to make sense "
                        >
                          1-Items ➡️ {chartElemet[0]}
                        </li>
                        <li
                          data-for="main"
                          data-tip="X-axis to show on chart <br/> it should be number to make sense"
                        >
                          2-X-axis ➡️ {chartElemet[1]}
                        </li>
                        <li
                          data-for="main"
                          data-tip="Y-axis to show on chart <br/> it should be number to make sense"
                        >
                          3-Y-axis ➡️ {chartElemet[2]}
                        </li>
                      </ul>
                    }
                  </>
                )}
              </div>
              {errorData && <div style={{ color: "red" }}>{errorData}</div>}
              {/* ////////////////////////////   //////////////////////////////// */}
            </div>
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
        <AnchorLink
          href="#File_View"
          offset="100"
          className="anchorBtn"
          onClick={() => {
            setFileDetail(true);
            setTableDetail(false);
          }}
        >
          File View
        </AnchorLink>
        &nbsp;
        <AnchorLink
          href="#Top_Page"
          offset="100"
          className="anchorBtn"
          onClick={() => {
            setFileDetail(false);
            setTableDetail(true);
          }}
        >
          Table View
        </AnchorLink>
      </Card>
      <section id="Top_Page"></section>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <details id="DetailTable" open={TableDetail}>
          <summary>Table Preview</summary>
          <table className={`${tablestyle.userTable}`}>
            <thead>
              <tr>
                {items.length > 0 ? (
                  Object.keys(items[0]).map((item, index) => (
                    <th scope="col" key={index} className="tg-yuap">
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
                filterdList &&
                filterdList.filter(Boolean).map((d) => (
                  <tr key={d.id}>
                    {d &&
                      Object.entries(d).map((item) => (
                        <td data-label={item[0]} scope="col" key={d.index}>
                          {item[1]}
                        </td>
                      ))}
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
        </details>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <section id="File_View"></section>
        <details open={FileDetail}>
          <summary> File preview {FileDetail}</summary>
          {filterdList && (
            <textarea
              style={{
                width: "100%",
                height: `${filterdList.length + 1}rem`,
                borderRadius: "10px",
              }}
              defaultValue={filterdList.map(
                (e) => JSON.stringify(e),
                undefined,
                2
              )}
            />
          )}
        </details>
      </Card>
      <AnchorLink href="#Top_Page" offset="150" className="Top_key">
        Top
        <br />
        <img src={TopPage} alt="TopPage" />
      </AnchorLink>
      <ReactTooltip
        id="main"
        multiline={true}
        place="bottom"
        type="info"
        effect="float"
        className="customeTheme"
        delayHide={800}
      />
    </motion.div>
  );
};

export default DocumentView;
