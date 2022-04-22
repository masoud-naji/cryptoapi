import React, { useContext } from "react";
import classes from "../Styles/AddUser.module.css";
import First from "./First";
import Card from "../UI/Card";
import CoinContext from "../../contexts/coinContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
// import { useHistory } from "react-router";
// import ShowWithAnimation from "./Components/CustomHooks/ShowWithDelay";
// import heroimage from "./Images/Business_SVG.svg";

const Home = () => {
  const coinCTX = useContext(CoinContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <meta charset="utf-8" />
        <title>Masoud Naji</title>
        <meta name="description" content="Masoud Naji , FrontEnd Developer" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
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
          <First />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
