import React from 'react'
import HeroSection from '../../../components/Frontend/HeroSection'
import About from '../../../components/Frontend/HeroSection/About'
import DoneProjects from '../../../components/Services/DoneProjects'
import Services from '../../../components/Services/Services'
function Home() {
  return (
    <>
     <HeroSection/>
     <About/>
     <Services/>
     <DoneProjects/>
    </>
  )
}

export default Home
