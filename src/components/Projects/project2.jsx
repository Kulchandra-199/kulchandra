import React from 'react';
import Img1 from "../../assets/Project-2.jpg";
import "./project.css"


// https://wondrous-swan-d9e100.netlify.app/

const Project2 = () => {
  return (
    <div className="project_content">
      < a traget="_blank" href='https://wondrous-swan-d9e100.netlify.app'>
        <img className='project1_img' src={Img1} alt="" />
        <h2 className="project_title">Quiz Game</h2>
        <h3 className="project_desc">Built using Reactjs </h3>
      </a>
    </div>

  )
}

export default Project2;