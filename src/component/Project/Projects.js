import React from 'react'
import './project.css';
import { FaGithubAlt } from 'react-icons/fa';
import projectImg from './desktop-1245714.jpg'
const Projects = (props) => {
    return (
        <div data-aos={props.dataAos} data-aos-once="true" className="project-container">
            <div className="project-container2">
                <h2 className="project-heading"><span style={{ color: "#64ffda" }}>02.</span>Some Things I’ve Built</h2>

                <div className="project1">
                    <div className="project1-abt">
                        <a href="https://github.com/krcpr007/BhartiTheme" rel="noreferrer" target="_blank" style={{ color: "#CCD6F6" }} > <h2 style={{ color: "#CCD6F6", }} > <span style={{ color: "#64ffda" }} >01. </span> Bharti Theme <FaGithubAlt style={{ fontSize: "20px", padding: "1px" }} />  </h2> </a>
                        <ul>
                            <li>This is a <b>VS code dark theme</b> named Bharti theme made with help of <a href="https://www.npmjs.com/package/generator-code" target="_blank" rel="noreferrer"> <b>Yo Code </b> </a> - Extension and Customization Generator. <br /></li>
                            <li>It has medium contrast a or lite contrast theme. <br /></li>
                            <li>Dark navy blue have editor color <br /></li>
                            <li> You can download it from vs code extension marketplace and you can use it. <br /></li>
                            <li><a href="https://marketplace.visualstudio.com/items?itemName=Rajankumar.bharti-theme&ssr=false" target="_blank" rel="noreferrer"> Install</a></li>
                        </ul>
                        <div className="project-img">
                            <a href="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" target="_blank" rel="noreferrer" >
                                <img src="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg"  alt="priject1img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="project1-abt">
                    <a href="https://github.com/krcpr007/NEWSMAiNIA" rel="noreferrer" target="_blank" style={{ color: "#CCD6F6" }} > <h2 style={{ color: "#CCD6F6", }} > <span style={{ color: "#64ffda" }} >02. </span>NEWS MAiNIA<FaGithubAlt style={{ fontSize: "20px", padding: "1px" }} />  </h2> </a>
                        <ul>
                            <li>This is React web app where we can read lots of news.  </li>
                            <li>Category-wise news (ex-science,business,sports)</li>
                            <li>It made by using <a href="https://newsapi.org/" target="_blank" rel="noreferrer">NEWS24 API</a> and<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> Reactjs </a> </li>
                            <li>
                            <b>News API</b> is a simple, easy-to-use REST API that returns JSON search results for current and historic news articles published by over 80,000 worldwide sources.
                            </li>
                        </ul>
                        <div className="project-img">
                            <a href="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg">
                                <img src="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg"  alt="priject1img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="project1-abt">
                    <a href="https://github.com/krcpr007/MarvelHub" rel="noreferrer" target="_blank" style={{ color: "#CCD6F6" }} > <h2 style={{ color: "#CCD6F6", }} > <span style={{ color: "#64ffda" }} >03. </span>Marvel HuB<FaGithubAlt style={{ fontSize: "20px", padding: "1px" }} />  </h2> </a>
                        <ul> <li>This is <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> React </a> web app where we can search about marvel superheroes using <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer">Marvel API</a> </li>
                            <li>The <b>Marvel Comics API</b> allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.</li>
                            <li><a href="https://marvelhub.pages.dev/" target="_blank" rel="noreferrer">Vist site</a></li>
                        </ul>
                        <div className="project-img">
                            <img src="https://source.unsplash.com/1600x900/daily?marvel"  alt="priject1img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) 
}

export default Projects
