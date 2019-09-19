import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
        <div className="container-fluid nav">
            <div className="row">
                <nav className="black">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">airbnb</Link>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/host/home">Host a Home</Link>
                            </li>
                            <li>
                                <Link to="/host/experience">Host an Experience</Link>
                            </li>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/log-in">Log In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>)
    }
}
export default NavBar;