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
          <h1 className={tablestyle.title}>Sample mock</h1>
        </div>
      </Card>

      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <h3 className={tablestyle.title}>Sample mock1 </h3>
        <div className={classes.HeroPlaceWif}>
          <div className={classes.OtherText}>
            description in left side
           
        
          </div>
          <div className={cardStyle.tableContainer}>
          images in right side
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
