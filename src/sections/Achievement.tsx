import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { AchieveCard } from "../components/AchieveCard";

function Achievement() {
  return (
    <>
      <section className="container relative py-6 lg:mb-40" id="achievements">
        <div className="gradient-03" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText titles="| My Journey"></TypingText>
          <TitleText
            titles="Achievements"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <div className="container grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <AchieveCard title={"Scholarship Awardee 2023"} heldBy={"Paragon"} />
          <AchieveCard
            title={"First Winner Hackathon 2023"}
            heldBy={"Dexa Group"}
          />
          <AchieveCard
            title={"First Winner BMC Competition 2023"}
            heldBy={"HIPMI PT UNNES"}
          />
          <AchieveCard
            title={"Top 7 Finalist Business Case 2023"}
            heldBy={"Compfest UI"}
          />
          <AchieveCard
            title={"Top 50 Best Mentee Digistar Class 2023"}
            heldBy={"Telkom Indonesia"}
          />
          <AchieveCard
            title={"First Winner of Video New Business Strategy"}
            heldBy={"Indonesian Talent Week 2020"}
          />
        </div>
      </section>
    </>
  );
}

export default Achievement;
