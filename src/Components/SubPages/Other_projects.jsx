import React from "react";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import tablestyle from "./UsersList.module.css";
import Card from "../UI/Card";
import "./progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import extentionImage from "../../Images/ChromeEXTScreenshot.png";
import SimplePaint from "./SimplePaint";

const OtherProjects = () => {
  return (
    <div>
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
                <li>Save CMD: All open tabs save as a stand alone executable cmd file</li>
              </ul>
            </p>
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
            <img src={extentionImage} alt="extentionImage" style={{maxWidth:"100%"}}/>
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
    </div>
  );
};

export default OtherProjects;
