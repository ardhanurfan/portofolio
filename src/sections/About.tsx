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
          <div className="flex flex-wrap relative z-10">
            <div
              data-aos="fade-up-right"
              className="w-full self-center px-4 py-4 lg:w-1/2"
            >
              <h1 className="text-base font-semibold text-white py-2 lg:text-xl">
                Hi everyone
                <span className="mt-2 block text-2xl lg:text-4xl">I'M</span>
              </h1>
              <h1 className="text-white font-bold text-4xl py-2 lg:text-5xl">
                ARDHAN NUR URFAN
              </h1>
              <h2 className="text-white font-bold text-xl py-2 lg:text-3xl flex">
                I Am Into
                <span id="type" className="ml-2 text-teal-300">
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

              <p className="py-2 text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde
                in ab minima illum nulla fugiat expedita culpa deleniti rerum.
              </p>
              <div className="flex w-full py-4 justify-center">
                <a
                  href=""
                  className="text-base text-center font-semibold text-white py-3 w-2/3 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 hover:opacity-50 transition duration-500 ease-in-out"
                >
                  My Resume
                </a>
              </div>
              <div className="flex w-full py-4 justify-center">
                <a
                  href="https://github.com/ardhanurfan"
                  className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 mr-3 hover:text-white hover:border-white hover:bg-pink-500 lg:h-14 lg:w-14 lg:text-3xl lg:mr-6"
                >
                  <AiFillGithub></AiFillGithub>
                </a>
                <a
                  href="https://instagram.com/ardhanurfan_"
                  className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 mr-3 hover:text-white hover:border-white hover:bg-pink-500 lg:h-14 lg:w-14 lg:text-3xl lg:mr-6"
                >
                  <BsInstagram></BsInstagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/ardhanurfan/"
                  className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 hover:text-white hover:border-white hover:bg-pink-500 lg:h-14 lg:w-14 lg:text-3xl"
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
                className="max-w-full mx-auto lg:right-0"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
