import React from 'react';
import '../App.css';

import Hero from '../components/hero.jsx'
import About from '../components/about.jsx'
import Projects from '../components/projects.jsx'
import Skills from '../components/skills.jsx'
import ContactMe from '../components/form.jsx'

const homePage = () => {
  return (
      <div className="wrapper w-full bg-black min-h-screen overflow-hidden">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <ContactMe/>
      </div>
  )
}

export default homePage;