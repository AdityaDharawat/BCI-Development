import React from 'react';
import brainImage from '../assets/brain.jpg';

const BrainLevitatingImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-sky-100 opacity-60 blur-3xl animate-float" />
      <div className="relative p-8">
        <img
          src={brainImage}
          alt="Brain MRI illustration"
          className="w-full h-auto drop-shadow-xl rounded-2xl animate-float"
        />
      </div>
    </div>
  );
};

export default BrainLevitatingImage;
