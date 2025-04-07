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
        <div className="container flex flex-wrap justify-center gap-3 md:gap-4">
          <AchieveCard
            title={
              "Top 9 Huawei Developer Competition 2024, Asia Pacific Enterprise Track 2024"
            }
            heldBy={"Huawei"}
          />
          <AchieveCard
            title={"Third Winner Youth Economic Leadership Program 2024"}
            heldBy={"Central Bank of Indonesia"}
          />
          <AchieveCard
            title={"First Winner FindIT Hackathon 2024"}
            heldBy={"DTETI UGM"}
          />
          <AchieveCard
            title={"First Winner Hackathon 2023"}
            heldBy={"Dexa Group"}
          />
          <AchieveCard title={"Scholarship Awardee 2023"} heldBy={"Paragon"} />
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
