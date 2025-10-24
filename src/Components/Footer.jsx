import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaCode, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">GR</span>
              </div>
              <h3 className="text-2xl font-bold">
                Gurushantha <span className="text-green-400">R G</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack Developer & Software Engineer passionate about building 
              scalable applications and solving complex problems through code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/GurushanthGowdar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700"
                aria-label="GitHub"
              >
                <AiFillGithub size={20} className="text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/gurushantha-r-g"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size={20} className="text-blue-400" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700"
                aria-label="Twitter"
              >
                <AiFillTwitterSquare size={20} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skill')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('works')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <AiOutlineMail className="text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:guru22ca@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  guru22ca@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <AiFillPhone className="text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919538227415"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  +91 9538227415
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaCode className="text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">Bangalore, India</span>
              </div>
            </div>
            
            {/* Availability Status */}
            {/* <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for new opportunities</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gurushantha R G. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <FaHeart className="text-red-500 text-xs" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;