import React, { useState } from "react";
import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaAws
} from "react-icons/fa";
import {
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiApachekafka,
  SiApachespark,
  SiKubernetes,
  SiDocker,
  SiNextdotjs,
  SiAngular,
  SiMicrosoftazure,
  SiApachehadoop
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb
} from "react-icons/bi";
import CollaborateModal from "./CollaborateModal";

const Skill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      color: "blue",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "C (Familiar)", icon: "🔧" },
        { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-600" /> },
        { name: "Dart", icon: <SiFlutter className="text-blue-500" /> }
      ]
    },
    {
      title: "Frameworks",
      icon: "⚡",
      color: "green",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Microservices", icon: "🔗" },
        { name: "Flask", icon: <FaPython className="text-gray-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Angular", icon: <SiAngular className="text-red-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> }
      ]
    },
    {
      title: "Cloud & Big Data Technologies",
      icon: "☁️",
      color: "purple",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "Azure", icon: <SiMicrosoftazure className="text-blue-400" /> },
        { name: "Hadoop", icon: <SiApachehadoop className="text-yellow-400" /> },
        { name: "HBase", icon: "📊" },
        { name: "NiFi", icon: "🔀" },
        { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
        { name: "Spark", icon: <SiApachespark className="text-red-400" /> },
        { name: "Hive", icon: "🐝" },
        { name: "Trino", icon: "🚀" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "orange",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "MongoDB", icon: <BiLogoMongodb className="text-green-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      color: "pink",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS", icon: <FaCss3 className="text-blue-300" /> },
        { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> }
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: "🐳",
      color: "cyan",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-300" /> }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-800",
      green: "from-green-600 to-green-800",
      purple: "from-purple-600 to-purple-800",
      orange: "from-orange-600 to-orange-800",
      pink: "from-pink-600 to-pink-800",
      cyan: "from-cyan-600 to-cyan-800"
    };
    return colors[color] || colors.blue;
  };

  const getSkillBgColor = (color) => {
    const colors = {
      blue: "hover:bg-blue-900/50 border-blue-700",
      green: "hover:bg-green-900/50 border-green-700", 
      purple: "hover:bg-purple-900/50 border-purple-700",
      orange: "hover:bg-orange-900/50 border-orange-700",
      pink: "hover:bg-pink-900/50 border-pink-700",
      cyan: "hover:bg-cyan-900/50 border-cyan-700"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div id="skill" className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">Technical Skills</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to build scalable and efficient solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-700"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(category.color)} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{category.title}</h4>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group flex items-center gap-3 p-3 rounded-lg border border-gray-600 bg-gray-700 transition-all duration-200 cursor-pointer ${getSkillBgColor(category.color)} hover:shadow-md`}
                    >
                      <div className="text-xl flex-shrink-0">
                        {typeof skill.icon === 'string' ? (
                          <span className="text-2xl">{skill.icon}</span>
                        ) : (
                          React.cloneElement(skill.icon, { 
                            className: `${skill.icon.props.className} text-xl` 
                          })
                        )}
                      </div>
                      <span className="font-medium text-gray-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-2xl p-8 text-white border border-blue-500/30">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2">Full-Stack & Big Data Expertise</h4>
            <p className="text-blue-100">End-to-end development with focus on scalable systems and data engineering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl mb-4 border border-white/20">
                <SiSpringboot className="text-3xl mx-auto text-white" />
              </div>
              <h5 className="font-bold text-lg mb-2">Backend Development</h5>
              <p className="text-blue-100 text-sm">
                Java Spring Boot, Microservices, Node.js with scalable architecture
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl mb-4 border border-white/20">
                <SiApachespark className="text-3xl mx-auto text-white" />
              </div>
              <h5 className="font-bold text-lg mb-2">Big Data & Cloud</h5>
              <p className="text-blue-100 text-sm">
                AWS, Azure, Hadoop ecosystem, Spark, and data processing pipelines
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl mb-4 border border-white/20">
                <SiDocker className="text-3xl mx-auto text-white" />
              </div>
              <h5 className="font-bold text-lg mb-2">DevOps & Deployment</h5>
              <p className="text-blue-100 text-sm">
                Containerization with Docker, Kubernetes orchestration, and CI/CD
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need a web application, data pipeline, or cloud solution, I have the skills to bring your vision to life.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Let's Discuss Your Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
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

export default Skill;