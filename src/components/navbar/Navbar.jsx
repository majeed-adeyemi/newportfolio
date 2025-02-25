import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsSticky(false);
      } else if (currentScrollY < lastScrollY) {
        setIsSticky(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0" : "relative"
      } bg-gray-950 shadow-gray-700 shadow-lg transition-transform duration-300`}
    >
      <div className="text-white lg:pt-5 px-4 py-3 flex justify-between items-center lg:justify-around">
        {/* H1 tag always visible */}
        <h1 className="text-xl z-40 font-bold">Majeed Adeyemi</h1>

        <button
          onClick={toggleMenu}
          className="text-white text-[30px] lg:hidden"
        >
          <CgMenuRight />
        </button>

        <div
          className={`fixed inset-y-0 right-0 pt-[50px] lg:pt-2 pr-6 z-30 w-full lg:w-auto lg:border-[2px] lg:border-gray-700 lg:rounded-full bg-gray-800 lg:bg-inherit px-2 py-2 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:relative lg:translate-x-0 lg:flex lg:space-x-4`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white text-[30px] lg:hidden"
          >
            <MdCancel />
          </button>

          <Link
            to="/"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 md:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            About
          </Link>

          <Link
            to="/skills"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            Skills
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
          >
            Contact
          </Link>

          <div className="block mt-4 lg:hidden">
            <button className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
              <span>View Resume</span>
              <span>
                <TfiBag />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden lg:block md:mt-0">
          <button className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
            <span>View Resume</span>
            <span>
              <TfiBag />
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div onClick={closeMenu} className="fixed inset-0 z-20 lg:hidden"></div>
      )}
    </nav>
  );
};

export default Navbar;
