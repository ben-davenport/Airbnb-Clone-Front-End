import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import Signup from './Signup';

class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
            showModal: false
        }
    }

    signUp = ()=>{
        console.log('click')
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: true
        })
    }
    closeModal = (e)=>{
        document.querySelector('body').className = '';
        this.setState({
            showModal: false,
            modalContent: <ModalSplash />
        })
    }

    render(){
        return(
        <div className="container-fluid nav">
            <div className="row">
                <nav className="transparent">
                    <div className="nav-wrapper">
                        <Link to="/" className="left">airbnb</Link>
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
                            <li className="nav-non-link" onClick={this.signUp} >
                                Sign Up
                            </li>
                            <li className="nav-non-link" onClick={this.signUp} >
                                Log In
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">
                        {this.state.modalContent}
                    </div>
                </div>
        </div>)
    }
}
export default NavBar;