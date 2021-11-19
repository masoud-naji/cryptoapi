import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CoinContext from "../../contexts/coinContext";

const Navbar = () => {
  const coinCTX = useContext(CoinContext);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_main_div}>
        <Link className={classes.fancy_link} to="/">
          Crypto Cross-cut MAXimizer
        </Link>
        <div className={classes.links}>
          <Link className={classes.nvbbtn} to="./">
            Home
          </Link>
          <Link className={classes.nvbbtn} to="./Details">
            Details
          </Link>
          <Link className={classes.nvbbtn} to="./Chart">
            {/* {keytoggle !== true ? ( */}
            <button className={classes.cta}>Chart</button>
            {/* ) : (
            <button onClick={() => onShowForm()} className={classes.cta}>
              New User
            </button>
          )} */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
