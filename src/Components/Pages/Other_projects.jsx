import React from "react";
import classes from "../Styles/Card.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ChromeExtension from "../OtherJobs/ChromeExtension";
import JsonPretty from "../OtherJobs/JsonPretty";
import SkillRadar from "../OtherJobs/SkillRadar";
import ProgressBar from "../OtherJobs/ProgressBar";

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
        <meta name="description" content="Chrome Extension to save all open tabs" />
        <meta name="description" content="Npn JsonPretty" />
        <meta name="description" content="Npn SkillRadar Chart" />
        <meta name="description" content="Npn ProgressBar Chart" />
      
      </Helmet>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Other Projects</h1>
        </div>
      </Card>
      <ChromeExtension />
      <JsonPretty />
      <SkillRadar />
      <ProgressBar />
    </motion.div>
  );
};

export default OtherProjects;

{
  /* <Card className={`${classes.input} ${classes.topchartdetail}`}>
    <h3 className={tablestyle.title}>Simple Paint </h3>
    <div className={cardStyle.regextexandhelp}>
      <div className={cardStyle.tableContainer}>
        <SimplePaint />
      </div>
      <div className={classes.OtherText}>
    
      </div>
    </div>
  </Card> */
}
