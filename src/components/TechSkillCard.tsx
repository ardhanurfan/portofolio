import { Tilt } from "react-tilt";

export const TechSkillCard = ({
  logoUrl,
  nama,
}: {
  logoUrl: string;
  nama: string;
}) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 50, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <div
        data-aos="zoom-in"
        className="w-auto aspect-[4/3] bg-slate-700 bg-opacity-80 rounded-lg overflow-hidden relative group hover:bg-slate-800 transition-all duration-300 ease-in-out"
      >
        <img
          src={logoUrl}
          alt="TechStack"
          className="w-full h-full object-cover object-center absolute group-hover:grayscale-0 group-hover:blur-2xl transition-all duration-300 ease-in-out"
        />
        <img
          src={logoUrl}
          alt="TechStack"
          className="image-tilt w-auto h-10 absolute top-2 left-1/2 bottom-0 -translate-x-1/2 opacity-0 object-cover object-center z-10 group-hover:opacity-100 md:h-16 md:top-4 lg:h-20 transition-all duration-300 ease-in-out"
        />
        <h1 className="absolute bottom-2 opacity-0 text-white w-full text-center font-medium text-sm md:text-lg md:bottom-4 lg:text-xl group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {nama}
        </h1>
      </div>
    </Tilt>
  );
};
