import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section>
        <div className="flex gap-2 flex-wrap justify-evenly bg-gray-950 border-b-[1px] border-b-slate-700 text-white pt-5 pb-3 md:pb-[30px] px-3">
          <a href="/">
            <h1 className="text-2xl text-blue-300 font-bold">
              Majeed Adeyemi<span className="text-white">.</span>
            </h1>
          </a>

          <br className="lg:hidden" />
          <br className="lg:hidden" />

          <div className="flex flex-wrap gap-2 sm:gap-5 justify-center text-[17px] font-medium">
            <ul className="space-y-2">
              <div>General</div>
              <li className="hover:underline hover:text-blue-300">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <Link to="/about">About</Link>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <Link to="/skills">Skills</Link>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <Link to="/services">Services</Link>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <Link to="/projects">My Projects</Link>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>

            <br />

            <ul className="space-y-2 text-right">
              <div>Services</div>

              <li className="hover:underline hover:text-blue-300">
                Portfoloio Management
              </li>

              <li className="hover:underline hover:text-blue-300">
                Props Account Management
              </li>

              <li className="hover:underline hover:text-blue-300">
                Front-End Developement
              </li>

              <li className="hover:underline hover:text-blue-300">
                Back-End Developement
              </li>

              <li className="hover:underline hover:text-blue-300">
                Full-Stack Developement
              </li>

              <li className="hover:underline hover:text-blue-300">
                User Interface Designing
              </li>
            </ul>

            <br />

            <div className="space-y-2">
              <p className="flex justify-center">Social Media Handles</p>

              <p className="flex justify-center gap-3 text-[20px]">
                <a
                  href="https://github.com/majeed-adeyemi"
                  className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-100 hover:text-black"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:adeyemimajeedabolayo92@gmail.com"
                  className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-red-500 hover:text-red-500"
                >
                  <SiGmail />
                </a>

                <a
                  href="https://www.linkedin.com/in/majeed-adeyemi-020323224/"
                  className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-red-600 hover:text-red-600"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/majeed-adeyemi-020323224/"
                  className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/majeedadeyemi_?s=21"
                  className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-100 hover:text-black"
                >
                  <FaXTwitter />
                </a>
              </p>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>

        {/* <hr /> */}

        <div className=" flex justify-center items-center text-center py-6 bg-gray-900 text-blue-300 text-[15px] font-bold">
          <p className='flex flex-wrap gap-1 justify-center'>
            <span className="flex gap-1 text-white">
              Copyright{" "}
              <span className='mt-1 text-[15px]'>
                <FaRegCopyright />
              </span>{" "}
              2025
            </span>{" "}
            <span className="hover:underline active:text-blue-400">
              Majeed A. Adeyemi
            </span>
            <span className='text-white'>All rights reserved.</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer