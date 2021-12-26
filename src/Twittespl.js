import React from "react";
import { useEffect, useState } from "react";
import classes from "./Components/UI/Card.module.css";
import Card from "./Components/UI/Card";
import style from "./about.module.css";
import InputEmoji from "react-input-emoji";

const Twittespl = () => {
  const [tweet, setTweet] = useState("");
  const [Stweet, setSTweet] = useState([]);
  const [endChar, setEndChar] = useState("");
  const [divDirection, setDivDirection] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [clipArtforshow, setClipArtforshow] = useState("");
  const [addCounter, setAddCounter] = useState(false);
  const [counterlenght, setCounterlenght] = useState("");

  useEffect(() => {
    var Counter = "";
    if (addCounter) {
      Counter = counterlenght + 1;
    } else {
      Counter = 0;
    }
    var s = tweet;

    const size = 280 - endChar.length - Counter;
    console.log(size);
    console.log(endChar.length);
    console.log(Counter);

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

  // console.log(clipArtforshow[0].length);

  return (
    <div className={style.container}>
      <Card
        style={{ height: "18rem" }}
        className={`${classes.clipboardinside} ${classes.topchart}`}
      >
        {clipArtforshow.length ? (
          <div
            dir={divDirection ? "ltr" : "rtl"}
            className={classes.clipboardinsidetext}
          >
            <div className={classes.insidetitle}>
              ClipBoard ➡️ Part {+clipArtforshow[1] + 1}
            <hr style={{ margin: "5px" }} />
            </div>
            <div className={classes.insidecontent}>

            {clipArtforshow[0]}
            </div>
          </div>
        ) : null}
      </Card>
      <div className={style.twitterdiv} dir={divDirection ? "ltr" : "rtl"}>
        <div className={style.flextbtn}>
          <button
            className={style.languagebtn}
            onClick={(e) => setDivDirection(!divDirection)}
          >
            (RTl / LTR) {divDirection ? "➡️" : "⬅️"}{" "}
            {divDirection ? "LTR" : "RTL"}
          </button>
          <button
            className={style.languagebtn}
            onClick={(e) => setAddCounter(!addCounter)}
          >
            {!addCounter ? "Add Counter 🔢" : "Del Counter 🔠"}
          </button>
        </div>
        <InputEmoji
          value={tweet}
          onChange={setTweet}
          placeholder="Type a message "
          style={{ whiteSpace: "pre-line" }}
        />

        {/* <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="Type a message "
          style={{ width:"100%" }}
        ></textarea> */}

        <InputEmoji
          value={endChar}
          onChange={setEndChar}
          onEnter={setEndChar}
          placeholder="Type next indicator 15Chr Max"
          maxLength={15}
        />

        <hr />
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
                    <button
                      className={style.languagebtn}
                      onClick={(e) => {
                        handleCopyClick(tweets, key, endChar);
                      }}
                    >
                      <span>
                        ({tweets.length} Charecter )
                        {isCopied ? " Copied! " : " Copy "}
                      </span>
                    </button>
                    <hr />
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Twittespl;
