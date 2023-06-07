import { Tilt } from "react-tilt";
import { AiFillGithub } from "react-icons/ai";
import { LuView } from "react-icons/lu";

export const ProjectCard = ({
  imageUrl,
  title,
  desc,
  tech,
  urlView,
  urlGithub,
}: {
  imageUrl: string;
  title: string;
  desc: string;
  tech: string;
  urlView: string;
  urlGithub: string;
}) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <div
        data-aos="zoom-out"
        className={
          "group relative aspect-square w-auto overflow-hidden rounded-lg bg-slate-700 bg-opacity-80 md:aspect-[3/4] xl:aspect-[4/3]"
        }
      >
        <img
          src={imageUrl}
          alt="Project Cover"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:-rotate-12 group-hover:scale-125 group-hover:rounded-lg"
        />
        <div className="absolute bottom-0 hidden h-full w-full bg-slate-800 bg-opacity-50 p-2 backdrop-blur-sm group-hover:block md:h-4/5 lg:h-2/3">
          <h1 className="mb-1 w-full text-center text-xs font-medium text-white md:text-lg lg:text-xl">
            {title}
          </h1>
          <p className="text-center text-[8px] font-medium text-white md:text-[10px] lg:text-[12px]">
            {tech}
          </p>
          <p className="text-center text-[8px] font-light text-white md:text-[10px] lg:text-[12px]">
            {desc}
          </p>
          <div className="mt-3 flex justify-center text-center">
            <a
              href={urlGithub}
              className={
                urlGithub == ""
                  ? "hidden"
                  : "" +
                    " btn mx-4 flex h-auto w-1/2 justify-center rounded-lg bg-gradient-to-bl from-sky-500 to-pink-500 p-2 transition duration-500 ease-in-out hover:from-slate-700 hover:to-slate-700"
              }
            >
              <AiFillGithub
                style={{ color: "white" }}
                className="icon-button"
              ></AiFillGithub>
            </a>
            <a
              href={urlView}
              className={
                urlView == ""
                  ? "hidden"
                  : "" +
                    " btn mx-4 flex h-auto w-1/2 justify-center rounded-lg bg-gradient-to-bl from-sky-500 to-pink-500 p-2 transition duration-500 ease-in-out hover:from-slate-700 hover:to-slate-700"
              }
            >
              <LuView
                style={{ color: "white" }}
                className="icon-button"
              ></LuView>
            </a>
          </div>
        </div>
      </div>
    </Tilt>
    // </div>
  );
};
