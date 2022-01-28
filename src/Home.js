import React, { useContext } from "react";
import Card from "./Components/UI/Card";
import classes from "./Components/User/AddUser.module.css";
import First from "./Components/User/First";
import CoinContext from "./contexts/coinContext";
// import { useHistory } from "react-router";
// import ShowWithAnimation from "./Components/CustomHooks/ShowWithDelay";
// import heroimage from "./Images/Business_SVG.svg";

const Home = () => {
  const coinCTX = useContext(CoinContext);
  return (

    <div >
       {coinCTX.error && (
        <Card className={classes.input}>
          <h2>{coinCTX.error}</h2>
        </Card>
      )}
      {coinCTX.isPending && (
        <Card className={classes.input}>
          <h2>... Loading</h2>
        </Card>
      )}
      {coinCTX.coins && (
        <div>
          {/* <Coins /> */}
          <First/>
        </div>
      )}
    </div>
  );
};

export default Home;

//npx json-server --watch Post/db.json --port 8000
//npm install react-confirm-alert --save
//npm install bootstrap react-bootstrap
//npm i lodash
//npm install --save react-chartjs-2 chart.js
//npm i react-router
//npm install -S react-router-dom
//npm i react-select
//npm install html-to-text
//npm i react-load-script
//npm i react-scripts
//npm install react-input-emoji --save
//npm install browser-image-compression --save
//npm i xlsx
//npm i json-as-xlsx
//npm i react-lorem-ipsum
//npm i react-alice-carousel --save
// npm i sass
//npm install node-sass
//npm install --save react-highlight-within-textarea