import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import "../style/navbar.css";
import { useEffect, useRef, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useEventListener } from "usehooks-ts";

function Navbar() {
  const [stickyClass, setStickyClass] = useState("absolute");
  const [openNav, setOpenNav] = useState(false);

  const hamburger = () => {
    setOpenNav(!openNav);
  };

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

  const documentRef = useRef<Document>(document);
  const onClickHamburger = (event: Event) => {
    let cekHamburger = true;
    const doc = document.getElementsByClassName("hamburger");
    for (let index = 0; index < doc.length; index++) {
      cekHamburger = cekHamburger && event.target != doc[index];
    }
    if (cekHamburger) {
      setOpenNav(false);
    }
  };
  useEventListener("click", onClickHamburger, documentRef);

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
                <a
                  href="#"
                  className="flex items-center py-4 text-xl font-extrabold text-pink-500 dark:text-white lg:text-4xl"
                >
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="mr-2 h-6 lg:mr-4 lg:h-10"
                  />
                  <h1>ard.studios</h1>
                </a>
              </div>
              <div className="flex items-center px-4">
                <button
                  onClick={() => hamburger()}
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className={
                    (openNav ? "hamburger-active " : "") +
                    "hamburger absolute right-4 block lg:hidden"
                  }
                >
                  <span className="hamburger-line hamburger origin-top-left"></span>
                  <span className="hamburger-line hamburger"></span>
                  <span className="hamburger-line hamburger origin-bottom-left"></span>
                </button>

                <nav
                  id="nav-menu"
                  className={
                    (openNav ? "" : "hidden ") +
                    "absolute right-0 top-full w-full max-w-[250px] rounded-md bg-white py-5 shadow-lg dark:bg-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
                  }
                >
                  <ul onClick={() => hamburger()} className="block lg:flex">
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
                    <li className="flex items-center pl-8">
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
