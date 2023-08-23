import Education from "./Education";
import Experience from "./Experience";
import { BsDownload } from "react-icons/bs";
import ResumeCopy from "../assests/Resume/Resume.pdf";

const Resume = () => {
  return (
    <div className="text-black bg-slate-200 pt-20" id="resume">
      <div className="flex items-center">
        <h3 className="text-4xl pt-6 pl-5">Resume</h3>
        <hr className="flex-grow border-gray-700 ml-4 mt-14 mr-5" />
      </div>
      <div className="grid grid-cols-2 ">
        <Education></Education>
        <Experience></Experience>
      </div>
      <div className="flex justify-center">
        <button className="m-4 flex justify-between bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <BsDownload size={25}></BsDownload>
          <a href={ResumeCopy} className="ml-2" download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
