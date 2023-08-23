import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const WorksCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div
        className="relative "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`w-full max-h-80  p-5 transition duration-500 cursor-pointer ${
            isHovered ? "scale-125 blur-sm" : ""
          }`}
          src={props.work.image}
          alt="Sunset in the mountains"
        />
        {isHovered && (
          <div className="flex justify-center items-center absolute inset-0">
            <AiFillGithub className="text-white mr-2" size={30} />
            <a
              href={props.work.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Code
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.work.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.work.tech.map((item) => (
          <span
            key={item}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {`#${item}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorksCard;
