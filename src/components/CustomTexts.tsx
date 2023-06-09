import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ titles }: { titles: string }) => (
  <motion.p
    variants={textContainer}
    className={
      "mt-[120px] flex items-center justify-center text-base font-normal text-sky-950 dark:text-white md:text-xl lg:text-2xl"
    }
  >
    {Array.from(titles).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
    {/* {titles} */}
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
