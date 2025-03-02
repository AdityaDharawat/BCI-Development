import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-center mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Home className="mr-2 h-5 w-5" /> Go to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;