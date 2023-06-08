"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import Typewriter from "typewriter-effect";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function About() {
  return (
    <>
      <section className="relative py-6 lg:mb-40" id="about">
        <div className="gradient-02 opacity-60 lg:opacity-50" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container mx-auto flex-col"
        >
          <TypingText
            textStyles="font-light mt-8 text-base md:text-xl lg:text-2xl text-slate-300 flexCenter lg:mb-12"
            titles="| About Me"
          ></TypingText>
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

              <p className="py-2 text-slate-800 dark:text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde
                in ab minima illum nulla fugiat expedita culpa deleniti rerum.
              </p>
              <div className="flex w-full justify-center py-4">
                <a
                  href=""
                  className="w-2/3 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 py-3 text-center text-base font-semibold text-white transition duration-500 ease-in-out hover:opacity-50"
                >
                  My Resume
                </a>
              </div>
              <div className="flex w-full justify-center py-4">
                <a
                  href="https://github.com/ardhanurfan"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white lg:mr-6 lg:h-14 lg:w-14 lg:text-3xl"
                >
                  <AiFillGithub></AiFillGithub>
                </a>
                <a
                  href="https://instagram.com/ardhanurfan_"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white lg:mr-6 lg:h-14 lg:w-14 lg:text-3xl"
                >
                  <BsInstagram></BsInstagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/ardhanurfan/"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-500 text-slate-500 hover:border-white hover:bg-pink-500 hover:text-white lg:h-14 lg:w-14 lg:text-3xl"
                >
                  <AiFillLinkedin></AiFillLinkedin>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="w-full self-end px-4 py-4 lg:w-1/2"
            >
              <img
                src="/avatar.png"
                alt="Ardhan Nur Urfan"
                className="mx-auto max-w-full lg:right-0"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
