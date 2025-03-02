import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface ResultCardProps {
  detected: boolean;
  confidence: number;
  onViewDetails?: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  detected, 
  confidence, 
  onViewDetails 
}) => {
  const bgColor = detected 
    ? 'bg-red-50 border-red-200' 
    : 'bg-green-50 border-green-200';
  
  const titleColor = detected ? 'text-red-700' : 'text-green-700';
  const icon = detected ? AlertCircle : CheckCircle;
  const iconColor = detected ? 'text-red-500' : 'text-green-500';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg border p-4 ${bgColor}`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {React.createElement(icon, { 
            className: `h-6 w-6 ${iconColor}`,
            'aria-hidden': true 
          })}
        </div>
        <div>
          <h3 className={`text-lg font-medium ${titleColor}`}>
            {detected ? 'Potential tumor detected' : 'No tumor detected'}
          </h3>
          <div className="mt-2 text-sm">
            <p className="text-gray-700">
              Confidence: <span className="font-medium">{(confidence * 100).toFixed(1)}%</span>
            </p>
            {detected && (
              <p className="mt-1 text-red-700">
                We recommend consulting with a medical professional for further evaluation.
              </p>
            )}
          </div>
          {onViewDetails && (
            <div className="mt-3">
              <button
                type="button"
                onClick={onViewDetails}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                <Info className="mr-1 h-4 w-4" />
                View detailed analysis
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;