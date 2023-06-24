import React from 'react';
import Hero from './Hero';
import about_banner from '../assests/night.jpg'
export default function About() {
  return (
    <div>
    <Hero
    cName="hero"
    heroImg={about_banner}
    title="About"
    text="welcome to our team"/>

    </div>
  );
}
