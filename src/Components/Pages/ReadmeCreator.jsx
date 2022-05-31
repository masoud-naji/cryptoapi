import React, { Fragment, useState, useRef } from "react";
import classes from "../Styles/Card.module.css";
import "../Styles/TableCreator.scss";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import cardStyle from "../Styles/infoCard.module.css";
import ReactTooltip from "react-tooltip";
import MarkdownPreview from "@uiw/react-markdown-preview";
import style from "../Styles/about.module.css";

import ReadmeBtns from "../ReadmeBtns/ReadmeBtns";

const OtherProjects = () => {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [table, setTable] = useState([]);
  const [content, setContent] = useState("");
  let lastNumber = columns;
  let lengthOfRows = rows.toString().length;
  let gapNeeded = 2 + lengthOfRows + lastNumber.toString().length;
  const themecolor = useRef("");

  const CreateTable = () => {
    let tableContent = [];
    for (let i = 0; i < rows; i++) {
      tableContent.push([]);
      for (let j = 0; j < columns; j++) {
        tableContent[i].push([i, j]);
      }
    }

    let tempTable = tableContent.map((rows, index) => {
      if (index === 0) {
        return (
          <tr className="table-placeholder__row" key={index}>
            {rows.map((column, index) => (
              <th className="table-placeholder__item" key={index}>
                Header {column}
              </th>
            ))}
          </tr>
        );
      } else {
        return (
          <tr className="table-placeholder__row" key={index}>
            {rows.map((column, index) => (
              <td className="table-placeholder__item" key={index}>
                Data {column}
              </td>
            ))}
          </tr>
        );
      }
    });
    setTable(tempTable);

    let readmeTable = tableContent.map((rows, index) => {
      if (index === 1) {
        return ("| :" + "-".repeat(gapNeeded) + ":").repeat(lastNumber) + "|\n";
      } else {
        return "|--" + rows.join("--|--") + "--|\n";
      }
    });
    let result = readmeTable.toString().replaceAll(",", "");
    // result = result.replace(/([^,]*),([^,]*),?/gi, "$1,$2\n");
    // result = result.substring(0, result.length - 1);
    setTableData(result);
  };
  console.log(themecolor.current);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <title>Other Projects</title>
        <meta name="description" content="Other small Projects" />
      </Helmet>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Readme Table Creator</h1>
          <main class="generator">
            <section class="controls">
              <label>
                Rows :
                <input
                  className="rows"
                  type="number"
                  min="0"
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                />
              </label>
              <label>
                Columns :
                <input
                  className="columns"
                  type="number"
                  min="0"
                  value={columns}
                  onChange={(e) => setColumns(e.target.value)}
                />
              </label>
            </section>
            <button className="button" onClick={CreateTable}>
              Create table
            </button>
          </main>

          <table className="NewTable">{table}</table>
        </div>
      </Card>

      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>README.me Creator </h3>
        <div className={classes.HeroPlaceWif}>
          <div className={classes.OtherText}>
            <div
              className={cardStyle.tableContainer}
              ref={themecolor}
              data-color-mode="light"
            >
              <button
                className="button"
                onClick={() =>
                  themecolor.current.setAttribute("data-color-mode", "dark")
                }
              >
                dark
              </button>
              &nbsp;
              <button
                className="button"
                onClick={() =>
                  themecolor.current.setAttribute("data-color-mode", "light")
                }
              >
                Light
              </button>
              &nbsp;
              <button
                className="button"
                onClick={(e) =>
                  navigator.clipboard.writeText(tableData + content)
                }
              >
                Copy
              </button>
              &nbsp;
              <button
                className="button"
                onClick={() => {
                  setContent("");
                  setTableData("");
                }}
              >
                Clear
              </button>
              <p></p>
              <MarkdownPreview source={content + tableData} />
            </div>
          </div>
          <div>
            <ReadmeBtns setContent={setContent} content={content} />
            {tableData.length > 0 && (
              <textarea
                name="textarea"
                id="textarea"
                cols={columns * (gapNeeded + 2)}
                rows={rows}
                value={tableData}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => navigator.clipboard.writeText(tableData)}
                data-for="main"
                data-tip="Click to copy"
              />
            )}
          </div>
        </div>
        <ReactTooltip
          id="main"
          multiline={true}
          place="bottom"
          type="info"
          effect="float"
          className="customeTheme"
          delayHide={800}
        />
      </Card>

      {/* <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>Other Elements </h3>
        <div className={cardStyle.regextexandhelp}>
          <div className={cardStyle.tableContainer}>
           
          </div>
          <div className={classes.OtherText}>
        
          </div>
        </div>
      </Card> */}
    </motion.div>
  );
};

export default OtherProjects;
