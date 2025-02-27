import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  // Define services data to reduce repetition in JSX
  const services = [
    {
      id: 1,
      icon: <AiOutlineFundProjectionScreen />,
      title: "Portfolio & Props Account Management",
      description:
        "Professional portfolio and proprietary account management tailored to maximize returns, minimize risks, and strategically grow your wealth through data-driven insights and expert financial strategies.",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Front-End Development",
      description:
        "Transforming ideas into visually stunning, highly responsive, and user-friendly web interfaces using the latest front-end technologies, ensuring seamless navigation, optimal performance, and engaging user experience across all devices/platforms.",
    },
    {
      id: 3,
      icon: <FaCode />,
      title: "Back-End Development",
      description:
        "Building robust, scalable, and secure back-end systems that power web applications with efficient server-side logic, seamless database integration, and API development, ensuring high performance, and smooth interaction between front & back-end components.",
    },
    {
      id: 4,
      icon: <BiUserPin />,
      title: "Full Stack Development",
      description:
        "Providing end-to-end solutions by combining both front & back-end development expertise, delivering seamless user experiences and robust, scalable systems, with expertise in building and deploying complete web applications that are fully integrated.",
    },
    {
      id: 5,
      icon: <BiUserPin />,
      title: "UI Design",
      description:
        "Crafting visually striking, user-centered UI designs that seamlessly blend creativity, functionality, and user experience, ensuring intuitive, engaging, and accessible digital interactions across all devices and platforms, while maintaining brand consistency.",
    },
    {
      id: 6,
      icon: <BiUserPin />,
      title: "Mentorship",
      description:
        "Offering mentorship programs tailored to help individuals and businesses unlock their full potential, with expert guidance, personalized support, and actionable insights that cater to various skill levels and goals, empowering mentees to excel in their careers.",
    },
  ];

  return (
    <section>
      <div
        id="services"
        className="justify-items-center bg-gray-950 text-white border-b-[1px] border-b-slate-700 pt-5 pb-7 md:pb-[60px] lg:pb-[80px] px-3"
      >
        <br />
        <h1 className="flex justify-center font-bold">SERVICES</h1>
        <div className="flex justify-center">
          <h2 className="font-bold text-[25px]">
            What <span className="text-blue-300">I do</span>.
          </h2>
        </div>
        <br />
        <div className="flex justify-center">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2} // Delay to create staggered animation
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ id, icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the card comes into view
    threshold: 0.2, // When 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] border-[1px] border-blue-400 bg-gray-800 p-3 rounded-lg text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]"
      initial={{ opacity: 0, y: 100 }} // Initial state: off-screen from the bottom
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100, // Moves to its original position when in view
      }}
      exit={{ opacity: 0, y: 100 }} // Moves out of the view when exiting
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay, // Staggered delay per service
        duration: 0.5,
      }}
    >
      <p className="text-[40px] text-neutral-500 font-semibold flex justify-end">
        {id < 10 ? `0${id}` : id}
      </p>
      <p className="text-[38px] -mt-2">{icon}</p>
      <p className="font-bold py-3 text-[21px] text-blue-300">{title}</p>
      <p className="min-w-0 max-w-[250px] border-[1px] mt-1 mb-2"></p>
      <p>{description}</p>
    </motion.div>
  );
};

export default Services;

