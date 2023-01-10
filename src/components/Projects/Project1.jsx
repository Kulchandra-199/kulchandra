import React from 'react';
import Img1 from "../../assets/Next-ecommerce.jpg";
import "./project.css"



// function redirect() {
//   var url = "https://63bd1a2765be8562944e7bac--peaceful-griffin-545687.netlify.app/";
//   window.location(url);
// }

const Project1 = () => {


  return (

    <div className="project_content"  >
      < a traget="_blank" href='https://63bd1a2765be8562944e7bac--peaceful-griffin-545687.netlify.app'>
        <img className='project1_img' src={Img1} alt="" />
        <h2 className="project_title">E-commerce Store</h2>
        <h3 className="project_desc">Built using Next js </h3>
      </a>

    </div>


  )
}

export default Project1;