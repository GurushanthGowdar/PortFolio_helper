import React from "react";
import styled from "styled-components";

const ChartFiller = (props) => {
  return (
    <Fill
      width={`${props.amount}%`} // Use template string to set width directly
      className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500"
    ></Fill>
  );
};

const Fill = styled.div`
  width: 0%; // Set initial width
  height: 8px;
  position: absolute;
  border-radius: 3xl;
  background-color: bg-yellow-500;
  animation: progress-animation ${3}s linear;

  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) =>
        props.width}; // Use props.width to set the width dynamically
    }
  }
`;

export default ChartFiller;
