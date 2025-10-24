import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Animated Triangles */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-400 opacity-10 animate-spin-slow"
            style={{
              left: `${20 + i * 12}%`,
              top: `${10 + i * 8}%`,
              animationDelay: `${i * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-green-400 rounded-full opacity-10 animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 100}px`,
              height: `${40 + Math.random() * 100}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Grid Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
    </div>
  );
};

export default GeometricBackground;