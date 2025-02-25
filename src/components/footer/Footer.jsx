import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <section>
        <div className="flex gap-2 flex-wrap justify-evenly bg-gray-900 text-white pt-5 pb-3 md:pb-[30px] px-3">
          <a href="#">
            <h1 className="text-2xl text-blue-300 font-bold">
              Majeed Adeyemi<span className="text-white">.</span>
            </h1>
          </a>

          <br className="lg:hidden" />
          <br className="lg:hidden" />

          <div className="flex flex-wrap gap-2 sm:gap-5 justify-center text-[17px] font-medium">
            <ul className="space-y-2">
              <li className="hover:underline hover:text-blue-300">
                <a href="#">Home</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#about">About</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#skills">Skills</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#services">Services</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#projects">My Projects</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>

            <br />

            <ul className="space-y-2">
              <li className="hover:underline hover:text-blue-300">
                <a href="#pm">Portfoloio Manager</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#pam">Props Account Manager</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#fed">Front-End Developer</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#bed">Back-End Developer</a>
              </li>

              <li className="hover:underline hover:text-blue-300">
                <a href="#uid">UI Designer</a>
              </li>
            </ul>

            <br />

            <div className="space-y-2">
              <p className="flex justify-center">Social Media Handles</p>

              <p className="flex justify-center gap-3 text-[20px]">
                <span className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-red-600 hover:text-red-600">
                  <FaInstagram />
                </span>

                <span className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-100 hover:text-black">
                  <FaGithub />
                </span>

                <span className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-red-500 hover:text-red-500">
                  <SiGmail />
                </span>

                <span className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-100 hover:text-black">
                  <FaXTwitter />
                </span>

                <span className="p-1 border-[1px] rounded-full hover:bg-blue-100 active:bg-blue-300 hover:border-blue-600 hover:text-blue-600">
                  <FaLinkedin />
                </span>
              </p>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>

        <hr />

        <div className=" flex justify-center items-center text-center pt-6 bg-gray-900 text-blue-300 text-[15px] font-bold">
          <p>
            <span className="text-white">Designed & Developed by</span>{" "}
            <span className="hover:underline active:text-blue-400">
              Majeed A. Adeyemi
            </span>
          </p>

          <br />
          <br />
        </div>
      </section>
    </>
  );
}

export default Footer