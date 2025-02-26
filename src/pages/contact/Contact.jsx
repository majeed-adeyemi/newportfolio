import React, { useState, useEffect } from "react";
import { TfiBag } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section>
        <div
          id="contact"
          className="bg-gray-950 text-white  pt-5 md:pt-10 px-3 text-[17px]"
        >
          <h1 className="text-center font-bold">GET IN TOUCH</h1>
          <h2 className="font-bold text-[25px] text-center">
            Contact <span className="text-blue-300">Me</span>.
          </h2>

          <br />

          <p className="text-center">
            I am currently open to full-time, contract or part-time
            opportunities in Full Stack Development.
          </p>

          <br />
        </div>

        <div className="flex justify-center bg-gray-950 text-white border-b-[1px] border-b-slate-700 pb-7 md:pt-10 md:pb-[60px] px-3 text-[17px]">
          <div className="sm:flex bg-gray-900 justify-center rounded-xl gap-4 py-5 md:px-[60px] w-full md:w-auto">
            <div className="p-3 min-w-0 max-w-[600px]">
              <p>Have an awesome project idea?</p>
              <p className="text-blue-300 font-semibold">Let's Discuss.</p>

              <br />

              <div className="flex gap-2">
                <span className="border p-1 rounded-full">
                  <FaPhoneAlt />
                </span>
                <a
                  href="tel:+2348104348445"
                  className="text-[15px] text-blue-300 sm:text-[17px]"
                >
                  +44 7405 228 644
                </a>
              </div>

              <br />

              <div className="flex gap-1 sm:gap-2">
                <span className="border p-1 rounded-full">
                  <MdEmail />
                </span>
                <a
                  href="mailto:adeyemimajeedabolayo92@gmail.com"
                  className="text-[14.7px] sm:text-[17px] text-blue-300"
                >
                  adeyemimajeedabolayo92@gmail.com
                </a>
              </div>

              <br />

              <div className="flex gap-2">
                <span className="border p-1 rounded-full">
                  <FaLocationDot />
                </span>
                <span className="text-[15px] sm:text-[17px]">
                  Leicester, United Kingdom.
                </span>
              </div>
            </div>

            <br />

            <form action="" className="space-y-1 p-3 min-w-0 lg:w-[500px]">
              <label htmlFor="full-name">Full Name</label> <br />
              <input
                type="text"
                className="w-full px-3 py-1 bg-inherit border border-blue-400 rounded-lg outline-blue-500"
                placeholder="Enter Full Name"
              />
              <br />
              <br />
              <label htmlFor="e-mail">Email Address</label> <br />
              <input
                type="email"
                className="w-full px-3 py-1 bg-inherit border border-blue-400 rounded-lg outline-blue-500"
                placeholder="Enter Email Address"
              />
              <br />
              <br />
              <label htmlFor="message">Message</label> <br />
              <textarea
                type="text"
                rows={4}
                className="w-full px-3 py-1 bg-inherit border border-blue-400 rounded-lg outline-blue-500"
                placeholder="Enter Message"
              ></textarea>
              <br />
              <br />
              <button className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
                <span>Send Message</span>
                <span>
                  <TfiBag />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-[20px]" />
        </button>
      )}
    </>
  );
};

export default Contact;
