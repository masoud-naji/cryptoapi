import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CoinContext from "../../contexts/coinContext";

const Navbar = () => {
  const coinCTX = useContext(CoinContext);

  return (
    <header>
      <Link className="fancy_link" to="/">
        Crypto Cross-cut MINimizer
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav>
        <ul className="navul">
          <li className="navli">
            <Link className="navlink" to="./">Home</Link>
          </li>
          <li className="navli">
            <Link className="navlink" to="./Details">Info</Link>
          </li>
          <li className="navli">
            <Link className="navlink" to="./About">About</Link>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navbar;
