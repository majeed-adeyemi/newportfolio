import React from 'react'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";

const Services = () => {
  return (
    <section>
      <div
        id="services"
        className="justify-items-center bg-gray-950 text-white pt-5 pb-7 md:pb-[60px] lg:pb-[80px] px-3"
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
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
            <div className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] border-[1px] border-blue-400 bg-gray-800 p-3 rounded-lg text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]">
              <p className="text-[40px] text-neutral-500 font-semibold flex justify-end">
                01
              </p>
              <p className="text-[38px] -mt-2">
                <AiOutlineFundProjectionScreen />
              </p>
              <p className="font-bold py-3 text-[21px] text-blue-300">
                Portfolio & Props Account Management
              </p>
              <p className="min-w-0 max-w-[250px] border-[1px] mt-1 mb-2"></p>
              <p>
                Crafting user coetric digital experiences that seamlessly blend
                aesthetics and functionality. Expert in user-centered design and
                responsive interfaces design and responsive interfaces.
              </p>
            </div>

            <div className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] border-[1px] border-blue-400 bg-gray-800 p-3 rounded-lg text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]">
              <p className="text-[40px] text-neutral-500 font-semibold flex justify-end">
                02
              </p>
              <p className="text-[38px] -mt-2">
                <FaLaptopCode />
              </p>
              <p className="font-bold py-3 text-[21px] text-blue-300">
                Front-End Web Development
              </p>
              <p className="min-w-0 max-w-[250px] border-[1px] mt-1 mb-2"></p>
              <p>
                I use my knowledge of various programming language such as
                HTML5, CSS3, JAVASCRIPT, TAILWIND, REACT, NODE.JS and EXPRESS.JS
                to build digital solutions for users.
              </p>
            </div>

            <div className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] border-[1px] border-blue-400 bg-gray-800 p-3 rounded-lg text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]">
              <p className="text-[40px] text-neutral-500 font-semibold flex justify-end">
                03
              </p>
              <p className="text-[38px] -mt-2">
                <FaCode />
              </p>
              <p className="font-bold py-3 text-[21px] text-blue-300">
                Back-End Web Development
              </p>
              <p className="min-w-0 max-w-[250px] border-[1px] mt-1 mb-2"></p>
              <p>
                Crafting user coetric digital experiences that seamlessly blend
                aesthetics and functionality. Expert in user-centered design and
                responsive interfaces design and responsive interfaces.
              </p>
            </div>

            <div className="shadow-blue-300 shadow-lg hover:shadow-blue-300 hover:shadow-2xl min-w-0 max-w-[350px] border-[1px] border-blue-400 bg-gray-800 p-3 rounded-lg text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]">
              <p className="text-[40px] text-neutral-500 font-semibold flex justify-end">
                04
              </p>
              <p className="text-[38px] -mt-2">
                <BiUserPin />
              </p>
              <p className="font-bold py-3 text-[21px] text-blue-300">
                UI Design
              </p>
              <p className="min-w-0 max-w-[250px] border-[1px] mt-1 mb-2"></p>
              <p>
                Crafting user coetric digital experiences that seamlessly blend
                aesthetics and functionality. Expert in user-centered design and
                responsive interfaces design and responsive interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services