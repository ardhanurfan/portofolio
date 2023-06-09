import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const scaleBig = useTransform(scrollYProgress, [0, 1], ["55%", "120%"]);
  const scaleCloud = useTransform(scrollYProgress, [0, 1], ["75%", "110%"]);
  return (
    <>
      <section className="py-16 lg:py-32" ref={containerRef}>
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex flex-col"
        >
          <div className="relative z-0 flex flex-col items-center justify-center">
            <motion.h1 variants={textVariant(1.1)} className="heroHeading">
              Welcome To
            </motion.h1>
            <motion.h1 variants={textVariant(1.2)} className="heroHeading">
              Ardhan's Space
            </motion.h1>
          </div>
          <div className="relative z-10 -mt-[12px] w-full  md:-mt-[20px]">
            <motion.div
              style={{ scale: scaleBig }}
              animate={{
                scale: [2, 1],
                transition: {
                  type: "tween",
                  duration: 1.75,
                  ease: "easeOut",
                },
              }}
            >
              <img
                src="/big.png"
                alt="cover"
                className="absolute z-10 mt-32 h-[350px] w-full object-cover object-top lg:mt-0 lg:h-[500px]"
              />
            </motion.div>
            <motion.div
              style={{ scale: scaleCloud }}
              animate={{
                scale: [2, 1],
                transition: {
                  type: "tween",
                  duration: 1.5,
                  ease: "easeOut",
                },
              }}
            >
              <img
                src="/cloud.png"
                alt="cover"
                className="relative z-20 mt-72 h-[200px] w-full object-cover object-top md:mt-0 md:h-[500px] lg:h-full lg:scale-[1.25]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
