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
                        <a href="https://github.com/krcpr007/BhartiTheme" rel="noreferrer" target="_blank" style={{ color: "#CCD6F6" }} > <h2 style={{ color: "#CCD6F6", }} > <span style={{ color: "#64ffda" }} >01. </span> Bharti Theme <FaGithubAlt style={{ fontSize: "20px", padding: "1px" }} />  </h2> </a>
                        <p>
                            Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
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
                        <p>
                            Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
                        <div className="project-img">
                            <a href="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg">
                                <img src="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg"  alt="priject1img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="project1-abt">
                        <h2>Lorem, ipsum</h2>
                        <p style={{
                            textAlign:
                                "intial"
                        }}>
                            Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
                            Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
                            Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
                        <div className="project-img">
                            <img src={projectImg}  alt="priject1img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
