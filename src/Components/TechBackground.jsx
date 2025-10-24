import React from 'react';

const TechBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Binary Rain Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 opacity-10 font-mono text-sm animate-fall"
            style={{
              left: `${5 + i * 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Circuit Board Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
        <path
          d="M10,10 L40,10 L40,40 L70,40 L70,70 L90,70"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-blue-400 animate-draw"
        />
        <path
          d="M90,10 L60,10 L60,40 L30,40 L30,70 L10,70"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-green-400 animate-draw"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      {/* Floating Code Brackets */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-400 opacity-10 text-2xl animate-float-slow"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 3}s`
            }}
          >
            {i % 2 === 0 ? '{' : '}'}
          </div>
        ))}
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default TechBackground;