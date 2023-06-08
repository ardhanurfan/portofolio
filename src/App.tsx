import { useEffect, useState } from "react";
import { Footer, Navbar } from "./components";
import { About, Skill, Experience, Hero, Project, Contact } from "./sections";
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
        <Contact />
        <Footer />

        {/* back to to */}
        <a
          href="#"
          id="to-top"
          className={
            toTopButton +
            " fixed bottom-4 right-4 z-[9999] m-auto h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-3xl text-white hover:animate-pulse"
          }
        >
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </a>
      </div>
    </>
  );
}

export default App;
