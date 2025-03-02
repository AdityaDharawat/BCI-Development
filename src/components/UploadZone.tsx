import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

interface UploadZoneProps {
  onFileSelected: (file: File) => void;
  acceptedFileTypes?: string;
  maxSizeMB?: number;
}

const UploadZone: React.FC<UploadZoneProps> = ({
  onFileSelected,
  acceptedFileTypes = 'image/*',
  maxSizeMB = 10
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return false;
    }

    // Check file type
    const fileType = file.type;
    if (!fileType.match(/(image\/jpeg|image\/png|application\/dicom)/)) {
      setError('Only JPG, PNG, and DICOM files are allowed');
      return false;
    }

    setError(null);
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onFileSelected(file);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onFileSelected(file);
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="w-full">
      <motion.div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleButtonClick}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept={acceptedFileTypes}
          className="hidden"
        />
        <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
        <p className="text-gray-700 font-medium mb-1">
          {isDragging ? 'Drop your file here' : 'Drag & drop your file here'}
        </p>
        <p className="text-gray-500 text-sm mb-2">or click to browse</p>
        <p className="text-gray-400 text-xs">
          Supported formats: JPG, PNG, DICOM (max {maxSizeMB}MB)
        </p>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 bg-red-50 text-red-700 p-3 rounded-md flex items-center justify-between"
        >
          <span className="text-sm">{error}</span>
          <button onClick={clearError} className="text-red-500 hover:text-red-700">
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default UploadZone;