import React from 'react'
import './Footer.css'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
const Footer = (props) => {
    return (
        <footer>
            <div data-aos={props.dataAos} data-aos-once="true" className="footer-container">
              <h1 className="footer-Heading" >Get In Touch</h1>
              <p className="footer-paragraph">Although I’m not currently looking for any new opportunities, my inbox is <br/> always open. Whether you have a question or just want to say hi, I’ll try my <br/> best to get back to you!</p>
              <div className="icons">
              <a href="https://instagram.com/cr7.rajan" target="_blank" rel="noreferrer"><FaInstagram style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/krcpr007"><i><FaGithub style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></i></a>
              <a href="https://www.facebook.com/profile.php?id=100003853378878" target="_blank" rel="noreferrer"><FaFacebookSquare style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></a>
              <a href="https://www.linkedin.com/in/krcpr007/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></a>
              <a href="https://twitter.com/Cr7_rajan" target="_blank" rel="noreferrer"><FaTwitter style={{ fontSize: "30px", margin: "12px" ,color:"#64ffda"}}/></a>
              </div>
              <div>
                  <form target="_blank" rel="noreferrer" action="mailto:rajankk.ug20.cse@nitp.ac.in">
                  <button type="submit" className="footer-btn"> Say Hello!</button>
                  </form>
              </div>
            </div>
            
        </footer>
    )
}

export default Footer
