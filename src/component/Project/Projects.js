import React from 'react'
import './project.css';
// import project from './project';
import { FaGithubAlt } from 'react-icons/fa';

import projectImg from './desktop-1245714.jpg'
const Projects = () => {
    return (
        <div className="project-container">
            <div className="project-container2">
                <h2 className="project-heading"><span style={{ color: "#64ffda" }}>02.</span>Some Things I’ve Built</h2>
                
                <div className="project1">
                    <div className="project1-abt">
                        <h2><a href="https://github.com/krcpr007/BhartiTheme" rel="noreferrer" target="_blank" style={{color:"#CCD6F6"}} >Lorem, ipsum <FaGithubAlt style={{fontSize:"20px",padding:"1px"}}/> </a></h2>
                        <p>
                            Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
                        <div className="project-img">
                            <a href="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg"target="_blank" rel="noreferrer" >
                            <img src="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" style={{ width: "400px", border: '2px solid #CCD6F6' ,borderRadius:"5px" }} alt="priject1img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="project1-abt">
                        <h2>Lorem, ipsum</h2>
                        <p>
                            Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
                        <div className="project-img">
                            <a href="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg">
                            <img src="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg" style={{ width: "400px", border: '2px solid #CCD6F6',borderRadius:"5px" }} alt="priject1img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="project1-abt">
                        <h2>Lorem, ipsum</h2>
                        <p style={{textAlign:
                        "intial"}}>
                        Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
                        <div className="project-img">
                            <img src={projectImg} style={{ width: "400px", border: '2px solid #CCD6F6',borderRadius:"5px" }} alt="priject1img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
