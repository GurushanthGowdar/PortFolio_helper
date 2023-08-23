import WorksCard from "./WorksCard";
import DiceApp from "../assests/images/DiceApp.png";
import TodoApp from "../assests/images/TodoApp.png";
import ArogyaSeva from "../assests/images/ArohyaSeva.png";

const Works = () => {
  const worksArray = [
    {
      image: TodoApp,
      name: "Todo APP",
      tech: ["Node.js", "EJS", "Html5", "CSS3", "Express"],
      gitHub: "https://github.com/GurushanthGowdar/TodoAPP_using_NodeJs",
    },
    {
      image: DiceApp,
      name: "DICE APP",
      tech: ["Flutter", "Dart"],
      gitHub: "https://github.com/GurushanthGowdar/Flutter_DiceApp",
    },
    {
      image: ArogyaSeva,
      name: "Arogya Seva",
      tech: ["Flask", "Python", "Html5", "css3", "mySql"],
      gitHub: "https://github.com/GurushanthGowdar/AROGYA_SEVA_",
    },
  ];

  return (
    <div id="works" className="text-black bg-slate-200 pt-20">
      <div className="flex items-center">
        <h3 className="text-4xl pt-6 pl-5">Works</h3>
        <hr className="flex-grow border-gray-700 ml-4 mt-14 mr-5" />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 ml-10 pl-10 pt-10 mt-10 mr-5 pr-5">
        {worksArray.map((item) => {
          return <WorksCard work={item}></WorksCard>;
        })}
      </div>
    </div>
  );
};

export default Works;
