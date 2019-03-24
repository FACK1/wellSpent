import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <div className="nav-1">
        <h3>
          Well<span>Spent</span>
        </h3>
      </div>
      <div className="nav-2">
        <a href="#">
          <h3>Home</h3>
        </a>
        <Link to="/Brands">
          <h3>Brands</h3>
        </Link>

        <a href="#">
          <h3>About Us</h3>
        </a>
      </div>
    </div>
  );
};
export default Header;
