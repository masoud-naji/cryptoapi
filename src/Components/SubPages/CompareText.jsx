import React, { useEffect, useState, PureComponent } from "react";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import tablestyle from "./UsersList.module.css";
import style from "../../about.module.css";
import * as XLSX from "xlsx";
import Card from "../UI/Card";
import "./progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
// import Prism from "prismjs"
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import eclipse from "../../Images/eclipse.gif";
import Line from "../../Images/Line.gif";
import network from "../../Images/network.gif";

const CompareText = () => {
  const [File1, setFile1] = useState("");
  const [File2, setFile2] = useState("");
  const [Split, setSplit] = useState(true);
  const [Darkthm, setDarkthm] = useState(false);
  const [LineNumbers, setLineNumbers] = useState(true);
  // const [PrismEN, setPrismEN] = useState(false);

  // const highlightSyntax = str => (
  //   <pre
  //     style={{ display: 'inline' }}
  //     dangerouslySetInnerHTML={{
  //       __html: Prism.highlight(str, Prism.languages.javascript),
  //     }}
  //   />
  // );
  const newStyles = {
    diffContainer: {
      borderRadius: "1rem",
    },

    variables: {
      dark: {
        highlightBackground: "#fefed5",
        highlightGutterBackground: "#ffcd3c",
      },
    },
    line: {
      padding: "10px 2px",
      "&:hover": {
        background: "#a26ea1",
      },
    },
  };

  const oldCode = `
  const a = 10
  const b = 10
  const c = () => console.log('foo')
   
  if(a > 10) {
    console.log('bar')
  }
   
  console.log('done')
  `;
  const newCode = `
  const a = 10
  const boo = 10
   
  if(a === 10) {
    console.log('bar')
  }
  `;

  useEffect(() => {}, []);

  const frmtarry = [
    ".csv",
    ".json",
    ".JSON",
    ".txt",
    ".js",
    ".ts",
    ".jsx",
    ".css",
    ".scss",
  ];
  const showFile1 = async (e) => {
    const name = e.target.files[0].name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    console.log("Go");
    try {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        setFile1(text);
      };
      reader.readAsText(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const showFile2 = async (e) => {
    const name = e.target.files[0].name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    try {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        setFile2(text);
      };
      reader.readAsText(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Text Compare</h1>
          <div className={classes.HeroPlace}>
            {/* ////////////////////////////  file 1 //////////////////////////////// */}
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
            >
              <div className={cardStyle.tableContainer}>
                Choos a file that you want to check
                <br />
                File should be in one of listed format:
                <br />
                .txt .json .JSON .js .ts
                <br />
                <input
                  type="file"
                  accept=".csv,.json,.JSON,.txt,.js,.ts,.jsx,.css,.scss"
                  onChange={(e) => {
                    showFile1(e);
                  }}
                />
              </div>
              {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
              <div className={cardStyle.tableContainer}>File1</div>
            </div>

            {/* ////////////////////////////  File 2 //////////////////////////////// */}
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
            >
              <div className={cardStyle.tableContainer}>
                Choos a file that you want to check
                <br />
                File should be in one of listed format:
                <br />
                .txt .json .JSON .js .ts
                <br />
                <input
                  type="file"
                  accept=".csv,.json,.JSON,.txt,.js,.ts,.jsx,.css,.scss"
                  onChange={(e) => {
                    showFile2(e);
                  }}
                />
              </div>
              {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
              <div className={cardStyle.tableContainer}>File2</div>
            </div>
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div>
          <div
            className={classes.HeroPlace}
            style={{
              height: "fit-content",
              maxHeight: "fit-content",
              minHeight: "fit-content",
            }}
          >
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={() => setSplit(!Split)}
            >
              <img
                src={network}
                alt=""
                style={{
                  marginLeft: "0",
                  width: "2.5rem",
                  borderRadius: ".5rem",
                  filter: "hue-rotate(180deg)",
                  // border: "4px rgb(252, 125, 22) solid",
                }}
              />
              &nbsp;
              {Split ? "unified" : "Split"}
            </button>
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={() => setDarkthm(!Darkthm)}
            >
              <img
                src={eclipse}
                alt=""
                style={{
                  marginLeft: "0",
                  width: "2.5rem",
                  borderRadius: ".5rem",
                  filter: "hue-rotate(180deg)",
                  // border: "4px rgb(252, 125, 22) solid",
                }}
              />
              &nbsp;
              {Darkthm ? "Light" : "Dark"}
            </button>
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={() => setLineNumbers(!LineNumbers)}
            >
              <img
                src={Line}
                alt=""
                style={{
                  marginLeft: "0",
                  width: "2.5rem",
                  borderRadius: ".5rem",
                  filter: "hue-rotate(180deg)",
                  // border: "4px rgb(252, 125, 22) solid",
                }}
              />
              &nbsp;
              {LineNumbers ? "Line #" : "No line #"}
            </button>
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <div className={classes.HeroPlace}>
            {/* ////////////////////////////  file 1 //////////////////////////////// */}

            {/* enum DiffMethod {
              CHARS = 'diffChars',
              WORDS = 'diffWords',
              WORDS_WITH_SPACE = 'diffWordsWithSpace',
              LINES = 'diffLines',
              TRIMMED_LINES = 'diffTrimmedLines',
              SENTENCES = 'diffSentences',
              CSS = 'diffCss',
            } */}

            <ReactDiffViewer
              styles={newStyles}
              oldValue={File1 || oldCode}
              newValue={File2 || newCode}
              splitView={Split}
              compareMethod={DiffMethod.WORDS}
              useDarkTheme={Darkthm}
              hideLineNumbers={LineNumbers}
              // renderContent={highlightSyntax}
            />

            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}></Card>
    </div>
  );
};

export default CompareText;
