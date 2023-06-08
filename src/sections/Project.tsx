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
          <TypingText
            textStyles="font-light mt-8 text-base md:text-xl lg:text-2xl text-slate-300 flexCenter"
            titles="| Projects"
          ></TypingText>
          <TitleText
            titles="Last My Works"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:col-start-1 md:row-start-1">
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
          </div>
          <div className="md:col-start-3 md:row-start-1">
            <ProjectCard
              imageUrl={"/project/Gen-S.png"}
              title={"Gen-S"}
              desc={
                "Audio App for islamic story with Image, Playlist, Galleries. Available on App Store, Playstore"
              }
              urlView={
                "https://play.google.com/store/apps/details?id=id.my.application.gens"
              }
              urlGithub={"https://github.com/ardhanurfan/Gen-S"}
              tech={"Flutter, Laravel"}
            ></ProjectCard>
          </div>
          <div className="md:col-start-4 md:row-start-1">
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
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <ProjectCard
              imageUrl={"/project/SimpliCity.png"}
              title={"Sim-Plicity"}
              desc={"Game like the sims but in simple version."}
              urlView={""}
              urlGithub={"https://github.com/ardhanurfan/Sim-Plicity"}
              tech={"Java, Gradle"}
            ></ProjectCard>
          </div>
          <div className="md:col-start-3 md:row-start-2">
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
          </div>
          <div className="md:col-start-2 md:row-start-3">
            <ProjectCard
              imageUrl={"/project/ArmField.png"}
              title={"Armfield"}
              desc={
                "Website of the Miniplant Monitoring System. Displays a dashboard of the testing database."
              }
              urlView={""}
              urlGithub={"https://github.com/ardhanurfan/HMI-Armfield"}
              tech={"React, Laravel"}
            ></ProjectCard>
          </div>
          <div className="md:col-start-4 md:row-start-3">
            <ProjectCard
              imageUrl={"/project/project.png"}
              title={"Regsosek"}
              desc={
                "Aplikasi mobile mengenai kesehatan mental dengan fitur sosial di dalamnya"
              }
              urlView={""}
              urlGithub={""}
              tech={""}
            ></ProjectCard>
          </div>
          <div className="md:col-start-1 md:row-start-4">
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
          </div>
          <div className="md:col-start-3 md:row-start-4">
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
          </div>
          <div className="md:col-start-4 md:row-start-4">
            <ProjectCard
              imageUrl={"/project/CIS.png"}
              title={"Identity Scanners"}
              desc={
                "Integration application for electronic identity with NFC to remove physic card's copy"
              }
              urlView={""}
              urlGithub={
                "https://github.com/ardhanurfan/front-end-cis-milestone"
              }
              tech={"Flutter"}
            ></ProjectCard>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
