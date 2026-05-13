import React from 'react';

const BrainIllustrationSimple: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
      <svg
        viewBox="0 0 400 380"
        className="w-full h-auto drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="200" cy="190" r="195" fill="#0891b2" opacity="0.15" />

        {/* Main brain structure */}
        <g>
          {/* Left hemisphere - main lobe */}
          <path
            d="M 120 200 Q 100 150 110 110 Q 130 70 180 60 Q 200 55 200 110 Q 200 150 180 200 Q 160 240 150 280 Q 140 300 120 280 Q 110 250 120 200 Z"
            fill="#f5d5ca"
            stroke="#e8b8ad"
            strokeWidth="1.5"
          />

          {/* Right hemisphere - main lobe */}
          <path
            d="M 280 200 Q 300 150 290 110 Q 270 70 220 60 Q 200 55 200 110 Q 200 150 220 200 Q 240 240 250 280 Q 260 300 280 280 Q 290 250 280 200 Z"
            fill="#f5d5ca"
            stroke="#e8b8ad"
            strokeWidth="1.5"
          />

          {/* Cerebellum - bottom back */}
          <ellipse
            cx="200"
            cy="320"
            rx="45"
            ry="50"
            fill="#f0c9c0"
            stroke="#e8b8ad"
            strokeWidth="1.5"
          />

          {/* Brain stem */}
          <path
            d="M 185 320 Q 180 340 185 360 Q 200 365 215 360 Q 220 340 215 320"
            fill="#e8b8ad"
            stroke="#d9a99a"
            strokeWidth="1.5"
          />
        </g>

        {/* Brain folds and details - left hemisphere */}
        <g stroke="#e8b8ad" strokeWidth="1.2" fill="none">
          {/* Major folds on left */}
          <path d="M 145 90 Q 155 120 150 160" />
          <path d="M 160 80 Q 165 110 160 150" />
          <path d="M 175 75 Q 180 105 175 145" />
          <path d="M 130 130 Q 155 140 170 160" />
          <path d="M 125 170 Q 150 180 170 190" />
          <path d="M 140 220 Q 160 225 170 235" />
          <path d="M 135 260 Q 155 265 165 270" />

          {/* Major folds on right */}
          <path d="M 255 90 Q 245 120 250 160" />
          <path d="M 240 80 Q 235 110 240 150" />
          <path d="M 225 75 Q 220 105 225 145" />
          <path d="M 270 130 Q 245 140 230 160" />
          <path d="M 275 170 Q 250 180 230 190" />
          <path d="M 260 220 Q 240 225 230 235" />
          <path d="M 265 260 Q 245 265 235 270" />

          {/* Central fissure */}
          <path d="M 200 80 Q 200 150 200 280" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* Subtle highlights for dimension */}
        <g opacity="0.3">
          <ellipse
            cx="160"
            cy="130"
            rx="25"
            ry="35"
            fill="white"
            filter="blur(8px)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="25"
            ry="35"
            fill="white"
            filter="blur(8px)"
          />
        </g>

        {/* Subtle shadow underneath */}
        <ellipse
          cx="200"
          cy="350"
          rx="80"
          ry="15"
          fill="#0f172a"
          opacity="0.1"
          filter="blur(4px)"
        />
      </svg>
    </div>
  );
};

export default BrainIllustrationSimple;
