import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiCoolSpices } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Skills = () => {
  return (
    <>
      <section>
        <div className="flex justify-center bg-gray-950 text-white pt-8 pb-4 px-3">
          <div>
            <motion.div
              className="flex justify-center font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              SKILLS
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-bold text-[25px]">
                Technical <span className="text-blue-300">Skills</span>.
              </h2>
            </motion.div>

            <motion.p
              className="min-w-0 max-w-[600px] leading-7 md:leading-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              laboriosam magnam, quasi ex pariatur non tempore earum explicabo
              repellendus corporis recusandae assumenda numquam possimus
              perspiciatis.
              <br />
              <br />
              ut velit porro itaque perferendis! Quasi accusantium vero
              obcaecati blanditiis tempore. Quos, hic voluptas assumenda earum
              porro a maxime tenetur? Ipsam nemo iusto minima dolorum animi nam
              sequi nesciunt.
            </motion.p>
          </div>
        </div>
        <div
          id="skills"
          className="xl:flex justify-center lg:gap-5 bg-gray-950 text-white pt-5 md:pt-8 px-3 text-[17px]"
        >
          <br />

          <div className="flex justify-center">
            <div className="lg:flex lg:gap-2">
              <motion.div
                className="items-center border hover:border-blue-400 hover:text-blue-300 rounded-2xl p-3 min-w-0 max-w-[550px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                <legend className="text-[22px] font-bold">
                  <span className="text-white">Front-End</span> Development
                  <span className="text-white">.</span>
                </legend>

                <br />

                <motion.div
                  className="flex flex-wrap items-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">HTML5</span>
                    <span className="text-[25px] text-orange-500 hover:text-blue-300">
                      <FaHtml5 />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">CSS3</span>
                    <span className="text-[25px] text-blue-500 hover:text-blue-300">
                      <FaCss3 />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">TAILWIND</span>
                    <span className="text-[25px] text-green-300 hover:text-blue-300">
                      <RiTailwindCssFill />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">REACT</span>
                    <span className="text-[25px] text-blue-200 hover:text-blue-300">
                      <FaReact />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">JAVASCRIPT</span>
                    <span className="text-[23px] text-yellow-400 hover:text-blue-300">
                      <SiJavascript />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">GIT</span>
                    <span className="text-[25px] text-white hover:text-blue-300">
                      <FaGithub />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">MySQL</span>
                    <span className="text-[27px] text-orange-400 hover:text-blue-300">
                      <DiMsqlServer />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">UI DESIGN</span>
                    <span className="text-[25px] text-red-300 hover:text-blue-300">
                      <BiUserPin />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">NODE-JS</span>
                    <span className="text-[25px] text-green-400 hover:text-blue-300">
                      <FaNodeJs />
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              <br />

              <motion.div
                className="items-center border hover:border-blue-400 hover:text-blue-300 rounded-2xl p-3 min-w-0 max-w-[550px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                <legend className="text-[22px] font-bold">
                  <span className="text-white">Back-End</span> Development
                  <span className="text-white">.</span>
                </legend>

                <br />

                <motion.div
                  className="flex flex-wrap items-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >
                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">HTML5</span>
                    <span className="text-[25px] text-orange-500 hover:text-blue-300">
                      <FaHtml5 />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">CSS3</span>
                    <span className="text-[25px] text-blue-500 hover:text-blue-300">
                      <FaCss3 />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">TAILWIND</span>
                    <span className="text-[25px] text-green-300 hover:text-blue-300">
                      <RiTailwindCssFill />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">REACT</span>
                    <span className="text-[25px] text-blue-200 hover:text-blue-300">
                      <FaReact />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">JAVASCRIPT</span>
                    <span className="text-[23px] text-yellow-400 hover:text-blue-300">
                      <SiJavascript />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">GIT</span>
                    <span className="text-[25px] text-white hover:text-blue-300">
                      <FaGithub />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">MySQL</span>
                    <span className="text-[27px] text-orange-400 hover:text-blue-300">
                      <DiMsqlServer />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">UI DESIGN</span>
                    <span className="text-[25px] text-red-300 hover:text-blue-300">
                      <BiUserPin />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                    <span className="text-white">NODE-JS</span>
                    <span className="text-[25px] text-green-400 hover:text-blue-300">
                      <FaNodeJs />
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-gray-950 text-white border-b-[1px] border-b-slate-700 pb-7 pt-7 md:py-[40px] px-3 text-[17px]">
          <motion.div
            className="items-center border hover:border-blue-400 hover:text-blue-300 rounded-2xl p-3 min-w-0 max-w-[550px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <legend className="text-[22px] font-bold">
              <span className="text-white">Portfolio</span> Management
              <span className="text-white">.</span>
            </legend>

            <br />

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">
                  ANALYTICAL SKILLS
                </span>
                <span className="text-[25px] text-orange-500 hover:text-blue-300">
                  <BiAnalyse />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">DISCIPLINE</span>
                <span className="text-[23px] text-green-300 hover:text-blue-300">
                  <FaBrain />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">RISK MANAGEMENT</span>
                <span className="text-[25px] text-blue-200 hover:text-blue-300">
                  <MdManageAccounts />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">MARKET KNOWLEDGE</span>
                <span className="text-[25px] text-blue-200 hover:text-blue-300">
                  <GiBrain />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">
                  EMOTIONAL CONTROL
                </span>
                <span className="text-[23px] text-white hover:text-blue-300">
                  <GiCoolSpices />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 border-[2px] border-blue-300 rounded-full p-3 sm:p-7 h-[50px] font-semibold">
                <span className="text-white text-[15px]">FINANCIAL ACUMEN</span>
                <span className="text-[20px] text-yellow-400 hover:text-blue-300">
                  <FaMoneyBillTrendUp />
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;