import React from 'react'
import './Home.css'; 
import { FaGithubAlt } from 'react-icons/fa';
const Home = () => {
    return (
        <>
            {/* <img className="" src={myImg} alt="MY IMAGE" /> */}
            <div className="home-container">
                <div className="home-container2">
                    <p className="home-paragraph">Hii, my name is </p>
                    <h1 className="home-heading1">Rajan Kumar</h1>
                    <h1 className="home-heading2">I build things for the web</h1>
                    <p className="home-paragraph-about" >I’m a software engineer specializing in building (and occasionally<br /> designing) exceptional digital experiences. Currently, I’m focused on my B.tech at <a style={{ color: "#64ffda" }} href="http://www.nitp.ac.in/php/home.php" target="_blank" rel="noreferrer">Nit patna</a></p>
                    <div>
                    <form target="_blank" action="https://github.com/krcpr007">

                    <button className="home-btn" type="submit" >My  <FaGithubAlt style={{}}/> GitHub </button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
