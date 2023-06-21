import React from 'react';
import logo from "../download.jpeg"
import React, { Component } from 'react';
import logo from '../logo.svg';
import "../Css/Navbar.css";

 class Navbar extends Component {
  state = {clicked:false};
  handleclick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
  return (
    <div>
      <nav>
        <a href='#'> <img src={logo} alt="logo" style={{"width":"140px","height":"100px"}}/> </a>
        <div>
            <ul id="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Ourwork">Our Work</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Contactus">Contact us</a></li>
            </ul>
        </div>
        <div id='mobile' onClick={this.handleclick}>
          <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </div>
  );
 }
}
export default Navbar;
