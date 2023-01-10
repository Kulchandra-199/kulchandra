import React from 'react';
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {


    return (


        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification_active button--flex"




                    >
                        <i className="uil uil-graduation-cap uil-qualification_icon"></i>{" "}
                        Experience
                    </div>


                </div>

                <div className="qualification_section">
                    <div className=
                        "qualification_content qualification_content-active" >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Community Manager</h3>
                                <span className="qualification_subtitle">
                                    (Stride Ahead)
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> jan 2021 - July 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title"> Researchh Intern </h3>
                                <span className="qualification_subtitle">(ForeignAdmits)</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> July 2021 - Oct 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">front-end Developer</h3>
                                <span className="qualification_subtitle">
                                    (Dare fit)
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> dec 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Qualification