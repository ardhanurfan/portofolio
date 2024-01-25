import { useEffect, useState } from "react";
import { Footer, Navbar } from "./components";
import {
  About,
  Skill,
  Experience,
  Hero,
  Project,
  Contact,
  Achievement,
} from "./sections";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [toTopButton, setToTopButton] = useState("hidden");

  const toTopButtonFun = () => {
    const header = document.querySelector("header");
    if (header != null) {
      window.scrollY > header.offsetTop
        ? setToTopButton("flex")
        : setToTopButton("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toTopButtonFun);

    return () => {
      window.removeEventListener("scroll", toTopButtonFun);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 500,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-white dark:bg-slate-900">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Project />
        <Achievement />
        <Contact />
        <Footer />

        {/* back to top */}
        <a
          href="#"
          id="to-top"
          className={
            toTopButton +
            " fixed bottom-4 right-4 z-[9999] m-auto h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-xl text-white hover:animate-pulse md:h-14 md:w-14 md:text-3xl"
          }
        >
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </a>
      </div>
    </>
  );
}

export default App;
