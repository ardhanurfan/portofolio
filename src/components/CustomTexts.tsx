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
    className={
      textStyles +
      " mt-[120px] text-base font-normal text-pink-900 dark:text-white"
    }
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
      " mb-4 mt-2 text-[32px] font-bold leading-[32px] text-sky-900 dark:text-white md:py-8 md:text-[64px] md:leading-[64px]"
    }
  >
    {titles}
  </motion.h2>
);
