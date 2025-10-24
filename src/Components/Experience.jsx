import React from "react";
import { 
  FaBriefcase, 
  FaCode, 
  FaAward,
  FaRocket,
  FaCar,
  FaGraduationCap
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Subex Ltd",
      period: "Oct 2024 – Present",
      location: "Bengaluru, India",
      icon: <FaRocket className="text-red-400 text-2xl" />,
      color: "red",
      previousRoles: [
        "Software Engineer (Sept 2023 – Oct 2024)",
        "Intern (Feb 2023 – Jul 2023)"
      ],
      highlights: [
        "Designed and optimized high-performance data pipelines using Apache NiFi, Java, and Spring Boot, scaling data processing from 2B to 10B records daily",
        "Engineered Spark Structured Streaming systems with RocksDB and HDFS as state stores, reducing memory consumption from 50GB to 5GB while maintaining throughput",
        "Developed a Trino-based data copy framework that cut execution time from 3 hours to under 1 minute and optimized compute utilization",
        "Created a custom NiFi processor (hs-etl) to handle end-to-end ETL transformation, slashing thread usage by 99% and I/O overhead by 95%",
        "Contributed to real-time analytics pipelines, Kafka message optimization, and ETL telemetry modules for improved observability and reliability",
        "Worked onsite in Dubai for client collaboration and deployment of mission-critical data integration solutions"
      ],
      achievements: [
        "Awarded 'Rookie of the Year' for outstanding performance and innovation",
        "Received 'Tech Titans' award for impact in large-scale data processing systems"
      ],
      technologies: ["Apache NiFi", "Java", "Spring Boot", "Spark Structured Streaming", "RocksDB", "HDFS", "Trino", "Kafka", "ETL", "Big Data"]
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Mercedes-Benz Research and Development India",
      period: "Aug 2023 – Sept 2023",
      location: "Bengaluru, India",
      icon: <FaCar className="text-gray-400 text-2xl" />,
      color: "gray",
      highlights: [
        "Contributed to full-stack web application development using React.js and Node.js within an agile engineering team",
        "Focused on UI design, API integration, and modular component development, ensuring clean and maintainable code",
        "Gained hands-on experience in enterprise-grade software practices and collaborative product development in a fast-paced automotive R&D environment"
      ],
      technologies: ["React.js", "Node.js", "Agile Methodology", "UI/UX Design", "API Integration", "Enterprise Software"]
    },
    {
      title: "Software Engineer Intern",
      company: "Trando",
      period: "Sept 2022 – Jan 2023",
      location: "Remote",
      icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
      color: "blue",
      highlights: [
        "Developed a live educational platform for competitive exams featuring real-time streaming, test management, and course modules using Agora SDK",
        "Built a Node.js + Express backend integrated with MongoDB, ensuring scalability and efficient performance",
        "Collaborated with cross-functional teams to design and deliver a robust end-to-end solution supporting thousands of concurrent users",
        "Enhanced technical and teamwork skills through exposure to startup development cycles and agile methodologies"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Agora SDK", "Real-time Streaming", "WebRTC", "Startup Development"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "border-red-700 bg-red-900/30 hover:bg-red-900/50",
      gray: "border-gray-700 bg-gray-900/30 hover:bg-gray-900/50",
      blue: "border-blue-700 bg-blue-900/30 hover:bg-blue-900/50",
      green: "border-green-700 bg-green-900/30 hover:bg-green-900/50",
      purple: "border-purple-700 bg-purple-900/30 hover:bg-purple-900/50",
      orange: "border-orange-700 bg-orange-900/30 hover:bg-orange-900/50"
    };
    return colors[color] || colors.blue;
  };

  const getIconBgColor = (color) => {
    const colors = {
      red: "bg-red-500/20",
      gray: "bg-gray-500/20",
      blue: "bg-blue-500/20",
      green: "bg-green-500/20",
      purple: "bg-purple-500/20",
      orange: "bg-orange-500/20"
    };
    return colors[color] || colors.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      red: "border-l-red-500",
      gray: "border-l-gray-500",
      blue: "border-l-blue-500",
      green: "border-l-green-500",
      purple: "border-l-purple-500",
      orange: "border-l-orange-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 ${getBorderColor(exp.color)} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 ${getColorClasses(exp.color)}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 lg:mb-0">
                <div className={`p-3 rounded-full ${getIconBgColor(exp.color)}`}>
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
                  {exp.previousRoles && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-400 font-medium">Previous Roles:</p>
                      <ul className="text-sm text-gray-500 ml-4 mt-1">
                        {exp.previousRoles.map((role, idx) => (
                          <li key={idx} className="list-disc">{role}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-yellow-400">{exp.period}</p>
                <p className="text-sm text-gray-400">{exp.location}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-gray-400" />
                Key Contributions
              </h4>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            {exp.achievements && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaAward className="text-yellow-500" />
                  Awards & Recognition
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCode className="text-gray-400" />
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-600 hover:border-gray-500 transition-all duration-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Timeline Visual */}
      <div className="mt-16 bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Timeline</h3>
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 transform -translate-y-1/2 z-0"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center text-center z-10 bg-gray-700 p-4 rounded-lg m-2 border border-gray-600">
              <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-gray-500' : 'bg-blue-500'} mb-2`}></div>
              <p className="text-sm font-semibold text-white">{exp.company}</p>
              <p className="text-xs text-gray-400">{exp.period.split(' – ')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;