import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 40, 
  color = '#4f46e5',
  text
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `3px solid ${color}`,
          borderTopColor: 'transparent',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {text && (
        <p className="mt-3 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;