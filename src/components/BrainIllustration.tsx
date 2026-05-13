import React from 'react';

const BrainIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 via-indigo-100 to-white opacity-70 blur-3xl animate-float" />
      <svg viewBox="0 0 520 420" className="relative w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.75" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#glow)">
          <path
            d="M120 180c0-70 70-120 150-120s150 50 150 120-70 120-150 120S120 250 120 180Z"
            fill="url(#brainGradient)"
            opacity="0.95"
          />
          <path
            d="M140 170c0-60 58-100 130-100s130 40 130 100-58 100-130 100S140 230 140 170Z"
            fill="none"
            stroke="#eff6ff"
            strokeWidth="12"
            opacity="0.55"
          />
          <path
            d="M200 135c22-35 60-40 90-18"
            fill="none"
            stroke="#dbeafe"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M210 190c35-20 70-20 100 4"
            fill="none"
            stroke="#dbeafe"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M180 225c24-22 60-24 90-4"
            fill="none"
            stroke="#dbeafe"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M160 180c0-24 20-40 44-40s44 16 44 40-20 40-44 40-44-16-44-40Z"
            fill="none"
            stroke="#eff6ff"
            strokeWidth="8"
          />
          <circle cx="240" cy="160" r="8" fill="#ffffff" opacity="0.9" />
          <circle cx="300" cy="205" r="6" fill="#ffffff" opacity="0.8" />
          <circle cx="190" cy="210" r="5" fill="#ffffff" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
};

export default BrainIllustration;
