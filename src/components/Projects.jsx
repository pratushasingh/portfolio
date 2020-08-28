import React, { Component } from 'react';
import myprojects from "../data/myprojects.json";
import "../App.css";
import AOS from 'aos';

const projectList = myprojects.projects;
const link = process.env.PUBLIC_URL + "/assets/images/source_code.png";

class Projects extends Component {
    componentDidMount() {
        AOS.init({
            duration: 0
        })
    }

    render() {
        return (
            <div className="Section" style={{ backgroundColor: "#faf3e8" }} id="projects">
                <div className="Heading" data-aos="fade-in" data-aos-duration="2000">Projects</div>
                <div className="card-container" data-aos="fade" data-aos-duration="1000">
                    {
                        projectList.map((project, i) => {
                            return (
                                <div data-aos="slide-left" data-aos-duration="1500" className="row" key={i}>
                                    <div className="card" key={i} style = {{backgroundColor: "#fffdfa"}}>
                                        <div className="card-title">{project.projectName}</div>

                                        <div className="Technology">Technologies: {project.technologies}</div>
                                        <div className="Duration">{project.duration}</div>
                                        <br />
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <img src={link} alt="Link" className="Project-link" />
                                        </a>
                                        <br />
                                        <div className="card-content" style={{ paddingRight: "25px" }}>
                                            <ul>
                                                {project.description.map((line, j) => {
                                                    return (
                                                        <li className="Description" key={j}>{line}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Projects;

