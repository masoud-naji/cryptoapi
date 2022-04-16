import React from "react";
import { useEffect, useState } from "react";
import classes from "../UI/Card.module.css";
import Card from "../UI/Card";
import style from "../../about.module.css";
import InputEmoji from "react-input-emoji";
import LoremMaker from "../UI/LoremMaker";
import style2 from "./UsersList.module.css";
import ReactTooltip from "react-tooltip";
import "./inventory.css";
import { motion } from "framer-motion";

const Twittespl = () => {
  const [tweet, setTweet] = useState("");
  const [Stweet, setSTweet] = useState([]);
  const [endChar, setEndChar] = useState("");
  const [divDirection, setDivDirection] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [clipArtforshow, setClipArtforshow] = useState("");
  const [addCounter, setAddCounter] = useState(false);
  const [counterlenght, setCounterlenght] = useState("");
  const [waterMark, setWaterMark] = useState("");
  const [ColorWater, setColorWater] = useState("#ff0000");
  const [posWatermark, setposWatermark] = useState("24");
  const [posverWatermark, setposverWatermark] = useState("22");
  const [detailElement, setDetailElement] = useState(false);

  useEffect(() => {
    var Counter = "";
    if (addCounter) {
      Counter = counterlenght + 1;
    } else {
      Counter = 0;
    }
    var s = tweet;

    const size = 280 - endChar.length - Counter;
    // console.log(size);
    // console.log(endChar.length);
    // console.log(Counter);

    const regex = new RegExp(String.raw`\S.{1,${size - 2}}\S(?= |$)`, "g");
    var chunk = s.match(regex);
    chunk && setSTweet(chunk);
  }, [tweet, endChar, addCounter]);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = (tweets, key, endChar) => {
    var Counter = "";
    if (addCounter) {
      Counter = +key + 1 + ".";
    } else {
      Counter = "";
    }
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(Counter + tweets + endChar)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        //linebelow just for show in page clipart is already fill and no need this usestate
        setClipArtforshow([Counter + tweets + endChar, key]);
        setCounterlenght(key.length);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setlorem = (newValue) => {
    setTweet(newValue);
  };

  // console.log(detailElement);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    exit={{ opacity: 0}}
  >
    <Card className={`${classes.input} ${classes.topchartdetail}`}>
      <div className={style.container}>
        <h1
          className={style2.title}
          data-for="main"
          data-tip="long story on twitter? try this tool.<br/> you can use this tool to create multiple tweets<br/> with different text and different end char<br/> even with counter"
        >
          Twitte Splitter
        </h1>

        <Card
          // style={{ height: "18rem" }}
          className={`${classes.clipboardinside} ${classes.topTwitter}`}
        >
          {clipArtforshow.length ? (
            <div
              dir={divDirection ? "ltr" : "rtl"}
              className={classes.clipboardinsidetext}
            >
              <div className={classes.insidetitle}>
                What is in Your ClipBoard Now ➡️ Part {+clipArtforshow[1] + 1}
                <hr style={{ margin: "5px" }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: `${ColorWater}`,
                  top: `${posverWatermark - 2}%`,
                  left: `${posWatermark}%`,
                  opacity: "0.5",
                  transform: "rotate(-45deg)",
                  whiteSpace: "break-spaces",
                }}
              >
                {waterMark}
              </div>
              <div className={classes.insidecontent}>{clipArtforshow[0]}</div>
            </div>
          ) : null}
        </Card>
        <div className={style.twitterdiv}>
          <div
            className={style.lorembox}
            style={{ color: "#CCC", height: "fit-content" }}
          >
            <details
              style={{ color: "#CCC" }}
              open={detailElement}
              onToggle={(e) => setDetailElement(e.currentTarget.open)}
            >
              <summary>- Lorem Maker</summary>
              <div>
                <LoremMaker
                  onChange={setlorem}
                  openDetails={(e) => setDetailElement(e)}
                />
              </div>
            </details>
          </div>
        </div>

        <form dir={divDirection ? "ltr" : "rtl"}>
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="write your long tweet here"
            className={style.textareamain}
          ></textarea>
          {/* Next Indicator */}
          <InputEmoji
            value={endChar}
            onChange={setEndChar}
            onEnter={setEndChar}
            placeholder="Write next indicator 20Chr Max like ⬇️,👇"
            maxLength={15}
          />
          <InputEmoji
            value={waterMark}
            onChange={setWaterMark}
            onEnter={setWaterMark}
            placeholder="WaterMark 50Chr Max , just for screenshot"
            maxLength={50}
          />
          {/* Watermark */}

          <br />
          <br />
          <hr />
        </form>
      </div>
      <div
        className={style.container}
        style={{
          paddingTop: "0",
          minHeight: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "flex-start",
          alignSelf: "flex-start",
        }}
      >
        <div
          className={style.watermarkdiv}
          onClick={(e) => detailElement !== false && setDetailElement(false)}
          dir="ltr"
        >
          <div className={style.watermatkchilds}>
            <input
              style={{ padding: "10px" }}
              className={style.languagebtn}
              type="color"
              value={ColorWater}
              onChange={(e) => setColorWater(e.target.value)}
              data-for="main"
              data-tip="Chose Color for watermark"
            />
          </div>
          <div className={style.watermatkchilds} style={{ marginTop: "10px" }}>
            ↔️ &nbsp;{posWatermark}&nbsp;
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={posWatermark}
              onChange={(e) => {
                setposWatermark(e.target.value);
              }}
              className={style.rangeselector}
              data-for="main"
              data-tip="Change the WaterMark Position"
            />
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={posverWatermark}
              onChange={(e) => {
                setposverWatermark(e.target.value);
              }}
              style={{ transform: "rotate(90deg)" }}
              className={style.rangeselector}
              data-for="main"
              data-tip="Change the WaterMark Position"
            />
            ↕️ &nbsp;{posverWatermark}
          </div>
          <button
            className={(style.watermatkchilds, style.languagebtn)}
            onClick={(e) => setDivDirection(!divDirection)}
            data-for="main"
            data-tip="Change Direction <br /> (LTR/RTL)"
          >
            {divDirection ? "➡️" : "⬅️"} {divDirection ? "LTR" : "RTL"}
          </button>
          <button
            className={(style.watermatkchilds, style.languagebtn)}
            onClick={(e) => setAddCounter(!addCounter)}
            data-for="main"
            data-tip="Add Counter <br /> to tweets <br/> it will be like 1-tweet"
          >
            {!addCounter ? " Count  🔢 " : "NoCount 🔠 "}
          </button>
          <button
            className={(style.watermatkchilds, style.languagebtn)}
            onClick={() =>
              tweet !== ""
                ? (setTweet(""), setSTweet(""), setWaterMark(""))
                : setEndChar("")
            }
            data-for="main"
            data-tip="Clear everything <br/>"
          >
            Clear 🆑
          </button>
        </div>
      </div>

      <div className={style.container}>
        <div className={classes.inputinside}>
          <ul>
            {Stweet !== null && Stweet.length
              ? Object.entries(Stweet).map(([key, tweets]) => (
                  <li
                    key={tweets.index}
                    className={style.litweet}
                    style={
                      addCounter
                        ? { listStyleType: "none" }
                        : { listStyleType: "decimal" }
                    }
                    onClick={(e) => handleCopyClick(tweets, key, endChar)}
                  >
                    {addCounter ? +key + 1 + "." : ""}
                    {tweets}
                    {endChar}
                    <br />
                    <div
                      style={{
                        position: "absolute",
                        color: `${ColorWater}`,
                        top: `${posverWatermark}%`,
                        left: `${posWatermark}%`,
                        opacity: "0.5",
                        transform: "rotate(-45deg)",
                        whiteSpace: "break-spaces",
                      }}
                    >
                      {waterMark}
                    </div>
                    <button
                      className={style.languagebtn}
                      onClick={(e) => {
                        handleCopyClick(tweets, key, endChar);
                      }}
                    >
                      <span>
                        ({tweets.length} Charecter)
                        {isCopied ? " Copied!" : " Copy"}
                      </span>
                    </button>
                    <hr />
                  </li>
                ))
              : ""}
          </ul>
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
      </div>
      </Card>
      </motion.div>
  );
};

export default Twittespl;
