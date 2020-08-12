import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target=".navbar" data-offset="50">
    <Introduction />
    <Education />
    <Experience />
    </div>
  );
}

export default App;