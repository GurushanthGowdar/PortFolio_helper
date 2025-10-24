import Education from "./Education";
import Experience from "./Experience";
import { BsDownload } from "react-icons/bs";
import ResumeCopy from "../assests/Resume/Resume.pdf";

const Resume = () => {
  return (
    <div className="bg-transparent py-20" id="resume">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">Professional Journey</h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My educational background and growing professional experience in software engineering
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-white mb-4">Work Experience</h4>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          <Experience />
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-white mb-4">Education</h4>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <Education />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href={ResumeCopy}
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <BsDownload size={24} />
            <span className="text-lg">Download Full Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;