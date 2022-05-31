import React from "react";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import extentionImage from "../../Images/ChromeEXTScreenshot.png";
import SimplePaint from "./SimplePaint";
import { motion } from "framer-motion";
import Gist from "react-gist";
import { Helmet } from "react-helmet";
import npmImage from "../../Images/npm.png";
import jsonsample from "../../Images/jsonpretty2.png";

const OtherProjects = () => {
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
          <h1 className={tablestyle.title}>Other Projects</h1>
        </div>
      </Card>

      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>Morning Click Chrome Extension </h3>
        <div className={classes.HeroPlaceWif}>
          <div className={classes.OtherText}>
            This is a simple Chrome Extension to Save then open all your Saved
            Tabs . all tabs are stored on local storage and available on your
            hand
            <p>
              <ul>
                <li>input: save what you enterd on input box</li>
                <li>Save Tab: Save the current tab</li>
                <li>All Tabs: save all open Tabs </li>
                <li>Reset All: clear all Data</li>
                <li>Open All: Open All saved tabs</li>
                <li>Theme: change the theme</li>
                <li>Save Json: All open tabs save as a json file</li>
                <li>
                  Save CMD: All open tabs save as a stand alone executable cmd
                  file
                </li>
              </ul>
            </p>
            <div
              style={{
                height: "25vw",
                overflow: "scroll",
                borderRadius: "1rem",
                background: "rgb(242,242,242)",
              }}
            >
              <Gist id="c206a322c55cb9944913f675b926e0ed"></Gist>
            </div>
            Link:
            <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension.git">
              {" "}
              Github
            </a>
            <br />
            Download:
            <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension/archive/refs/heads/master.zip">
              {" "}
              Zip
            </a>
          </div>
          <div className={cardStyle.tableContainer}>
            <img
              src={extentionImage}
              alt="extentionImage"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>
          <img
            src={npmImage}
            alt="npm Image"
            width={"32px"}
            style={{ margin: "0 1rem" }}
          />
          JSON-pretty-textarea{" "}
        </h3>
        <div className={classes.HeroPlaceWif}>
        <div className={classes.OtherText}>
          install
          <div className={classes.codesapmle}>npm i json-pretty-textarea</div>
          import{" "}
          <div className={classes.codesapmle}>
            import &#124; JsonPrettierTextarea &#125; from
            "json-pretty-textarea";
          </div>
          use{" "}
          <div className={classes.codesapmle}>
            &lt; JsonPrettierTextarea <br />
            <p style={{ marginLeft: "2rem" }}>
              prettyjson=&#124;MockDocument&#125;
              <br />
              preBcl="white"
              <br />
              stringCl="blue"
              <br />
              numberCl="blue"
              <br />
              booleanCl="red"
              <br />
              nullCl="violet"
              <br />
              keyCl="red"
              <br />
              string_font_size="1rem"
              <br />
              number_font_size="1rem"
              <br />
              boolean_font_size="1rem"
              <br />
              null_font_size="1rem"
              <br />
              key_font_size="1rem"
              <br />
              height="300px"
              <br />
              width="300px"
              <br />
              borderRadius="10px"
              <br />
            </p>
            &#47;&gt;
          </div>
        </div>
        <div className={cardStyle.tableContainer}>
          <img
            src={jsonsample}
            alt="json pretty sample"
            style={{ margin: "0 1rem 0 0rem", width: "100%" }}
          />
        </div>
        </div>
      </Card>
      {/* <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>Simple Paint </h3>
        <div className={cardStyle.regextexandhelp}>
          <div className={cardStyle.tableContainer}>
            <SimplePaint />
          </div>
          <div className={classes.OtherText}>
        
          </div>
        </div>
      </Card> */}
    </motion.div>
  );
};

export default OtherProjects;
