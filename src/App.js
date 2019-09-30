import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import HostHome from './Components/Host/HostHome';
import LoginPage from './Components/LoginPage';
import FullAbode from './Components/FullAbode/FullAbode';


function App() {
  return (
    <Router>
      <div className="App">
            <Route path="/" component= {NavBar} />
            <Route exact path="/" component={Home} />
            <Route path="/host/home" component={HostHome} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/abode/:abodeId" component={FullAbode} />

      </div>
    </Router>
  );
}

export default App;
