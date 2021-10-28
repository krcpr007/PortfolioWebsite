import React from 'react'
// import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="navbar">
        <input type="checkbox" id="navbar-checkbox"/>
        <div className="navbar-header">
          {/* <div className="navbar-title"> */}
            <a href="/" className="navbar-title" >Rajankr.</a>
          {/* </div> */}
        </div>
        <div className="navbar-responsive-button">
          <label htmlFor="navbar-checkbox">
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"> </span>
            <span className="hamburger-icon"></span>
          </label>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Pojects</a>
          <a href="#Locations">Skills</a>
          <a href="#Contact">Contact</a>
          <a href="/" target="_blank">Resume</a>
        </div>
      </div>
    )
}
export default Navbar
