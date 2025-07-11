import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiBag } from "react-icons/tfi";
import Profilepic from "../../assets/GradPic3.jpg";

const About = () => {
  return (
    <section>
      <div className="bg-gray-950 text-white border-b-[1px] border-b-slate-700 pb-7 pt-5 md:pt-10 md:pb-[60px] px-3">
        <h1 className="flex justify-center font-bold">MY BIO</h1>
        <div className="flex justify-center">
          <h2 className="font-bold text-[25px]">
            About <span className="text-blue-300">Me</span>.
          </h2>
        </div>

        <br />

        <div className="md:flex justify-center md:gap-5 lg:gap-[80px]">
          <ProfileSection />
          <InfoSection />
        </div>
      </div>
    </section>
  );
};

const ProfileSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="flex justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.5,
      }}
    >
      <div className="h-auto min-w-0 sm:w-[350px] max-w-[400px]">
        <img
          src={Profilepic}
          alt="Majeed's Picture"
          className="rounded-full p-7 border"
        />
      </div>
    </motion.div>
  );
};

const InfoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="flex justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.5,
      }}
    >
      <div className="min-w-0 text-[17px] max-w-[500px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi
          mollitia tenetur minima nam, placeat at ullam blanditiis assumenda
          reprehenderit! Deserunt.
          <br />
          <br />
          Nam consequuntur assumenda eum culpa vitae expedita maxime consequatur
          nisi temporibus dolore vel tenetur dolor dolorum. Sit laborum aperiam
          modi laboriosam voluptate. Sed ex facilis.
          <br />
          <br />
          Nam consequuntur assumenda eum culpa vitae expedita maxime consequatur
          nisi temporibus dolore vel tenetur dolor dolorum. Sed ex facilis.
          <br />
          <br />
          repellat, voluptatem quis magni blanditiis labore laboriosam dolor!
          Sunt dignissimos, excepturi tenetur autem repellendus omnis quasi
          dolor.
        </p>

        <br />

        <button className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
          <span>View Resume</span>
          <span>
            <TfiBag />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default About;
