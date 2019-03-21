import React from 'react';
import './header.css'
const Header = () =>{
    return (
      <div className='nav'>
      <div className="nav-1">
      <h3>Well<span>Spent</span></h3>
      </div>
      <div className="nav-2">
        <a href="#"><h3>Home</h3></a>
        <a href="#"><h3>Brands</h3></a>
        <a href="#"><h3>About Us</h3></a>
      </div>
      </div>
    )
  }
export default Header;
