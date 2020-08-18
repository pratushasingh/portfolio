import React from 'react';
import "../App.css";

const logo = process.env.PUBLIC_URL + "/assets/logo.svg";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top">
                <a href="#introduction" className="navbar-brand"><img src={logo} className="App-logo no-select" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon" style = {{color: "#ffffffd0"}}></span>
                </button>
                <div className="collapse navbar-collapse" id = "navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#skills" className="nav-link" style = {{color: "#ffffffd0"}} >Skills</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#education" className="nav-link" style = {{color: "#ffffffd0"}}>Education</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#experience" className="nav-link" style = {{color: "#ffffffd0"}}>Experience</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#projects" className="nav-link" style = {{color: "#ffffffd0"}}>Projects</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#about" className="nav-link" style = {{color: "#ffffffd0"}}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;