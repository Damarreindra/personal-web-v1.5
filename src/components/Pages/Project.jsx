import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import Cards from '../Cards'
import { Helmet } from 'react-helmet';
import './Project.css'

function Project() {
    return (
        <>
            <Helmet>
            <title>RENDRA | Project</title>
            </Helmet>
    <div className="hero-container">
        <video src='/videos/bg.mov' autoPlay loop muted/>
        <motion.div className="blog-info"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        >
        <div className="blog-text-container">
            <h1>Projects</h1>
            <h7> 
                Here some Website projects that i made
            </h7>
        </div>
        </motion.div> 

        <motion.div className="blogs-container"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        > 
        <a href="https://ayf-fe4.netlify.app/" style={{textDecoration:"none"}}> 
          <Cards 
          title={"ASEAN Online Forum"} 
          excerpt={"Online Forum to Discuss Youth Problem in ASEAN Country"}
          src={'/images/asean.jpg'}
          /> 
        </a>
          
        

        <a href="https://ur-cinerate.netlify.app/" style={{textDecoration:"none"}}>
          <Cards
          title={"UR-CINERATE"} 
          excerpt={"Need info for movie that u want to watch? Ur-cinerate is your Mate!"}
          src={'/images/ur-cinerate.jpg'}
          />
        </a>
        
        </motion.div>
         
    </div>
    </>
      )
}

export default Project