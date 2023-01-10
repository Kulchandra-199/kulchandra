import React from 'react'
import "./project.css";
import Project1 from './Project1';
import Project2 from './project2';
import Project3 from './project3';

const Project = () => {
  return (
    <section className="project section" id="Project">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">My Technical Level</span>

        <div className="project_container container grid">
        <Project1/>
        <Project2/>
        <Project3/>
        </div>
    </section>
  )   
}

export default Project;