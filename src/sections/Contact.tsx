import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="container relative py-6" id="contact">
        <div className="contact-gradient" />
        <motion.div
          variants={staggerContainer(1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex-col"
        >
          <TypingText
            textStyles="font-light mt-8 text-base md:text-xl lg:text-2xl text-slate-300 flexCenter"
            titles="| Contact Me"
          ></TypingText>
          <TitleText
            titles="Contact Me For Any Questions or Bussiness"
            textStyles={"text-center"}
          ></TitleText>
        </motion.div>
        <form className="mb-20">
          <div
            data-aos="fade-up"
            className="mx-auto w-full rounded-lg bg-slate-800 py-4 dark:bg-slate-500 dark:bg-opacity-10 lg:w-2/3"
          >
            <div className="container mb-8 w-full px-4">
              <label htmlFor="name" className="text-base font-bold text-white ">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md bg-slate-100 p-3 text-slate-900 focus:border-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="container mb-8 w-full px-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md bg-slate-100 p-3 text-slate-900 focus:border-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="container mb-8 w-full px-4">
              <label
                htmlFor="messages"
                className="text-base font-bold text-white "
              >
                Messages
              </label>
              <textarea
                id="messages"
                className="h-32 w-full
              rounded-md bg-slate-100 p-3 text-slate-900 focus:border-2
              focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              ></textarea>
            </div>
            <div className="w-full  px-4">
              <button className="flex w-full items-center justify-center rounded-full bg-pink-500 py-3 text-base font-semibold text-white transition duration-500 ease-in-out hover:opacity-50">
                <div className="mr-2">Contact Me</div>
                <FaTelegramPlane></FaTelegramPlane>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
