import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-1">
          <h3>
            Well<span>Spent</span>
          </h3>
        </div>
      </Link>
      <div className="nav-2">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/Brands">
          <h3>Brands</h3>
        </Link>
        <Link to="/methodology">
          <h3>methodology</h3>
        </Link>

        <Link to="Aboutus">
          <h3>About Us</h3>
        </Link>
      </div>
    </div>
  );
};
export default Header;
