import React from "react";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import gloria from "../../Images/maxi.jpg";
import Sketch from "react-p5";
import loadImage from "react-p5";
import noCanvas from "react-p5";
import floor from "react-p5";
import map from "react-p5";
import createDiv from "react-p5";
import setup from "react-p5";
// import draw from "react-p5";

const PictureTexter = () => {
  const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
  // let gloria;

  const setup = (p5, loadImage,canvasParentRef) => {
    function preload() {
      gloria = loadImage({ gloria });
    }
    // noCanvas();
    // gloria.loadPixels();
    p5.createCanvas(500, 400).parent(canvasParentRef)
  };
  const draw = (p5, floor, map) => {
    let row = "";
    for (let j = 0; j < gloria.height; j++) {
      for (let i = 0; i < gloria.width; i++) {
        const pixelIndex = (i + j * gloria.width) * 4;
        const r = gloria.pixels[pixelIndex + 0];
        const g = gloria.pixels[pixelIndex + 1];
        const b = gloria.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));
        const c = density.charAt(charIndex);
        if (c == " ") row += "&nbsp;";
        else row += c;
      }
      // return p5.createDiv(row);
    }
    p5.createDiv(row)
    p5.ellipse(300, 100, 100)
  };

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
            <Sketch setup={setup} draw={draw} />
          </div>
          <div className={cardStyle.tableContainer}>images in right side</div>
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

export default PictureTexter;
