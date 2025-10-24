import React from "react";
import styled from "styled-components";

const ChartFiller = (props) => {
  return (
    <Fill
      width={`${props.amount}%`}
      className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500"
    ></Fill>
  );
};

const Fill = styled.div`
  width: 0%;
  height: 8px;
  position: absolute;
  border-radius: 1.5rem;
  background-color: #f59e0b;
  animation: progress-animation 3s linear;

  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;

export default ChartFiller;