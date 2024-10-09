import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { ExperienceCard } from "../components/ExperienceCard";

function Experience() {
  return (
    <>
      <section className="container relative py-6 lg:mb-40" id="experiences">
        <div className="gradient-04" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText titles="| Experiences"></TypingText>
          <TitleText
            titles="Experiences About Technology"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div data-aos="zoom-in" data-aos-delay="0" className="container">
          <div className="absolute -z-10 h-full w-1 rounded-full bg-sky-950 dark:bg-slate-300 lg:left-1/2"></div>
          <ExperienceCard
            title={"Central Bank of Indonesia"}
            position={
              "Analyst | Kampus Merdeka Bank Indonesia Internship Program"
            }
            year={"Sep 2024 - Dec 2024"}
            urutan={0}
          ></ExperienceCard>
          <ExperienceCard
            title={"PT Kalbe Farma"}
            position={"Software Engineer | Internship"}
            year={"Jan 2024 - Sep 2024"}
            urutan={1}
          ></ExperienceCard>
          <ExperienceCard
            title={"PLN Icon Plus"}
            position={"Software Engineer | Internship"}
            year={"Jun 2023 - Dec 2023"}
            urutan={2}
          ></ExperienceCard>
          <ExperienceCard
            title={"Involuntir"}
            position={"Mobile App Developer | Internship"}
            year={"Jun 2023 - Sep 2023"}
            urutan={3}
          ></ExperienceCard>
          <ExperienceCard
            title={"Ganesha Student Innovation Summit"}
            position={"Web Developer | IT Manager"}
            year={"Apr 2023 - Oct 2023"}
            urutan={4}
          ></ExperienceCard>
          <ExperienceCard
            title={"Bank Mandiri x Rakamin Academy"}
            position={"Mobile App Developer | Project-Based Virtual Intern"}
            year={"May 2023 - Jun 2023"}
            urutan={5}
          ></ExperienceCard>
          <ExperienceCard
            title={"Inkubator IT HMIF ITB"}
            position={"Mobile App, Backend Developer | Programmer"}
            year={"Feb 2023 - Present"}
            urutan={6}
          ></ExperienceCard>
          <ExperienceCard
            title={"Arkavidia 8.0 HMIF ITB"}
            position={"UI/UX Desainer | Event Staff"}
            year={"Sep 2022 - Jan 2023"}
            urutan={7}
          ></ExperienceCard>
          <ExperienceCard
            title={"Saba ExploIT"}
            position={"Desiner, Videographer, Programmer | President"}
            year={"Sep 2018 - Oct 2020"}
            urutan={8}
          ></ExperienceCard>
        </div>
      </section>
    </>
  );
}

export default Experience;
