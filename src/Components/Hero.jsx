import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Typed from "react-typed";
import { FaDownload } from "react-icons/fa";
import HireMeModal from "./HireMeModal";
import ResumeCopy from "../assests/Resume/Resume.pdf";
import ProfilePhoto from "../assests/images/photo.png"; // Import your photo

const Hero = () => {
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

  return (
    <div className="text-white bg-transparent pt-20 lg:pt-24" data-aos="zoom-in" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Available for new opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Gurushantha R G
              </span>
            </h1>

            {/* Typed Animation */}
            <div className="mb-6">
              <Typed
                strings={[
                  "Full-Stack Developer",
                  "App Developer",
                  "Web Developer",
                  "Software Engineer",
                  "Freelancer"
                ]}
                loop
                className="text-xl sm:text-2xl text-gray-300"
                typeSpeed={100}
                backSpeed={60}
              />
            </div>

            {/* Your Original Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              A passionate tech enthusiast hailing from India, proficient in full stack web and app development, 
              with a proven track record of turning innovative ideas into functional, user-friendly digital solutions. 
              With a keen eye for detail and a knack for problem-solving, I am constantly exploring new technologies 
              and methodologies to enhance the digital landscape.
            </p>

            {/* Updated Key Highlights - More Accurate Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-400">30+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons - Updated with your original buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => setIsHireMeModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </button>
              <a
                href="#works"
                className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-green-500 text-gray-300 hover:text-green-400 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Know More
              </a>
              <a
                href={ResumeCopy}
                download="Gurushantha_R_G_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            {/* Social Links - Your original social icons */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
              >
                <AiFillInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <AiFillLinkedin size={28} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <AiFillTwitterSquare size={28} />
              </a>
              <a
                href="https://github.com/GurushanthGowdar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <AiFillGithub size={28} />
              </a>
            </div>
          </div>

          {/* Right Content - Your Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Photo Container with Gradient Border */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl p-2">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-800">
                  <img 
                    src={ProfilePhoto} 
                    alt="Gurushantha R G" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">🚀</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire Me Modal */}
      <HireMeModal 
        isOpen={isHireMeModalOpen} 
        onClose={() => setIsHireMeModalOpen(false)} 
      />
    </div>
  );
};

export default Hero;