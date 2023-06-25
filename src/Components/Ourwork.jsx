import React,{Image,Container} from 'react'
import Hero from './Hero'
import ourwork_banner from "../assests/8.jpg"
export default function Ourwork() {
  return (
    <>
    <div>
    <Hero
    cName = "hero"
    heroImg = {ourwork_banner}
    title="Our Work"
    text="you can check our projects !!!!"
    />      
    <br/>
 
     
    </div> </>
  )
}
