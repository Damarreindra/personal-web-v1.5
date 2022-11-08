import React from 'react'
import { Helmet } from 'react-helmet';
import {motion} from "framer-motion"
import Cards from '../Cards'
import { Outlet, Link } from 'react-router-dom'
import '../BlogSection.css'


function Blogs() {

  return (
    <div>
    <Helmet>
    <title>RENDRA | Blog</title>
    </Helmet>
    <div className="hero-container">
        <video src='/videos/bg.mov' autoPlay loop muted/>
        <motion.div className="blog-info"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        >
        <div className="blog-text-container">
            <h1>Blog</h1>
            <h7> 
                I sometime write about things I learn in web development and also stuff that I find interesting
            </h7>
        </div>
        </motion.div> 

        <motion.div className="blogs-container"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        > 
        <Link to={"welcome"} style={{textDecoration:"none"}}>
          <Cards 
          title={"Welcome to My Personal Website!"} 
          excerpt={"Introduction and why i make this website"}
          src={'/images/personal-web.jpg'}
          /> 
          
        </Link>

        <Link to={"keyboard"} style={{textDecoration:"none"}}>
          <Cards
          title={"Best Mechanical Keyboard Switch for Typing"} 
          excerpt={"Yes, it's very subjective, but here's still some advice."}
          src={'/images/switches.jpg'}
          /> 
        </Link>
        </motion.div>
         
    </div>
    <Outlet/> 
    </div>
  )
}

export default Blogs