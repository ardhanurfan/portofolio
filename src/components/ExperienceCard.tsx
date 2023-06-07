export const ExperienceCard = ({
  title,
  position,
  year,
  urutan,
}: {
  title: string;
  position: string;
  year: string;
  urutan: number;
}) => {
  if (urutan % 2 === 0) {
    return (
      <div data-aos="fade-up" className="flex w-full flex-row py-2">
        <div className="segitiga-kiri my-auto lg:hidden"></div>
        <div className="ml-2 w-full justify-end lg:flex lg:w-1/2 ">
          <div className="mr-2 h-auto w-full rounded-lg bg-gradient-to-r from-sky-500 to-pink-500 p-2 px-4 shadow-sm md:p-4 md:px-8 lg:from-pink-500 lg:to-sky-500 lg:px-12 lg:text-end">
            <h1 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              {title}
            </h1>
            <h2 className="text-[12px] font-semibold text-white md:text-sm lg:text-lg">
              {position}
            </h2>
            <h2 className="font-regular text-[12px] text-white md:text-sm lg:text-lg">
              {year}
            </h2>
          </div>
          <div className="segitiga-kanan my-auto mr-2 hidden lg:block"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div data-aos="fade-up" className="flex w-full py-2 lg:flex-row-reverse">
        <div className="segitiga-kiri my-auto lg:hidden"></div>
        <div className="ml-2 w-full justify-end lg:flex lg:w-1/2">
          <div className="segitiga-kiri my-auto mr-2 hidden lg:block"></div>
          <div className="mr-2 h-auto w-full rounded-lg bg-gradient-to-r from-sky-500 to-pink-500 p-2 px-4 shadow-sm md:p-4 md:px-8 lg:px-12 lg:text-start">
            <h1 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              {title}
            </h1>
            <h2 className="text-[12px] font-semibold text-white md:text-sm lg:text-lg">
              {position}
            </h2>
            <h2 className="font-regular text-[12px] text-white md:text-sm lg:text-lg">
              {year}
            </h2>
          </div>
        </div>
      </div>
    );
  }
};
