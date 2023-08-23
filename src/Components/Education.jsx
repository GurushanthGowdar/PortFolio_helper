const Education = () => {
  return (
    <div
      className="pl-5 ml-5 flex justify-center mt-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <fieldset className="w-[80%] pl-10 ml-10 mx-w-[300px] sm:w-full">
        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 mb-4 mt-10 border-gray-200 bg-yellow-500 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-950">
          Education
        </legend>
        <div className="mt-2 ml-5 pl-4 flex flex-col gap-1 sm:gap-1 border-2 border-yellow-600 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
          <h1 className="text-[1.4rem] font-semibold sm:text-xl uppercase">
            bachelor of engineering
          </h1>
          <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
            SJBIT , Bangalore
          </span>
          <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
            Aug 2018 - Jul 2023
          </span>
          <p className=" text-[.9rem] text-justify break-words text-gray-500">
            I pursued a Bachelor of Engineering in Information Science at SJBIT,
            Bangalore, from August 2018 to July 2023. Throughout my studies, I
            gained a strong foundation in programming, data structures, and
            algorithms. Engaging in group projects and technical events enhanced
            my teamwork, problem-solving skills, and industry awareness. This
            education has empowered me with both technical expertise and a
            commitment to lifelong learning..
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default Education;
