import React from 'react'
import "./skill.css"

const Backend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Backend Developer</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">NODE JS</h3>
                    <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">PYTHON</h3>
                    <span className="skills_level">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills_name">MY SQL</h3>
                    <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>

            </div>  
        </div>
    
  )
}

export default Backend