import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { ProjectCard } from "../components/ProjectCard";

function Project() {
  return (
    <>
      <section className="container relative py-6 lg:mb-40" id="projects">
        <div className="gradient-05" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText titles="| Projects"></TypingText>
          <TitleText
            titles="Last My Works"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <ProjectCard
            imageUrl={"/project/MediGuard.png"}
            title={"MediGuard"}
            desc={
              "Website, Mobile Apps, IoT for pharmaceautical logistics monitoring"
            }
            urlGithub={"https://github.com/ardhanurfan/MediGuard-web"}
            tech={"Flutter, NodeJS, React, WebSockets, MQTT"}
            urlView={""}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/GSIS.jpg"}
            title={"Ganesha Summit 2023"}
            desc={
              "Website for event management of Ganesha Student Innovation Summit 2023"
            }
            urlView={"https://ganeshasummit.com"}
            urlGithub={"https://github.com/ardhanurfan/frontend-gsis"}
            tech={"React, Laravel"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/MindMe.png"}
            title={"MindMe"}
            desc={
              "Mobile App for mental health. Social, Articles, Videos, Consultants. Available on Playstore"
            }
            urlView={
              "https://play.google.com/store/apps/details?id=com.algod.mindme"
            }
            urlGithub={"https://github.com/ardhanurfan/MindMe"}
            tech={"Flutter, Firebase"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/Gen-S.png"}
            title={"Gen-S"}
            desc={
              "Audio App for islamic story with Image, Playlist, Galleries. Available on App Store, Playstore"
            }
            urlView={"https://apps.apple.com/id/app/gen-s/id6449827681?l=id"}
            urlGithub={"https://github.com/ardhanurfan/Gen-S"}
            tech={"Flutter, Laravel, MySQL"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/Moodly.png"}
            title={"Moodly"}
            desc={
              "Mobile App for mood tracker and chat consultation about mental health."
            }
            urlView={
              "https://drive.google.com/file/d/1raksMi9D37xN_9RHkGJvD2UjMbR-EPlj/view?usp=sharing"
            }
            urlGithub={"https://github.com/ardhanurfan/Moodly"}
            tech={"Flutter, Firebase"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/SimpliCity.png"}
            title={"Sim-Plicity"}
            desc={"Game like the sims but in simple version."}
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/Sim-Plicity"}
            tech={"Java, Gradle"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/NewsApp.png"}
            title={"NewsApp"}
            desc={
              "News mobile application. This application uses the API from newsapi.org."
            }
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/NewsApp"}
            tech={"Kotlin"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/ArmField.png"}
            title={"Armfield"}
            desc={
              "Website of the Miniplant Monitoring System. Displays a dashboard of the testing database."
            }
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/HMI-Armfield"}
            tech={"React, Laravel, MySQL"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/Regsosek.png"}
            title={"Regsosek"}
            desc={"Questionnaire application to collect population data."}
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/regsosek"}
            tech={"Java, MySQL"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/Moviez.png"}
            title={"Moviez"}
            desc={
              "User Interface code of movies review mobile application. Design by Shayna Kit."
            }
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/moviez-streaming"}
            tech={"Flutter"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/AirTicket.png"}
            title={"AirTicket"}
            desc={
              "Mobile application for ticket booking. Designed by BuildWithAngga."
            }
            urlView={
              "https://drive.google.com/file/d/17z1-7guvmIbVaolvDb1oV4HWGTZ1ToW6/view?usp=sharing"
            }
            urlGithub={"https://github.com/ardhanurfan/Airplane-Ticket"}
            tech={"Flutter, Firebase"}
          ></ProjectCard>
          <ProjectCard
            imageUrl={"/project/CIS.png"}
            title={"Identity Scanners"}
            desc={
              "Integration application for electronic identity with NFC to remove physic card's copy"
            }
            urlView={""}
            urlGithub={"https://github.com/ardhanurfan/front-end-cis-milestone"}
            tech={"Flutter"}
          ></ProjectCard>
        </div>
      </section>
    </>
  );
}

export default Project;
