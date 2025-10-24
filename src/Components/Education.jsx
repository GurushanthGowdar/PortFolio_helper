import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <FaGraduationCap className="text-blue-400 text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase">
              Bachelor of Engineering
            </h1>
            <p className="text-lg text-blue-400 font-semibold">Information Science</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-400">Institution</p>
              <p className="text-lg font-semibold text-white">SJBIT, Bangalore</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-lg font-semibold text-yellow-400">Aug 2018 - Jul 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-400">CGPA</p>
              <p className="text-lg font-semibold text-green-400">8.9 / 10</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-400">Degree</p>
              <p className="text-lg font-semibold text-white">BE in Information Science</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
          <p className="text-gray-300 leading-relaxed text-lg">
            I pursued a Bachelor of Engineering in Information Science at SJBIT, Bangalore, 
            from August 2018 to July 2023. Throughout my studies, I gained a strong foundation 
            in programming, data structures, and algorithms. Engaging in group projects and 
            technical events enhanced my teamwork, problem-solving skills, and industry awareness. 
            This education has empowered me with both technical expertise and a commitment to 
            lifelong learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;