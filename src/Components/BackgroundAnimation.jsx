import React from 'react';

const BackgroundAnimation = () => {
  return (
    <>
      {/* Animated Gradient Orbs - Fixed z-index and positioning */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
        {/* Large Orb 1 */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        
        {/* Large Orb 2 */}
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Large Orb 3 */}
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default BackgroundAnimation;