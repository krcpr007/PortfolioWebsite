import React from 'react'
import './project.css';
import projectImg from './desktop-1245714.jpg'

const project = () => {
    return (
        <div className="project1">
        <div className="project1-abt">
        <h2>Lorem, ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste necessitatibus aliquid est, at expedita dolores distinctio dignissimos facere rerum ex nostrum reiciendis quidem praesentium autem, quae voluptates aspernatur sit?
        Totam dignissimos nisi temporibus alias voluptas assumenda itaque, aperiam fugit, officia quis sit. Rerum, temporibus. Nostrum, maxime sequi. Sit nesciunt iusto esse reprehenderit adipisci fugiat quos molestias similique quod ipsam.
        Deleniti, fuga quam provident harum iusto recusandae veniam vitae quos eos enim ea. Enim harum nemo, laborum sint velit at porro ipsam cumque voluptates rem facere neque, exercitationem repellendus molestias.
        Ea hic assumenda blanditiis veritatis, eligendi praesentium esse repudiandae delectus consectetur minima harum repellendus porro voluptatum nihil dolores quos sed, accusamus error nesciunt voluptates animi.</p>
            <div className="project-img">
                <img src={projectImg} style={{width:"400px", border:'2px solid #CCD6F6'}} alt="priject1img" />  
            </div>
        </div>
    </div>
    )
}

export default project
