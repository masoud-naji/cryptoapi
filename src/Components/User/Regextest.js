import React, { useState, useEffect } from "react";
import "./inventory.css";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import Card from "../UI/Card";
import HighlightWithinTextarea from "react-highlight-within-textarea";
import _ from "lodash";

const RegexTest = () => {
  const [value, setValue] = useState(
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.1 2 3 4 5 6 7 8 9 10 Ipsa goose repellendus itaque reiciendis ab explicabo quasi, dicta temporibus quod tempore quis saepe fugit ut autem dolorem eos incidunt voluptates et veritatis fugiat at. Voluptatem nulla, libero magni architecto tempore laudantium dolorum quam impedit placeat aliquid, et similique, quos consectetur veritatis eligendi id iure quia. Recusandae, ullam quidem vero deserunt perspiciatis eligendi voluptates corporis molestiae ab nesciunt non aperiam necessitatibus nemo nam repellendus provident, fugit iure nobis obcaecati cupiditate quos, libero sequi autem! Dolorem adipisci nesciunt repellat, libero quam cumque aliquid expedita, ipsum illo, numquam autem quos voluptates accusantium? Ex ut fugit, mollitia libero hic optio veniam saepe. Ipsam reprehenderit placeat perspiciatis numquam consequatur? Quaerat deserunt quos aut velit iusto a, doloremque veritatis id tempore. Obcaecati nobis accusamus unde, vel necessitatibus ipsa aspernatur iure ducimus maxime labore a repellendus perferendis ullam. Dignissimos rerum aliquid similique unde, rem numquam tempore minus est sed iste provident quasi sit, veritatis sapiente a repudiandae explicabo consequuntur autem asperiores debitis molestiae? Quam in, aliquam a sapiente ducimus odit? Nemo facilis voluptates officia vel animi alias! Quaerat vel architecto voluptas obcaecati, exercitationem, laborum, minus earum consequatur dignissimos fuga qui corporis veritatis quod molestiae a eius perspiciatis voluptatibus sequi!`
  );
  const [searchValue, setSearchValue] = useState("lo[rtyu]em");
  const [searchShowValue, setSearchShowValue] = useState("lo[rtyu]em");
  const [highlightValue, setHighlightValue] = useState();
  const [errormsg, setErrormsg] = useState("");
  const [OpendivFlag, setOpendivFlag] = useState(true);
  const [OpenFlag, setOpenFlag] = useState("i");
  const [checkedState, setCheckedState] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const onChange = (value) => setValue(value);
  const checkboxflag = [
    // {
    //   name: "g",
    //   text: "global search (g) Finds all the correspondences rather than stopping after the first match",
    // },
    { name: "i", text: "case insensitive (i) Case is ignored" },
    {
      name: "m",
      text: "multiline (m) Start and end characters (^ and $) are treated as working on each line",
    },
    {
      name: "u",
      text: "unicode (u) Treat the regular expression as a sequence of Unicode code points",
    },
    {
      name: "y",
      text: "sticky (y) Matches only from the index indicated by the lastIndex property of this regular expression",
    },
    {
      name: "s",
      text: "dot all make . match newline too. (s) Dot metacharacter matches all characters, including newlines",
    },
  ];

  RegExp.quote = function (str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }; //https://stackoverflow.com/questions/16168484/javascript-syntax-error-invalid-regular-expression
  var re = new RegExp(RegExp.quote("lo[rtyu]em"));

  const searchHandler = (e) => {
    var inputValue = "";
    e ? (inputValue = e.target.value) : (inputValue = "lo[rtyu]em");
    setSearchShowValue(inputValue);
    let regExp = "";

    if (
      (inputValue[0] === "^" && inputValue.length < 2) ||
      (inputValue[0] === "$" && inputValue.length < 2)
    ) {
      console.log("starts with ^ or $");
      try {
        regExp = new RegExp(RegExp.quote("lo[rtyu]em"));
        setErrormsg("Empty");
        return false;
      } catch (error) {
        setErrormsg(`${error}`);
        return false;
      }
    }
    if (inputValue !== "") {
      try {
        if ((regExp = new RegExp(inputValue, `g${OpenFlag}`))) {
          setErrormsg("");
          setSearchValue(regExp);
        }
      } catch (error) {
        setErrormsg(`${error}`);
        setSearchValue(" ");
        return false;
      }
    } else if (inputValue === "") {
      console.log("empty");
      try {
        regExp = new RegExp(RegExp.quote("lo[rtyu]em"));
        setErrormsg("Empty");
        setSearchValue(regExp);
      } catch (error) {
        setErrormsg(`${error}`);
        setSearchValue(" ");
        return false;
      }
    }
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalflag = updatedCheckedState.reduce(
      (newflags, currentState, index) => {
        if (currentState === true) {
          return newflags + checkboxflag[index].name;
        }
        return newflags;
      },
      ""
    );
    setOpenFlag(totalflag);
  };

  useEffect(() => {
    console.log(searchValue);
    console.log(searchShowValue);
    console.log(errormsg);
    console.log(OpenFlag);
    console.log(checkedState);
    setHighlightValue(searchValue);
  }, [searchValue, OpenFlag, errormsg]);

  return (
    <div>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.HeroPlace}>
          {/* ///////////////////////////////////test left/////////////// */}
          <div className={classes.infodisplay}>
            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={cardStyle.container}
              className={classes.card}
            >
              {/* ////////////////////////////  regex //////////////////////////////// */}
              <div className={cardStyle.tableContainer}>
                <input
                  type="text"
                  value={searchShowValue}
                  onChange={searchHandler}
                  style={{
                    width: "80%",
                    borderRadius: "8px 0 0 8px",
                    borderRight: "0",
                  }}
                />
                <input
                  type="text"
                  value={`/g${OpenFlag}`}
                  readOnly
                  style={{
                    width: "20%",
                    borderRadius: "0 8px 8px 0",
                    borderLeft: "0",
                  }}
                />
                {/* <button onClick={() => setOpendivFlag(!OpendivFlag)} style={{width:"20%"}}>
                  Flasgs
                </button> */}
              </div>
              {/* ////////////////////////////  error //////////////////////////////// */}
              <div
                className={cardStyle.tableContainer}
                style={{ color: "red" }}
              >
                <hr />
                {errormsg ? (
                  errormsg
                ) : (
                  <section style={{ color: "black" }}>Choose the flag</section>
                )}
              </div>
              {/* ///////////////////////////////////////// flags////////////////////// */}
              <div
                className={cardStyle.tableContainer}
                style={{ display: OpendivFlag !== true ? "none" : "block" }}
              >
                <hr />
                <ul>
                  <li>
                    <input type="checkbox" checked disabled /> global search (g)
                    Finds all the correspondences rather than stopping after the
                    first match
                  </li>
                  {checkboxflag.map(({ name, text }, index) => (
                    <li keys={index}>
                      <input
                        type="checkbox"
                        name={name}
                        id={`custom-checkbox-${index}`}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index, name)}
                      />
                      &nbsp;
                      <label htmlFor={`custom-checkbox-${index}`}>{text}</label>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ////////////////////////////  free //////////////////////////////// */}
              <div className={cardStyle.tableContainer}></div>
              {/* ////////////////////////////   //////////////////////////////// */}
            </div>
          </div>
        </div>
      </Card>
      <Card
        className={`${classes.input} ${classes.topchartdetail} ${classes.area} `}
      >
        <HighlightWithinTextarea
          value={value}
          onChange={onChange}
          highlight={highlightValue}
        />
      </Card>
    </div>
  );
};

export default RegexTest;
