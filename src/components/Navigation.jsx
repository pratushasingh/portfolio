import React from 'react';
import "../App.css";
import logo from '../logo.svg';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a href="#introduction" className="navbar-brand"><img src={logo} className="App-logo no-select" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id = "navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#education" className="nav-link">Education</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;