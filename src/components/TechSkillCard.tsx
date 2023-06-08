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
        className="group relative aspect-[4/3] w-auto overflow-hidden rounded-lg bg-slate-100 bg-opacity-80 transition-all duration-300 ease-in-out hover:bg-slate-800 dark:bg-slate-700 dark:bg-opacity-80"
      >
        <img
          src={logoUrl}
          alt="TechStack"
          className="absolute h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:blur-2xl group-hover:grayscale-0"
        />
        <img
          src={logoUrl}
          alt="TechStack"
          className="image-tilt absolute bottom-0 left-1/2 top-2 z-10 h-10 w-auto -translate-x-1/2 object-cover object-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 md:top-4 md:h-16 lg:h-20"
        />
        <h1 className="absolute bottom-2 w-full text-center text-sm font-medium text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 md:bottom-4 md:text-lg lg:text-xl">
          {nama}
        </h1>
      </div>
    </Tilt>
  );
};
