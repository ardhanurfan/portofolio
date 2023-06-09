import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => (
  <>
    <footer className="relative bg-sky-700 pt-8 dark:bg-opacity-50">
      <div className="footer-gradient"></div>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-2xl font-bold text-white">ardhanurfan</h2>
            <p className="mb-2 text-xl font-bold">You can also contact me</p>
            <p>ardhanurfan@gmail.com</p>
            <p>Jl. Kebun Binatang No.37A</p>
            <p>Kota Bandung</p>
          </div>
          <div className="mb-8 w-auto px-4 font-medium text-slate-300">
            <h3 className="mb-3 text-xl font-bold">Social Media</h3>
            <a
              href="https://github.com/ardhanurfan"
              className="group mb-2 flex items-center"
            >
              <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white group-hover:border-white group-hover:bg-pink-500 group-hover:text-white dark:border-slate-500 dark:text-slate-500">
                <AiFillGithub></AiFillGithub>
              </div>
              <h3 className="group-hover:text-pink-500">ardhanurfan</h3>
            </a>
            <a
              href="https://instagram.com/ardhanurfan_"
              className="group mb-2 flex items-center"
            >
              <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white group-hover:border-white group-hover:bg-pink-500 group-hover:text-white dark:border-slate-500 dark:text-slate-500">
                <BsInstagram></BsInstagram>
              </div>
              <h3 className="group-hover:text-pink-500">@ardhanurfan_</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/ardhanurfan/"
              className="group mb-2 flex items-center"
            >
              <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white group-hover:border-white group-hover:bg-pink-500 group-hover:text-white dark:border-slate-500 dark:text-slate-500">
                <AiFillLinkedin></AiFillLinkedin>
              </div>
              <h3 className="group-hover:text-pink-500">Ardhan Nur Urfan</h3>
            </a>
          </div>
        </div>
        <div className="w-full border-t border-slate-800 py-2">
          <p className="text-center text-slate-300">Copyright @2023</p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
