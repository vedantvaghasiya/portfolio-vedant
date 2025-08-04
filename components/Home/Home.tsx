import React from 'react';
import Hero from './Hero/Hero';
import About from './About/about';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
} 

export default Home
