"use-client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import "../style/navbar.css";
import { useEffect, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";

function Navbar() {
  const hamburger = () => {
    document.getElementById("hamburger")?.classList.toggle("hamburger-active");
    document.getElementById("nav-menu")?.classList.toggle("hidden");
  };

  const [stickyClass, setStickyClass] = useState("absolute");

  const stickNavbar = () => {
    const header = document.querySelector("header");
    if (header != null) {
      window.scrollY > header.offsetTop
        ? setStickyClass("navbar-fixed")
        : setStickyClass("absolute");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="relative flex items-center py-8"
      >
        <div className="gradient-01 absolute inset-0 top-0 w-[50%]"></div>
        <header
          className={
            stickyClass +
            " top-0 z-[999] flex w-full items-center transition delay-100 ease-in-out"
          }
        >
          <div className="container">
            <div className="relative flex items-center justify-between">
              <div className="px-4">
                <a href="#" className="block py-4 text-lg font-bold text-white">
                  Ardhan Nur Urfan
                </a>
              </div>
              <div className="flex items-center px-4">
                <button
                  onClick={() => hamburger()}
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className="absolute right-4 block lg:hidden"
                >
                  <span className="hamburger-line origin-top-left "></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line origin-bottom-left"></span>
                </button>

                <nav
                  id="nav-menu"
                  className="absolute right-0 top-full hidden w-full max-w-[250px] rounded-md bg-slate-800 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
                >
                  <ul className="block lg:flex">
                    <li className="group">
                      <a href="#" className="nav-items">
                        Home
                      </a>
                    </li>
                    <li className="group">
                      <a href="#about" className="nav-items">
                        About
                      </a>
                    </li>
                    <li className="group">
                      <a href="#skills" className="nav-items">
                        Skills
                      </a>
                    </li>
                    <li className="group">
                      <a href="#experiences" className="nav-items">
                        Experiences
                      </a>
                    </li>
                    <li className="group">
                      <a href="#projects" className="nav-items">
                        Projects
                      </a>
                    </li>
                    <li className="group">
                      <a href="#contact" className="nav-items">
                        Contact
                      </a>
                    </li>
                    <li className="group h-[40px] w-[80px]">
                      <ToggleDarkMode></ToggleDarkMode>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </motion.nav>
    </>
  );
}

export default Navbar;
