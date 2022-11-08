import React from 'react'
import {motion} from "framer-motion"

import './AboutSection.css'
import '../App.css'

function About() {
  return (
    <div className="hero-container">
        <video src='/videos/bg.mov' autoPlay loop muted/>
        <motion.div className="info"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        >
        <div className="text-container">
            <h1>Hi, i'm Damarreindra Ihya.</h1>
            <p> Takes informatics bachelor degree on UNSIKA (5th Semester).
                Trying to be Fullstacks Web Developer.
                These days my time is spent researching, studying, prototyping, and coding.
                Focusing on PHP & React JS
            </p>
        </div>
        <div className="img-container">
          <img src="/images/pfp.png" alt="" />
        </div>
        </motion.div> 

        
    </div>
  )
}

export default About