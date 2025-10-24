import { useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FaCode, FaUser, FaLaptopCode, FaMobile, FaHeartbeat } from "react-icons/fa";

const WorksCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category) => {
    const icons = {
      "Web Development": <FaLaptopCode className="text-green-400" />,
      "Mobile Development": <FaMobile className="text-blue-400" />,
      "Healthcare": <FaHeartbeat className="text-red-400" />
    };
    return icons[category] || <FaCode className="text-gray-400" />;
  };

  const getGradient = (category) => {
    const gradients = {
      "Web Development": "from-green-600 to-green-800",
      "Mobile Development": "from-blue-600 to-blue-800",
      "Healthcare": "from-red-600 to-red-800"
    };
    return gradients[category] || "from-gray-600 to-gray-800";
  };

  return (
    <div
      className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay={props.index * 100}
    >
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-r ${getGradient(props.work.category)} p-6 relative overflow-hidden`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-xl">
              {getCategoryIcon(props.work.category)}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white bg-opacity-20 text-white border border-white border-opacity-30">
            <FaUser className="text-white" />
            Personal
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {props.work.name}
        </h3>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {props.work.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <FaCode className="text-gray-400" />
            <span className="text-sm font-semibold text-gray-300">Built With</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {props.work.tech.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <a
            href={props.work.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-all duration-300 hover:scale-105"
          >
            <AiFillGithub />
            <span>View Code</span>
          </a>
          <span className="flex items-center gap-2 text-gray-500 font-medium">
            <AiOutlineLink />
            <span>Demo Soon</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;