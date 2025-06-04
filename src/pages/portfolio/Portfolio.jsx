import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Port1 from "../../assets/p1.png";
import Port2 from "../../assets/banking.webp";
import Port3 from "../../assets/p7.png";
import Port4 from "../../assets/social.webp";
import Port5 from "../../assets/health.webp";
import Port6 from "../../assets/trade.webp";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Websites",
      image: Port1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Banking Applications",
      image: Port2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Personal Websites",
      image: Port3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      title: "Social Media Websites",
      image: Port4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      title: "Health Tracking Applications",
      image: Port5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      title: "Automated Trade Copying Systems",
      image: Port6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section>
      <div
        id="projects"
        className="justify-items-center bg-gray-950 text-white border-b-[1px] border-b-slate-700 pt-5 pb-7 md:pb-[60px] px-3"
      >
        <br />
        <h1 className="flex justify-center font-bold">PORTFOLIO</h1>
        <div className="flex justify-center">
          <h2 className="font-bold text-[25px]">
            Featured <span className="text-blue-300">Projects</span>.
          </h2>
        </div>
        <br />

        <div className="flex flex-wrap gap-6 justify-evenly max-w-[1400px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              delay={index * 0.2} // Staggered animation delay
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ id, title, image, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] px-3 py-4 rounded-lg text-[17px] leading-7 lg:text-[18px] lg:leading-[30px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay,
        duration: 0.5,
      }}
    >
      <div className="justify-items-center">
        <img
          src={image}
          alt={title}
          className="min-w-0 max-w-full border-[1px] bg-gray-800 border-blue-400 p-5 hover:p-2 rounded-[30px]"
        />
      </div>

      <div className="px-3">
        <p className="font-bold py-3 text-[21px] text-blue-300">{title}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Portfolio;
