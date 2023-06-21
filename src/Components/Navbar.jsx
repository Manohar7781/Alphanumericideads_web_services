import React from 'react';
import logo from "../download.jpeg"
import "../Css/Navbar.css";

export default function Navbar() {
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
        
      </nav>
    </div>
  )
}
