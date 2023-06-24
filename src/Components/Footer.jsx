import React from 'react';
import "../Css/Footer.css";

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='top'>
        <div>
        <h1>Alphanumeric Ideas </h1>
        <p>Choose your service</p>
        </div>
        <div>
            <a href="/">
                <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href="/">
                <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href="/">
                <i className='fa-brands fa-behance-square'></i>
            </a>
            <a href="/">
                <i className='fa-brands fa-twitter-square'></i>
            </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">License</a>
        <a href="/">allversions</a>
        <a href="/">status</a>
        </div>
        <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">License</a>
        <a href="/">allversions</a>
        <a href="/">status</a>
        </div>
        <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">License</a>
        <a href="/">allversions</a>
        <a href="/">status</a>
        </div>
        <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">License</a>
        <a href="/">allversions</a>
        <a href="/">status</a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} alphanumericideas.com. All rights reserved.</p>

    </div>
  )
}
