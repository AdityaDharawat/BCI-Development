import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle, ArrowRight, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Detection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ detected: boolean; confidence: number } | null>(null);
  const [uploadHistory, setUploadHistory] = useState<Array<{ name: string; result: string; date: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated upload history
    setUploadHistory([
      { name: 'scan1.jpg', result: 'No anomaly detected', date: '2023-05-15' },
      { name: 'scan2.jpg', result: 'Anomaly detected', date: '2023-05-14' },
      { name: 'scan3.jpg', result: 'No anomaly detected', date: '2023-05-12' },
    ]);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
      
      // Reset result
      setResult(null);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const processImage = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    
    // Simulate API call to ML model
    setTimeout(() => {
      // Random result for demo purposes
      const detected = Math.random() > 0.5;
      const confidence = detected ? 0.85 + (Math.random() * 0.15) : 0.05 + (Math.random() * 0.15);
      
      setResult({
        detected,
        confidence: parseFloat(confidence.toFixed(2))
      });
      
      // Add to history
      if (file) {
        setUploadHistory(prev => [
          { 
            name: file.name, 
            result: detected ? 'Anomaly detected' : 'No anomaly detected', 
            date: new Date().toISOString().split('T')[0] 
          },
          ...prev
        ]);
      }
      
      setIsProcessing(false);
    }, 3000);
  };

  const resetUpload = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const viewDetails = () => {
    // In a real app, this would navigate to a detailed results page
    navigate('/dashboard');
  };

  return (
    <div className="pt-16">
      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Brain Tumor Detection
              </h1>
              <p className="text-lg text-gray-700">
                Upload an MRI scan to analyze for potential brain tumors using our advanced Vision Transformer model.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Upload Area */}
                  <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload a File for Detection</h2>
                    
                    <AnimatePresence mode="wait">
                      {!preview ? (
                        <motion.div
                          key="upload"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors"
                          onClick={handleUploadClick}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                          />
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                          <p className="text-gray-400 text-sm">Supported formats: JPG, PNG, DICOM</p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative"
                        >
                          <img
                            src={preview}
                            alt="MRI Preview"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="mt-4 flex justify-between">
                            <button
                              onClick={resetUpload}
                              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                            >
                              Change file
                            </button>
                            {!isProcessing && !result && (
                              <button
                                onClick={processImage}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                              >
                                Analyze <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Processing State */}
                    {isProcessing && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-center"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Loader className="h-5 w-5 text-indigo-600 animate-spin" />
                          <p className="text-gray-700">Processing image...</p>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                          Our AI model is analyzing the scan. This may take a few moments.
                        </p>
                      </motion.div>
                    )}

                    {/* Results */}
                    <AnimatePresence>
                      {result && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="mt-6 p-4 rounded-lg"
                          style={{
                            backgroundColor: result.detected ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                          }}
                        >
                          <div className="flex items-center mb-2">
                            {result.detected ? (
                              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                            ) : (
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            )}
                            <h3 className="font-semibold text-gray-900">
                              {result.detected ? 'Potential anomaly detected' : 'No anomaly detected'}
                            </h3>
                          </div>
                          <p className="text-gray-700 text-sm mb-3">
                            Confidence: {(result.confidence * 100).toFixed(1)}%
                          </p>
                          <button
                            onClick={viewDetails}
                            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                          >
                            View detailed analysis <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Detection History */}
                  <div className="md:w-1/2 mt-8 md:mt-0">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Detection History</h2>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="max-h-80 overflow-y-auto">
                        {uploadHistory.length > 0 ? (
                          <ul className="divide-y divide-gray-200">
                            {uploadHistory.map((item, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="p-4 hover:bg-gray-50"
                              >
                                <div className="flex justify-between">
                                  <p className="font-medium text-gray-900">{item.name}</p>
                                  <p className="text-sm text-gray-500">{item.date}</p>
                                </div>
                                <p className={`text-sm ${
                                  item.result.includes('No') ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {item.result}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <div className="p-4 text-center text-gray-500">
                            No detection history available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Information</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  This tool is designed to assist medical professionals and should not replace professional medical advice.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  For optimal results, upload high-quality MRI scans in DICOM format when available.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  All uploaded images are processed securely and in compliance with HIPAA regulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detection;