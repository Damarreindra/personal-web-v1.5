import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function HeroSection() {
  return (
    <div className="hero-container">
        <video src='/videos/bg.mov' autoPlay loop muted/>
        <motion.h1  
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Damarreindra Ihya
        </motion.h1>
        <motion.p
         initial={{ opacity: 0, scale: 0.2 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}
        >
          Junior Web Dev
        </motion.p>
       
        <div className="hero-btns">
          <Link to='/about'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize = 'btn--large'>Get To Know Me
            </Button>
          </Link>
        </div>
         
    </div>
  )
}

export default HeroSection