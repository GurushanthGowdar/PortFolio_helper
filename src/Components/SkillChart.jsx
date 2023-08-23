import { FaAngular } from "react-icons/fa";
import ChartFiller from "./ChartFiller";

const SkillChart = (props) => {
  const helper = <FaAngular size={50}></FaAngular>;
  return (
    <div className="mt-4">
      <div className="flex ml-10 pl-10 mt-5">
        <FaAngular size={50}></FaAngular>
        <p className="mt-5 pl-4 text-xl font-bold">Angular.Ts</p>
      </div>
      <ChartFiller amount="90%"></ChartFiller>
    </div>
  );
};

export default SkillChart;
