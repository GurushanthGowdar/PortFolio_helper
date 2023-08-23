const Experience = () => {
  return (
    <div
      className="flex justify-center mt-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <fieldset className="w-[80%] ml-4 mx-w-[300px] sm:w-full">
        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 mb-4 mt-10 border-gray-200 bg-yellow-500 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-950">
          Experience
        </legend>
        <div className="mt-2 flex flex-col gap-1 sm:gap-1 mr-10 border-2 border-yellow-600 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
          <h1 className="text-[1.4rem] font-semibold sm:text-xl uppercase">
            Software Engineer Intern
          </h1>
          <div className="flex">
            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
              Subex ,
            </span>
            <span className="ml-2 text-[.9rem] font-semibold text-yellow-500 sm:text-base">
              Feb 2023 - Aug 2023
            </span>
          </div>
          <p className=" mb-2 text-[.9rem] text-justify break-words text-gray-500 ">
            Interned as Software Engineer at Subex (Feb-Aug 2023), coding and
            collaborating effectively while gaining practical tech experience.
          </p>
          <h1 className="text-[1.4rem] font-semibold sm:text-xl uppercase">
            Backend Developer
          </h1>
          <div className="flex">
            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
              Trando ,
            </span>
            <span className="ml-2 text-[.9rem] font-semibold text-yellow-500 sm:text-base">
              Sep 2022 - Jan 2023
            </span>
          </div>
          <p className=" text-[.9rem] text-justify break-words text-gray-500">
            Real-time projects, teamwork, hands-on tech experience.
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default Experience;
