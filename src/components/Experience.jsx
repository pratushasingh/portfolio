import React, { Component } from 'react';
import myexperience from '../data/myexperience.json';
import '../App.css';
import AOS from 'aos';

const experienceList = myexperience.experience;

class Experience extends Component{
    componentDidMount(){
        AOS.init({
            duration: 0
        })
    }
    render(){
        return (
            <div className="Section" id = "experience" style = {{backgroundColor: "#fffdfa"}}>
            <div className="Heading" data-aos="fade-in" data-aos-duration="2000">Experience</div>
            <div className="card-container" data-aos = "fade" data-aos-duration = "1000">
                {
                    experienceList.map((experience, i) => {
                        let logo = process.env.PUBLIC_URL + experience.logo;
                        return (
                            <div className="row" key={i}>
                                <div className="card" data-aos = "slide-right" data-aos-duration = "1500" style = {{backgroundColor: "#faf3e8"}} key={i}>
                                    <div className="card-content">
                                        <div className="card-title">{experience.position}</div>
                                        <img src={logo} alt="Logo" className="Logo no-select" style = {{padding: "30px"}}/>
                                    </div>

                                    <div className = "college">{experience.institution}</div>
                                    <div>{experience.location}</div>
                                    <div className = "Duration">{experience.duration}</div>
                                    <div style = {{fontWeight: "bold"}}>{experience.project}</div>
                                    <div className="card-content" style = {{paddingRight: "25px"}}>
                                    <ul>
                                        {experience.description.map((line, j) => {
                                            return (
                                                <li className = "Description" key={j}>{line}</li>
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

        )

    }
}

export default Experience;