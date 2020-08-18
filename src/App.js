import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";


function App() {
  return (
    <div className="App" data-spy="scroll" data-target=".navbar" data-offset="50">
      <Navigation />
      <Introduction />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <About />
    </div>
  );
}

export default App;