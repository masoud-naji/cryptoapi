import React  from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
 
  return (
    <header>
      <Link className="fancy_link" to="/">
        Crypto Cross-cut MINimizer
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav className="mainnavbar">
        <ul className="navul">
          <li key="1" className="navli">
            <Link className="navlink" to="./">Home</Link>
          </li>
          <li key="2" className="navli">
            <Link className="navlink" to="./Details">Info</Link>
          </li>
          <li key="3" className="navli">
            <Link className="navlink" to="./About">About</Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navbar;
