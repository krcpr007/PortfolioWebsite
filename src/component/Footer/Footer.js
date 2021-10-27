import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            <div>
              <h1>Get In Touch</h1>
              <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <div className="icons">
              <a target="_blank" href="https://facebook.com"><i><FaGithub style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></i></a>
              <a href=""><FaFacebookSquare style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}} /> </a>
              </div>
            </div>
            
        </footer>
    )
}

export default Footer
