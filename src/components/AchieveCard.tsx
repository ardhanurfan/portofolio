import { Tilt } from "react-tilt";

export const AchieveCard = ({
  title,
  heldBy,
}: {
  title: string;
  heldBy: string;
}) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 50, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt
      className="aspect-[3/1] w-full md:w-[48%] xl:w-[32%]"
      options={defaultOptions}
    >
      <div
        data-aos="zoom-in"
        className="relative flex aspect-[3/1] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-500 bg-opacity-60 p-2 backdrop-blur-xl transition-all duration-300 ease-in-out dark:bg-slate-100 dark:bg-opacity-40"
      >
        <h1 className="mb-2 w-full text-center text-sm font-medium text-white lg:text-xl">
          {title}
        </h1>
        <h1 className="w-full text-center text-[10px] font-medium text-white md:text-[12px] lg:text-sm">
          {heldBy}
        </h1>
      </div>
    </Tilt>
  );
};
