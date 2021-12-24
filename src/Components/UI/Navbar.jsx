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
          Crypto Cross-cut MINimizer
        </Link>
        <div className={classes.links}>
          <Link className={classes.nvbbtn} to="./">
            Home
          </Link>
          <Link className={classes.nvbbtn} to="./Details">
            Info
          </Link>
          <Link className={classes.nvbbtn} to="./About">
            {/* {keytoggle !== true ? ( */}
            <button className={classes.cta}>About</button>
            {/* ) : (
            <button onClick={() => onShowForm()} className={classes.cta}>
              New User
            </button>
          )} */}
          </Link>
          {/* <Link className={classes.nvbbtn} to="./Twittespl">
            <button className={classes.cta}>Twitte spl</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
