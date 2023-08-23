import React from "react";
import { FaAngular } from "react-icons/fa";
import styled from "styled-components";

const ProgressBar = (props) => {
  return (
    <div
      className="max-w-[600px] ml-10 pl-10 flex flex-col gap-2 sm:gap-1 text-xl font-semibold mt-4"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3 mt-2">
          {props.skill.logo} {props.skill.name}
        </p>{" "}
      </div>
    </div>
  );
};

export default ProgressBar;
