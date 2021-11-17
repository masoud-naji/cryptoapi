import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

// const Navbar = ({ onShowForm, keytoggle }) => {
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_main_div}>
        <Link className={classes.fancy_link} to="/">
          cross-cut MAXimizer
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
            <button className={classes.cta} >
              Chart
            </button>
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
