import React, { Component } from 'react';
import myskills from "../data/myskills.json";
import "../App.css";
import AOS from 'aos';

const myskillsList = myskills.skills;

class Skills extends Component {
    componentDidMount() {
        AOS.init({
            duration: 0
        })
    }

    getData = (object) => {
        let displayList = [];
        for (let i = 0; i < object.value.length; i++) {
            let logo = process.env.PUBLIC_URL + object.value[i].logo;
            displayList.push(<div className="skill" key={i}>
                <img src={logo} alt="Logo" className="skill-logo no-select" />
                <div>{object.value[i].name}</div></div>)
        }
        return displayList;
    }
    render() {
        return (
            <div className="Section" id="skills">
                <div className="Heading" data-aos="fade-in" data-aos-duration="2000">Skills</div>
                <div id="demo" className="carousel slide" data-ride="carousel">


                    <ul className="carousel-indicators" style={{ color: "#343a40" }}>

                        {
                            myskillsList.map((object, i) => {
                                if (i === 0) {
                                    return (<li key={i} data-target="#demo" data-slide-to={i} className="active"></li>);

                                }
                                else {
                                    return (<li key={i} data-target="#demo" data-slide-to={i}></li>);

                                }
                            })
                        }

                    </ul>

                    <div className="carousel-inner">
                        {
                            myskillsList.map((object, i) => {
                                if (i === 0) {
                                    return (
                                        <div className="carousel-item active domain" key={i}>
                                            <div style={{ fontSize: "5vmin" }}>{object.domain}</div>
                                            {/* {object.value.map((skill, i) => {
                                                return (
                                                    <div key={i}>{skill.name}</div>
                                                );
                                            })} */}
                                            <div className="skill-data">{this.getData(object)}</div>

                                        </div>

                                    );
                                }
                                else {
                                    return (
                                        <div className="carousel-item domain" key={i}>
                                            <div style={{ fontSize: "4vmin" }}>{object.domain}</div>
                                            {/* {object.value.map((skill, i) => {
                                                return (
                                                    <div key={i}>{skill.name}</div>
                                                );
                                            })} */}
                                            <div className="skill-data">{this.getData(object)}</div>


                                        </div>
                                    );
                                }
                            })
                        }
                    </div>


                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <i style={{ fontSize: "3vh", color: "#343a40" }} className="fa fa-chevron-left"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <i style={{ fontSize: "3vh", color: "#343a40" }} className="fa fa-chevron-right"></i>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>

        );
    }
}

export default Skills;