import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="navbar">
        <input type="checkbox" id="navbar-checkbox"/>
        <div className="navbar-header">
          {/* <div className="navbar-title"> */}
            <Link to="/" className="navbar-title" >Rajankr.</Link>
          {/* </div> */}
        </div>
        <div className="navbar-responsive-button">
          <label for="navbar-checkbox">
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"> </span>
            <span className="hamburger-icon"></span>
          </label>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Pojects</Link>
          <Link to="#Locations">Skills</Link>
          <Link to="#Contact">Contact</Link>
          <Link to="#Contact">Resume</Link>
        </div>
      </div>
    )
}
export default Navbar
