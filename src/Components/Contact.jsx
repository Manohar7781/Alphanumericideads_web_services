import React from 'react';
import "../Css/Contact.css";
import contact_banner from "../assests/2.jpg"
import Hero from './Hero';

export default function Contact() {
  return (
    <div>
      <Hero
      cName = "hero"
      heroImg = {contact_banner}
      title="Contact Us"
      text="Thank you for your intrest in our Alphanumeric Ideas Services
      Contact us today to learn more about how we can assist you in maximizing your productivity and efficiency.
      "/>
      <br />
    </div>
  )
}
