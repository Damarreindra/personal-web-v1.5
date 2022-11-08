import React from 'react'
import '../../App.css'
import AboutSection from '../AboutSection'
import { Helmet } from 'react-helmet';
function About() {
  return (
    <>
    <Helmet>
    <title>RENDRA | About</title>
    </Helmet>
        <AboutSection/>
    </>
  )
}

export default About