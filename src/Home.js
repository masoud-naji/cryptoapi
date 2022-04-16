import React, { useContext } from "react";
import classes from "./Components/SubPages/AddUser.module.css";
import First from "./Components/SubPages/First";
import Card from "./Components/UI/Card";
import CoinContext from "./contexts/coinContext";
// import { useHistory } from "react-router";
// import ShowWithAnimation from "./Components/CustomHooks/ShowWithDelay";
// import heroimage from "./Images/Business_SVG.svg";
import { motion } from "framer-motion";

const Home = () => {
  const coinCTX = useContext(CoinContext);
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
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
          <First />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
