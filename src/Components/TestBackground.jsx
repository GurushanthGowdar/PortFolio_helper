import React from 'react';

const TestBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      opacity: 0.5,
      zIndex: -50
    }}>
      BACKGROUND VISIBLE - If you see red, background is working!
    </div>
  );
};

export default TestBackground;