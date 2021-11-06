import React from 'react'
import './About.css';
import myImg from './myPic.jpg'
const About = () => {
    return (
        <div id="#about" className="about-container">
            <div className="about-container2">
                <div className="heading">
                    <h2 className="about-heading"><span style={{ color: "#64ffda" }}>01.</span> About Me</h2>
                </div>
               <div className="myImg">
                   <img className="img" src={myImg} alt="mypic" />
               </div> 
               <div className="about-pragraph" style={{textAlign:"justify"}}>
                <p>Hello! My name is Rajan and I enjoy creating things that live on <br/>the internet.My interest in web development started back in 2019 <br/> when I decided to try editing custom Tumblr themes — turns out  <br/>hacking together a custom reblog button taught me a lot  <br/>about HTML & CSS!<br/>
                Here are a few technologies I’ve been working with recently:</p>   
                </div>
                <div className="skills-list">
                <ul>
                    <li>React</li>
                    <li>JavaScript(ES6+)</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>OOP's</li>
                    <li>C & C++</li>
                    <li>Bootstrap</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default About
