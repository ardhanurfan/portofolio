"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => (
  <>
    <footer className="relative bg-sky-700 bg-opacity-50 pt-8">
      <div className="footer-gradient"></div>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-8 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-white text-2xl mb-5">ardhanurfan</h2>
            <p className="font-bold text-xl mb-2">You can also contact me</p>
            <p>ardhanurfan@gmail.com</p>
            <p>Jl. Kebun Binatang No.37A</p>
            <p>Kota Bandung</p>
          </div>
          <div className="w-auto px-4 mb-8 text-slate-300 font-medium">
            <h3 className="font-bold text-xl mb-3">Social Media</h3>
            <a
              href="https://github.com/ardhanurfan"
              className="flex items-center mb-2 group"
            >
              <div className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 mr-3 group-hover:text-white group-hover:border-white group-hover:bg-pink-500">
                <AiFillGithub></AiFillGithub>
              </div>
              <h3 className="group-hover:text-pink-500">ardhanurfan</h3>
            </a>
            <a
              href="https://instagram.com/ardhanurfan_"
              className="flex items-center mb-2 group"
            >
              <div className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 mr-3 group-hover:text-white group-hover:border-white group-hover:bg-pink-500">
                <BsInstagram></BsInstagram>
              </div>
              <h3 className="group-hover:text-pink-500">@ardhanurfan_</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/ardhanurfan/"
              className="flex items-center mb-2 group"
            >
              <div className="w-9 h-9 rounded-full flex justify-center items-center border-2 border-slate-500 text-slate-500 mr-3 group-hover:text-white group-hover:border-white group-hover:bg-pink-500">
                <AiFillLinkedin></AiFillLinkedin>
              </div>
              <h3 className="group-hover:text-pink-500">Ardhan Nur Urfan</h3>
            </a>
          </div>
        </div>
        <div className="w-full py-2 border-t border-slate-800">
          <p className="text-center text-slate-300">Copyright @2023</p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
