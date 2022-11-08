import React, { useEffect } from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import { Helmet } from 'react-helmet';


function Home (){
    
    return(
        <>
        <Helmet>
    <title>RENDRA | Home</title>
    </Helmet>
        <HeroSection/>
        </>
    )
}

export default Home