import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/hero/Hero";
import Services from "../../pages/sevices/Services";
import Portfolio from "../../pages/portfolio/Portfolio";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Contact from "../../pages/contact/Contact";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="bg-gray-900 text-white"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Services Section with Fade-in Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      {/* Portfolio Section with Slide-in Effect */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Portfolio />
      </motion.div>

      {/* About Section with a Rotating Effect */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* Skills Section with Scaling Effect */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      {/* Contact Section with a Bounce Effect */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;