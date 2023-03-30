import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,Link
}from "react-router-dom";
import './navbar.css'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {

    
  return (
    <nav className="navbar">
        <div className="container">
        <button className="mobile-menu-icon">
      </button>
        
      <h3 className="logo">Lord Of The Drinks</h3>

      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/AboutUs"><li>AboutUs</li></Link>
        <Link to="/Jobs"><li>Jobs</li></Link>
        <Link to="/ContactUs"><li>ContactUs</li></Link>

        
      </ul>
      
      <FaBars />
      </div>
    </nav>
  );
};
export default Navbar;