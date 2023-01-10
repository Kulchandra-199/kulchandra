import React from 'react';
import Img1 from "../../assets/project3.jpg";
import "./project.css"

const Project3 = () => {


  return (
    <div className="project_content">
      < a traget="_blank" href='https://clever-cannoli-861f3b.netlify.app/'>
        <img className='project1_img' src={Img1} alt="" />
        <h2 className="project_title">Travel Website</h2>
        <h3 className="project_desc">Built using React js </h3>
      </a>
    </div>
  )
}

export default Project3;