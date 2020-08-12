import React, { Component } from 'react';
import AOS from 'aos';
import '../App.css';

const picture = process.env.PUBLIC_URL + "/assets/images/anish.jpg";

class Introduction extends Component {
    componentDidMount() {
        AOS.init({
            duration: 0
        })
    }
    render() {
        return (
        < div className = "Section" id = "introduction" style = {{ backgroundColor: "#F1F1F1" }}>
        <div data-aos="fade-in" data-aos-duration="2000" className="IntroContent">
            <br /><br /><br /><br />
            <img src={picture} alt="Meri tasveer" className="no-select" style={{ width: "20vw", borderRadius: "50%" }} data-aos="zoom-out-down" data-aos-duration="1500" />
            <br /><br />
            <div className="Name no-select">Pratusha Singh</div>
            <div>
                <a href="https://github.com/pratushasingh" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" style={{ fontSize: "2em", color: "black", padding: "1vw" }}></i></a>
                <a href="https://www.linkedin.com/in/pratushasingh/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: "2em", color: "black", padding: "1vw" }}></i></a>
            </div>
        </div>
    </div>)
            
        }
    }

    export default Introduction;