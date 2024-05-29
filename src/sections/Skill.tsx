import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { TechSkillCard } from "../components/TechSkillCard";

function Skill() {
  return (
    <>
      <section className="container relative py-6 lg:mb-40" id="skills">
        <div className="gradient-03" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText titles="| Professional Skills"></TypingText>
          <TitleText
            titles="Skills Set In Technology"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div className="container grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
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
          <TechSkillCard
            logoUrl={"/tech/golang-icon.svg"}
            nama={"Golang"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/azure.svg"}
            nama={"Azure"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/arduino.svg"}
            nama={"Arduino"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/postman.svg"}
            nama={"Postman"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/mongodb.svg"}
            nama={"MongoDB"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/docker.svg"}
            nama={"Docker"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/gcp.svg"}
            nama={"Google Cloud"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/tflite.svg"}
            nama={"TensorFlow Lite"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/websocket.svg"}
            nama={"Websocket"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/tableau.svg"}
            nama={"Tableau"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/powerbi.svg"}
            nama={"Power BI"}
          ></TechSkillCard>
          <TechSkillCard
            logoUrl={"/tech/grafana.svg"}
            nama={"Grafana"}
          ></TechSkillCard>
        </div>
      </section>
    </>
  );
}

export default Skill;
