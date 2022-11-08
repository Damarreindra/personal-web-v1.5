import React from 'react'
import {motion} from "framer-motion"

function Keyboard() {
  return (
    <div className="hero-container">
        <video src='/videos/bg.mov' autoPlay loop muted/>
        <motion.div className="info"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        ></motion.div>

       <motion.div className="welcome-text-container"
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       >
            <h1><span>8 November 2022</span>Best Mechanical Keyboard Switch for Typing</h1>
            
            <p> 
            It seems like I can’t stop putting out articles about mechanical keyboards right? They don’t do super well but I keep coming back to them because I’m obsessed with the subject matter. This obsession is a big reason why mechanical keyboards actually suck, when you're too far down into the rabbit hole.
            </p>

            <h3>Recommendations</h3>
            <p>
            So, coming full circle I can wholeheartedly recommend clicky switches as the best switches for typists. If you’re less concerned about sound (some say “noise”) the Cherry MX Blues are a readily available option for you.
            </p>

            <h3>Clicky, Tactile or Linear?</h3>
            <p>Its the age old question, which kind of switch is best for typing? Back in the day, when there was only Cherry MX switches on the market and little else, it was really simple:
            <ul>
                <li>Cherry MX Reds (linear) for gaming.</li>
                <li>Cherry MX Blues (clicky) for typing.</li>
                <li>Cherry MX Browns (tactile) as good allrounder and for “silent” typing.</li>
            </ul>
            </p>
              
        </motion.div>
        
    </div>


  )
}

export default Keyboard