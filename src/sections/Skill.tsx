import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { TechSkillCard } from "../components/TechSkillCard";

function Skill() {
  return (
    <>
      <section className="relative py-6 container lg:mb-40" id="skills">
        <div className="gradient-03" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText
            textStyles="font-light mt-8 text-base md:text-xl lg:text-2xl text-slate-300 flexCenter"
            titles="| Professional Skills"
          ></TypingText>
          <TitleText
            titles="Skills Set In Technology"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div className="container grid grid-cols-3 gap-3 md:gap-4 md:grid-cols-4 lg:grid-cols-6">
          <TechSkillCard
            logoUrl={"/tech/flutter.svg"}
            nama={"Flutter"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/laravel.svg"}
            nama={"Laravel"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/react-2.svg"}
            nama={"React"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/kotlin-1.svg"}
            nama={"Kotlin"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/firebase-2.svg"}
            nama={"Firebase"}
          ></TechSkillCard>
          <TechSkillCard logoUrl={"/tech/c-1.svg"} nama={"C"}></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/Figma-logo.svg"}
            nama={"Figma"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/java-4.svg"}
            nama={"Java"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/nodejs-icon.svg"}
            nama={"NodeJS"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/mysql.svg"}
            nama={"MySQL"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/postgresql.svg"}
            nama={"PosgreSQL"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/python.svg"}
            nama={"Python"}
          ></TechSkillCard>
        </div>
      </section>
    </>
  );
}

export default Skill;
