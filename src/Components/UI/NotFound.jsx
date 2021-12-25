import { Link } from "react-router-dom";
import  "./Navbar.css";
import React from "react";

const NotFound = () => {
  return (
    <div className="alertBar">
      <h1>Sorry </h1>
      <br />
      <h2> Page Not Found</h2>
      <Link to="/" className="fancy_link">
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
