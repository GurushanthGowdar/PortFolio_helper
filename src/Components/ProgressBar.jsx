import React from "react";

const ProgressBar = (props) => {
  return (
    <div
      className="max-w-[600px] w-full px-4 flex flex-col gap-2 text-xl font-semibold mt-4"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-center">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem]">
          {props.skill.logo} {props.skill.name}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;