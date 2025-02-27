import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section>
        <div className="bg-zinc-950">
          <div className="bg-[url('./assets/13.jpg')] w-full bg-cover bg-center">
            <motion.div
              className="text-white py-[40px] md:pt-[80px] px-3 justify-items-center text-center space-y-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[25px] font-bold md:text-[35px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Hi, I am{" "}
                <span className="text-blue-300">Majeed Abolayo Adeyemi</span>,
              </motion.h1>

              <motion.p
                className="max-w-[700px] font-sans text-[17px] leading-8 md:text-[20px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                I Design and Build dynamic, scalable web and mobile applications
                as a{" "}
                <span className="text-blue-200 font-semibold">
                  Full Stack Software Engineer
                </span>{" "}
                while also optimizing investment portfolios with data-driven
                strategies as a{" "}
                <span className="text-blue-200 font-semibold">
                  Portfolio Manager
                </span>{" "}
                Let's build something amazing!
              </motion.p>

              <br />
              <br className="hidden md:block" />

              <motion.div
                className="flex gap-5 justify-center md:gap-10 text-[20px] lg:text-[25px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                  ease: "easeOut",
                }}
              >
                <span className="p-2 border-[1px] rounded-full hover:bg-blue-100 hover:border-blue-100 hover:text-black">
                  <a
                    href="https://github.com/majeed-adeyemi"
                    className="active:bg-blue-300"
                  >
                    <FaGithub />
                  </a>
                </span>

                <span className="p-2 border-[1px] rounded-full hover:bg-blue-100 hover:border-red-500 hover:text-red-500">
                  <a
                    href="mailto:adeyemimajeedabolayo92@gmail.com"
                    className="active:bg-blue-300"
                  >
                    <SiGmail />
                  </a>
                </span>

                <span className="p-2 border-[1px] rounded-full hover:bg-blue-100 hover:border-red-600 hover:text-red-600">
                  <a
                    href="https://www.instagram.com/majeedadeyemi_?igsh=MWp1emQweGdxeDN0aw%3D%3D&utm_source=qr"
                    className="active:bg-blue-300"
                  >
                    <FaInstagram />
                  </a>
                </span>

                <span className="p-2 border-[1px] rounded-full hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600">
                  <a
                    href="https://www.linkedin.com/in/majeed-adeyemi-020323224/"
                    className="active:bg-blue-300"
                  >
                    <FaLinkedin />
                  </a>
                </span>

                <span className="p-2 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-100 hover:text-black">
                  <a
                    href="https://x.com/majeedadeyemi_?s=21"
                    className="active:bg-blue-300"
                  >
                    <FaXTwitter />
                  </a>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
