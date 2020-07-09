import React from 'react';
import icon from '../images/icon.svg';
import Button from './Button';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg pt-4 pb-lg-2 pl-lg-5 pr-lg-5 xnav-bg">
                <a className="navbar-brand" href="index.html">
                    <img src={icon} width="35px" height="35px" className="d-inline-block align-top mr-1" alt="logo" />
                    <span className="xlogo-text">KofoundMe</span>
                </a>
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item xgrey">
                        <a href="#" className="nav-link">About KofoundMe</a>
                    </li>
                    <li className="nav-item xgrey">
                        <a href="#" className="nav-link">How It Works</a>
                    </li>
                    <li className="nav-item xgrey">
                        <a href="#" className="nav-link">FAQs</a>
                    </li>
                    <li className="nav-item xgrey">
                        <a href="#" className="nav-link">Blog</a>
                    </li>
                </ul>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item pr-3">
                            <a className="nav-link active" href="#login">Log In</a>
                        </li>
                        <li className="nav-item">
                            <Button 
                                name={'Sign Up'} 
                                class="btn btn-primary pr-4 pl-4 font-weight-normal" 
                                type='button' 
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;