import React from 'react'
import "./skill.css";

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend developer</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_level">intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">JAVASCRIPT</h3>
                    <span className="skills_level">Advanced</span>
                    </div>
                </div>
            </div>

            <div className="skills_group">
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">BOOTSTRAP</h3>
                    <span className="skills_level">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">GIT</h3>
                    <span className="skills_level">intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">REACT</h3>
                    <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Frontend