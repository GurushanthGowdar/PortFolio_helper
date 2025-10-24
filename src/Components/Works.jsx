import React, { useState } from 'react';
import WorksCard from "./WorksCard";
import CollaborateModal from "./CollaborateModal";

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const worksArray = [
    {
      name: "Todo Application",
      description: "A full-stack todo application built with Node.js and Express, featuring task management with create, read, update, and delete operations.",
      tech: ["Node.js", "EJS", "HTML5", "CSS3", "Express", "MongoDB"],
      gitHub: "https://github.com/GurushanthGowdar/TodoAPP_using_NodeJs",
      liveDemo: "#",
      category: "Web Development",
      features: ["Task Management", "CRUD Operations", "MongoDB Integration", "RESTful API"],
      status: "Personal"
    },
    {
      name: "Dice Game App",
      description: "A mobile dice game application built with Flutter featuring random dice rolls with smooth animations and responsive design.",
      tech: ["Flutter", "Dart"],
      gitHub: "https://github.com/GurushanthGowdar/Flutter_DiceApp",
      liveDemo: "#",
      category: "Mobile Development",
      features: ["Random Dice Rolls", "Smooth Animations", "Cross-platform", "Responsive UI"],
      status: "Personal"
    },
    {
      name: "Arogya Seva Healthcare Platform",
      description: "A healthcare management web application built with Flask, providing appointment scheduling and patient record management features.",
      tech: ["Flask", "Python", "HTML5", "CSS3", "MySQL"],
      gitHub: "https://github.com/GurushanthGowdar/AROGYA_SEVA_",
      liveDemo: "#",
      category: "Web Development",
      features: ["Appointment System", "Patient Records", "Admin Dashboard", "Healthcare Management"],
      status: "Personal"
    }
  ];

  return (
    <div id="works" className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">My Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of personal projects I've built to learn and demonstrate my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {worksArray.map((item, index) => (
            <WorksCard key={index} work={item} index={index} />
          ))}
        </div>

        {/* Action Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Collaborate Section */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-700">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Collaborate on a Project</h4>
              <p className="text-gray-300 mb-6">
                Have an idea for a project? Let's work together to bring it to life. I'm always excited to collaborate on innovative projects.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                Start a Project Together
              </button>
            </div>
          </div>

          {/* View All Projects Section */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-700">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">View All Projects</h4>
              <p className="text-gray-300 mb-6">
                Explore more of my work on GitHub. I'm constantly building new projects and improving my skills.
              </p>
              <a
                href="https://github.com/GurushanthGowdar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborate Modal */}
      <CollaborateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Works;