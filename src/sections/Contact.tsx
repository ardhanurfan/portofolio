import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="relative py-6 container" id="contact">
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
            className="w-full lg:w-2/3 mx-auto  bg-slate-500 rounded-lg bg-opacity-10 py-4"
          >
            <div className="container w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-white ">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-100 text-slate-900 p-3 rounded-md focus:outline-none focus:border-2 focus:ring-sky-500 focus:ring-1 focus:border-sky-500"
              />
            </div>
            <div className="container w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-100 text-slate-900 p-3 rounded-md focus:outline-none focus:border-2 focus:ring-sky-500 focus:ring-1 focus:border-sky-500"
              />
            </div>
            <div className="container w-full px-4 mb-8">
              <label
                htmlFor="messages"
                className="text-base font-bold text-white "
              >
                Messages
              </label>
              <textarea
                id="messages"
                className="w-full bg-slate-100
              text-slate-900 p-3 rounded-md focus:outline-none focus:border-2
              focus:ring-sky-500 focus:ring-1 focus:border-sky-500 h-32"
              ></textarea>
            </div>
            <div className="w-full  px-4">
              <button className="flex items-center justify-center text-base font-semibold text-white py-3 w-full rounded-full bg-pink-500 hover:opacity-50 transition duration-500 ease-in-out">
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
