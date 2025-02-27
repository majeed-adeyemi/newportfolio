import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Disable scroll on mobile/tablet when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounted
    };
  }, [isOpen]);

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0" : "relative"
      } bg-gray-950 shadow-gray-700 shadow-lg transition-transform duration-300 z-50`}
    >
      <div className="text-white lg:pt-5 px-4 py-3 flex justify-between items-center lg:justify-around">
        <Link to={"/"} className="text-xl z-50 font-bold">
          Majeed Adeyemi
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-[30px] lg:hidden z-50"
        >
          {isOpen ? <MdCancel /> : <CgMenuRight />}
        </button>

        {/* Mobile & Tablet Menu */}
        <div
          className={`fixed inset-y-0 right-0 pt-[50px] lg:pt-2 pr-6 z-40 w-3/4 lg:w-auto lg:border-[2px] lg:border-gray-700 lg:rounded-full bg-gray-800 lg:bg-inherit px-2 py-2 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:relative lg:translate-x-0 lg:flex lg:space-x-4`}
        >
          {/* Navigation Links */}
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Skills", path: "/skills" },
            { name: "Services", path: "/services" },
            { name: "Projects", path: "/portfolio" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="block mt-4 text-lg lg:mt-0 rounded-lg px-2 font-semibold hover:text-blue-200 lg:hover:shadow-xl lg:hover:shadow-blue-200"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Resume Button */}
          <div className="block mt-4 lg:hidden">
            <Link to={"/contact"} className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
              <span>Book a Call</span>
              <span>
                <IoCall />
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden lg:block md:mt-0">
          <Link to={"/contact"} className="bg-inherit flex justify-center items-center gap-2 text-[17px] font-bold border hover:text-blue-400 hover:shadow-blue-300 hover:shadow-md active:text-blue-500 border-blue-400 text-blue-300 rounded-lg p-2">
            <span>Book a Call</span>
            <span>
              <IoCall />
            </span>
          </Link>
        </div>
      </div>

      {/* Backdrop to close menu when clicking outside */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
