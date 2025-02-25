import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { TfiBag } from "react-icons/tfi";
import Profilepic from "../../assets/pic1.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <>
      <section>
        <div
          id="about"
          className="bg-gray-900 text-white pb-7 pt-5 md:pt-10 md:pb-[60px] px-3"
          data-aos="fade-up" // Add AOS animation
        >
          <h1 className="flex justify-center font-bold">MY BIO</h1>
          <div className="flex justify-center">
            <h2 className="font-bold text-[25px]">
              About <span className="text-blue-300">Me</span>.
            </h2>
          </div>

          <br />

          <div
            className="md:flex justify-center md:gap-5 lg:gap-[80px]"
            data-aos="fade-in" // Add AOS animation
          >
            <div className="flex justify-center">
              <div
                className="h-auto min-w-0 sm:w-[350px] max-w-[400px]"
                data-aos="zoom-in" // Add AOS animation
              >
                <img
                  src={Profilepic}
                  alt="Majeed's Picture"
                  className="rounded-full p-7 border"
                />
              </div>
            </div>

            <br className="md:hidden" />

            <div className="flex justify-center">
              <div
                className="min-w-0 text-[17px] max-w-[500px]"
                data-aos="fade-right" // Add AOS animation
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  modi mollitia tenetur minima nam, placeat at ullam blanditiis
                  assumenda reprehenderit! Deserunt.
                  <br />
                  <br />
                  Nam consequuntur assumenda eum culpa vitae expedita maxime
                  consequatur nisi temporibus dolore vel tenetur dolor dolorum.
                  Sit laborum aperiam modi laboriosam voluptate. Sed ex facilis.
                  <br />
                  <br />
                  Nam consequuntur assumenda eum culpa vitae expedita maxime
                  consequatur nisi temporibus dolore vel tenetur dolor dolorum.
                  Sed ex facilis.
                  <br />
                  <br />
                  repellat, voluptatem quis magni blanditiis labore laboriosam
                  dolor! Sunt dignissimos, excepturi tenetur autem repellendus
                  omnis quasi dolor.
                </p>

                <br />

                <button className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
                  <span>View Resume</span>
                  <span>
                    <TfiBag />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
