import React from 'react'
import { Link } from 'react-router-dom';
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
          <Link to="/about">About</Link>
          <a href="/project">Pojects</a>
          <a href="#Locations">Skills</a>
          <a href="#Contact">Contact</a>
          <a href="https://patnanit-my.sharepoint.com/:b:/g/personal/rajankk_ug20_cse_nitp_ac_in/EWpuoIYaENBDvdsZ8ZkQjxABnfPCrQtu5Uo64pZZpj2UFA?e=Ah60t1" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    )
}
export default Navbar
