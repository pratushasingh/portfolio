import React, { Component } from 'react';
import myeducation from '../data/myeducation.json';
import '../App.css';
import AOS from 'aos';

const educationList = myeducation.education;

class Education extends Component{
    componentDidMount() {
        AOS.init({
            duration: 0
        })
    }
    render(){
        return (
            <div className="Section" style = {{backgroundColor: "#faf3e8"}} id = "education">
            <div className="Heading" data-aos="fade-in" data-aos-duration="2000">Education</div>
            <div className="card-container" data-aos = "fade" data-aos-duration = "1000">
                {
                    educationList.map((education, i) => {
                        let logo = process.env.PUBLIC_URL + education.logo;
                        return (
                            <div className="row" key = {i}>
                                <div className="card" data-aos = "slide-left" data-aos-duration = "1500" key={i} style = {{backgroundColor: "#fffdfa"}}>
                                    <div className="card-content">
                                        <div className="card-title">{education.universityName}</div>
                                        <img src={logo} alt="logo" className="Logo no-select" />
                                    </div>
                                    <br />
                                    <div className="college">{education.collegeName}</div>
                                    <div style = {{fontWeight: "bold"}}>{education.degree}</div>
                                    <div className="Duration">{education.duration}</div>
                                    <div>{education.location}</div>
                                    <br/>
                                    <div className="card-content">
                                        <div>Courses: {education.courses}</div>
                                        <br/>
                                        <div style = {{fontWeight: "bold"}}>Grade: {education.Grade}</div>
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

export default Education;