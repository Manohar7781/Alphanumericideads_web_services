import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to alphanumericideas.com! We are a passionate team dedicated to delivering innovative solutions.</p>
      <p>Our mission is to provide cutting-edge technology and creative ideas to solve complex problems.</p>
      <p>Feel free to explore our website and learn more about our projects and services.</p>

      <img src="/path/to/image1.jpg" alt="Image 1" />
      <img src="/path/to/image2.jpg" alt="Image 2" />

      <footer>
        <p>&copy; {new Date().getFullYear()} alphanumericideas.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
