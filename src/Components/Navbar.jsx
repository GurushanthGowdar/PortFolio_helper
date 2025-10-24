import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuClickhandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold text-sm">GR</span>
            </div>
            <h1 className="text-white font-bold text-xl">
              Gurushantha <span className="text-green-400">R G</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skill')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={MenuClickhandler}
            className="md:hidden text-gray-300 hover:text-green-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {!menuOpen ? (
              <AiOutlineMenu size={24} />
            ) : (
              <AiOutlineClose size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skill')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-green-400 hover:text-green-300 transition-colors duration-300 py-2 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;