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
                <li>input: save what you enterd on input box Save</li>
                <li>Tab: Save the current</li>
                <li>tab All Tabs: save all Tabs in All windows </li>
                <li> Reset All: clear all Data</li>
                <li>Open All: Open All tabs Color Picker: change the theme</li>
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
