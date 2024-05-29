import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import Typewriter from "typewriter-effect";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Tilt } from "react-tilt";

function About() {
  return (
    <>
      <section className="relative py-6" id="about">
        <div className="gradient-02 opacity-60 lg:opacity-50" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container mx-auto flex-col"
        >
          <TypingText titles="| About Me"></TypingText>
          <div className="relative z-10 flex flex-wrap">
            <div
              data-aos="fade-up-right"
              className="w-full self-center px-4 py-4 text-slate-900 dark:text-white lg:w-1/2"
            >
              <h1 className="py-2 text-base  font-semibold lg:text-xl">
                Hi everyone
                <span className="mt-2 block text-2xl lg:text-4xl">I'M</span>
              </h1>
              <h1 className="py-2 text-4xl font-bold lg:text-5xl">
                ARDHAN NUR URFAN
              </h1>
              <h2 className="flex py-2 text-xl font-bold lg:text-3xl">
                I Am Into
                <span
                  id="type"
                  className="ml-2 text-sky-500 dark:text-teal-300"
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Mobile Developer",
                        "Frontend Developer",
                        "Backend Developer",
                        "UI/UX Designer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
              </h2>

              <p className="py-2 text-justify text-slate-800 dark:text-slate-300">
                I am an undergraduate student in Information Systems and
                Technology at Bandung Institute of Technology (ITB). I am keenly
                interested in technology and programming, specifically in
                software engineering and data science. With proficiency in
                multiple programming languages and experience in building
                systems, I am motivated to contribute to the tech industry and
                make a positive impact.
              </p>
              <div className="flex w-full justify-center py-4">
                <a
                  href="https://drive.google.com/file/d/12KOBWQSUFsD0pXpB5_Ijus8cKn8-0o3T/view?usp=sharing"
                  className="w-2/3 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 py-3 text-center text-base font-semibold text-white transition duration-500 ease-in-out hover:opacity-50"
                >
                  My Resume
                </a>
              </div>
              <div className="flex w-full justify-center py-4">
                <a
                  href="https://github.com/ardhanurfan"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white md:h-14 md:w-14 md:text-3xl lg:mr-6"
                >
                  <AiFillGithub></AiFillGithub>
                </a>
                <a
                  href="https://instagram.com/ardhanurfan_"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white md:h-14 md:w-14 md:text-3xl lg:mr-6"
                >
                  <BsInstagram></BsInstagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/ardhanurfan/"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white md:h-14 md:w-14 md:text-3xl"
                >
                  <AiFillLinkedin></AiFillLinkedin>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="w-full self-end p-16 md:p-36 lg:w-1/2 lg:p-28"
            >
              <Tilt>
                <img
                  src="/avatar.png"
                  alt="Ardhan Nur Urfan"
                  className="mx-auto max-w-full lg:right-0"
                />
              </Tilt>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
