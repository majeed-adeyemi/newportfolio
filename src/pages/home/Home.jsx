import React from 'react'
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home