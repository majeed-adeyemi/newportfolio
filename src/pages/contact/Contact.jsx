import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiBag } from "react-icons/tfi";
import { FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="bg-gray-950 text-white pt-5 md:pt-10 px-3 text-[17px]">
          <motion.h1
            className="text-center font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            GET IN TOUCH
          </motion.h1>

          <motion.h2
            className="font-bold text-[25px] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Contact <span className="text-blue-300">Me</span>.
          </motion.h2>

          <br />

          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            I am currently open to full-time, contract, or part-time
            opportunities in Full Stack Development.
          </motion.p>

          <br />
        </div>

        <div className="flex justify-center bg-gray-950 text-white border-b-[1px] border-b-slate-700 pb-7 md:pt-10 md:pb-[60px] px-3 text-[17px]">
          <motion.div
            className="sm:flex bg-gray-900 justify-center rounded-xl gap-4 py-5 md:px-[60px] w-full md:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="p-3 min-w-0 max-w-[600px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <p>Have an awesome project idea?</p>
              <p className="text-blue-300 font-semibold">Let's Discuss.</p>
              <br />

              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                <span className="border p-1 rounded-full">
                  <FaPhoneAlt />
                </span>
                <a
                  href="tel:+2348104348445"
                  className="text-blue-300 sm:text-[17px]"
                >
                  +44 7405 228 644
                </a>
              </motion.div>

              <br />

              <motion.div
                className="flex gap-1 sm:gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                <span className="border p-1 rounded-full">
                  <MdEmail />
                </span>
                <a
                  href="mailto:adeyemimajeedabolayo92@gmail.com"
                  className="text-blue-300"
                >
                  adeyemimajeedabolayo92@gmail.com
                </a>
              </motion.div>

              <br />

              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                <span className="border p-1 rounded-full">
                  <FaLocationDot />
                </span>
                <span>Leicester, United Kingdom.</span>
              </motion.div>
            </motion.div>

            <motion.form
              className="space-y-1 p-3 min-w-0 lg:w-[500px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
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
                rows={4}
                className="w-full px-3 py-1 bg-inherit border border-blue-400 rounded-lg outline-blue-500"
                placeholder="Enter Message"
              ></textarea>
              <br />
              <br />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2"
              >
                <span>Send Message</span>
                <TfiBag />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to Top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowUp className="text-[20px]" />
        </motion.button>
      )}
    </>
  );
};

export default Contact;
