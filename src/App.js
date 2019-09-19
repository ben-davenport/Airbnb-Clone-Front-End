import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
            <Route path="/" component= {NavBar} />
        <h2>Sanity Check</h2>
      </div>
    </Router>
  );
}

export default App;
