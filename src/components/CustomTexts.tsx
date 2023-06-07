"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({
  titles,
  textStyles,
}: {
  textStyles: string;
  titles: string;
}) => (
  <motion.p
    variants={textContainer}
    className={textStyles + " font-normal text-base text-white mt-[120px]"}
  >
    {Array.from(titles).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  titles,
  textStyles,
}: {
  textStyles: string;
  titles: string;
}) => (
  <motion.h2
    variants={textContainer}
    className={
      textStyles +
      " mt-2 font-bold text-[32px] text-white leading-[32px] md:leading-[64px] md:text-[64px] mb-4 md:py-8"
    }
  >
    {titles}
  </motion.h2>
);
