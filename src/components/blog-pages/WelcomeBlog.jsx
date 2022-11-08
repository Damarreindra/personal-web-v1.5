import React from 'react'
import {motion} from "framer-motion"
import './WelcomeBlog.css'
function WelcomeBlog() {
  return (
    <>
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
            <h1><span>8 November 2022</span>Welcome to My Personal Website </h1>
            
            <p> 
            Hello! Welcome to my personal space on the internet. I'm happy that I was finally able to launch this site for everyone to see.
            </p>

            <h3>Hello World</h3>
            <p>
            I trying to be Web Dev. For the first time i try to make the website it feels "fun" so thats why i wanna be web dev.

            My first web development project is this: To Do App. It's not much, but coding the app itself was fun! I wanted more. I wanted something serious. And what's a better project for a first timer like me than making my own website?
            </p>

            <h3>A purpose</h3>
            <p>
            My goal with this site (and blog) is to continue learning web development and learn publicly. This allows me to document my learning and share my process out there. Another side effect of writing a blog is that I get to practice my writing skills — specifically technical writing. I want to be able to clearly communicate my process and its technical details to other people.
            </p>
            <p>
            So that's it for my introduction, I hope you like my site!
            </p>
        </motion.div>


      </div>
    </>
  )
}

export default WelcomeBlog