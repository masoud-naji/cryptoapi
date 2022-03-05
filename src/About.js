import React, { useState, useEffect } from "react";
import classes from "./Components/UI/Card.module.css";
import Card from "./Components/UI/Card";
import cardStyle from "./Components/SubPages/infoCard.module.css";
import style from "./about.module.css";
import pdficon from "./Images/PDF.png";
// import { Link } from "react-router-dom";

const About = () => {
  const initialURL =
    "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2";
  const [urlSrc, seturlSrc] = useState(initialURL);
  const allCertificates = [
    {
      React_Web_Developer:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397105&authkey=AAPFt0zLCz42hGE&em=2",
    },
    {
      Modern_React_Redux:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397112&authkey=ALUpDIIHbEHIXCw&em=2",
    },
    {
      Java_Web_Developer:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136440&authkey=ABNpSdn-QNs6XIg&em=2",
    },
    {
      SQL_Server_1:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130513&authkey=APd1Fe3Lcx_OiCc&em=2",
    },
    {
      SQL_Server_2:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130512&authkey=ADp3j8qThTsxKq4&em=2",
    },
    {
      Mongodb_Essential:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21398747&authkey=AB4jxR9iITzmWms&em=2",
    },
    {
      Google_Analytics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2138218&authkey=AHibj4epIWsLs4o&em=2",
    },
    {
      Spring_Boot:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136439&authkey=AK5GVpVlvNMlfqc&em=2",
    },
    {
      Data_Science_R_Basics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128735&authkey=AE5AoFaVNESSQ6Y&em=2",
    },
    {
      Power_BI_with_DAX:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131449&authkey=ABPNdzZ6ACFZtfc&em=2",
    },
    {
      Power_BI:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2111466&authkey=ANbywV0XKnRcT6E&em=2",
    },
    {
      Excel_VBA_Macro:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128751&authkey=AGq4Y_3xkaKmN5g&em=2",
    },
    {
      Excel_Accountants:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131451&authkey=ANImj8gtXIbtrNQ&em=2",
    },
    {
      Excel_Awesome_Charts:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2129099&authkey=ALTAnsz9mT6svQ0&em=2",
    },
    {
      Technical_Support:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132887&authkey=ANvmtoHbhqLcb1M&em=2",
    },
    {
      BitcoinCryptocurrency:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136559&authkey=AKvrxkgYKRQTWkM&em=2",
    },
    {
      Storytelling_with_Data:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128760&authkey=APvgyJXhp0MBw9U&em=2",
    },
    {
      QuickBooks_Online:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128761&authkey=ADwSJ4UdG5rI4wM&em=2",
    },
    {
      Financial_Stmnts_Per:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132757&authkey=AJXMTI6tvMJoXaM&em=2",
    },
    {
      Financial_Stmnts_Pos:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131919&authkey=AE9Y_-9BEA-KtrA&em=2",
    },
  ];

  const IFrame = () => {
    return (
      <iframe
        title="Document Review"
        src={urlSrc}
        width="100%"
        height="700"
        frameborder="0"
        scrolling="no"
        name="pageshow"
      ></iframe>
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  console.log(Object.keys(allCertificates));
  console.log(Object.values(allCertificates));
  return (
    <div className={style.container}>
      <Card
        style={{ height: "18rem" }}
        className={`${classes.clipboardinside} ${classes.topchart}`}
        // className={`${classes.clipboardinside} ${classes.topchart}`}
      >
        <div
          className={classes.clipboardinsidetext}
          style={{ padding: "1rem" }}
        >
          <div className={cardStyle.container}>
            <div className={cardStyle.tableContainer}>
              <strong>
                <a href="mailto:Masoud.Naji@outlook.com?subject=Resume from webSite">
                  Masoud.Naji@outlook.com
                </a>
                <br />
                <a href="https://www.linkedin.com/in/masoud-naji/">linkedin</a>
                <br />
                California – Los Angeles
                <br />
                747-333-2870
                <br />
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                  download
                >
                  <button className={style.cta}>
                    Download PDF Resume&nbsp;&nbsp;
                  </button>
                </a>
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                  download
                >
                  <br />
                  <button className={style.cta}>Download Word Resume</button>
                </a>
              </strong>
            </div>

            {/* //////////////////////////////////////// */}

            {/* <div className={cardStyle.tableContainer}>
              <div className={style.flextbtn}></div>
                
              <div>
                <Link className={style.nvbbtn} to="../Twittespl">
                  <button className={style.cta}>Twitte Splitter</button>
                </Link>
                <br />
                <Link className={style.nvbbtn} to="../inventory">
                  <button className={style.cta}>inventory</button>
                </Link>
                <br />
                <a className={style.nvbbtn} to="https://github.com/masoud-naji">
                  <button
                    className={style.cta}
                    onClick={() =>
                      window.open(
                        "https://github.com/masoud-naji?tab=repositories"
                      )
                    }
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div> */}

            <div>
              {/* List Of Sample Projects ➡️ */}
              <div
                className="github-card"
                data-github="masoud-naji"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
            </div>
            {/* //////////////////////////////////////// */}
            {/* <div className={cardStyle.tableContainer}>
              <div
                className="github-card"
                data-github="masoud-naji"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
            </div> */}
            {/* /////////////////////////////////////// */}
          </div>
        </div>
      </Card>
      <IFrame />
      <hr />
      <button
        onClick={() => seturlSrc(initialURL)}
        className={style.cta}
        style={{ width: "20rem", textAlign: "left" }}
      >
        <img src={pdficon} style={{ width: "2rem" }} alt="PDF icon" />
        &nbsp; View Resume
      </button>
      <hr />
      {/* //////////////////////////////////////////////certificates */}
      <details style={{ color: "#CCC" }}>
        <summary className={cardStyle.infotext}>
          - View Other Certificates
        </summary>
        <div className={cardStyle.container}>
          <div className={cardStyle.tableContainer}>
            <br />

            {/* //////////////// */}
            {allCertificates.map((urls) => (
              <button
                onClick={() => seturlSrc(Object.values(urls))}
                className={style.cta}
                style={{ width: "20rem", textAlign: "left" }}
              >
                <img src={pdficon} style={{ width: "2rem" }} alt="PDF icon" />
                &nbsp;
                {Object.keys(urls)}
              </button>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};

export default About;
