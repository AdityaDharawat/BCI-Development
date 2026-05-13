import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UploadZone from '../components/UploadZone';
import ResultCard from '../components/ResultCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useDetection } from '../context/DetectionContext';

const Detection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const { analyzeScan, isLoading, currentResult, detectionHistory, clearResult } = useDetection();
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) {
      clearResult();
    }
  }, [file, clearResult]);

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setTimestamp(null);
    clearResult();

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        setPreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    await analyzeScan(file);
    setTimestamp(new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  };

  const resetUpload = () => {
    setFile(null);
    setPreview(null);
    setTimestamp(null);
    clearResult();
  };

  return (
    <div className="pt-16">
      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <p className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600 mb-4">
                <ShieldCheck className="mr-2 h-4 w-4" /> Secure MRI diagnostics
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                AI-driven Brain Tumor Prediction
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Upload a medical-grade MRI scan and receive fast, clinically-minded insights with a confidence score and recommended next steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-soft border border-slate-200 p-7 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Upload and analyze</h2>
                    <p className="text-sm text-slate-500 mt-1">Drop your MRI scan below to begin inference.</p>
                  </div>
                  <div className="text-sm text-slate-500">{file ? 'Ready for analysis' : 'Awaiting scan'}</div>
                </div>

                <UploadZone onFileSelected={handleFileSelected} acceptedFileTypes=".jpg,.jpeg,.png,.dcm" />

                {preview && (
                  <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
                    <img src={preview} alt="MRI preview" className="w-full h-72 object-cover" />
                  </div>
                )}

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    disabled={!file || isLoading}
                    className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {isLoading ? 'Analyzing...' : 'Start inference'}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={resetUpload}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
                  >
                    Reset scan
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <p className="text-sm text-slate-500">Configuring Tests</p>
                    <p className="font-semibold text-slate-900">Tumor detection ready to initiate</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <p className="text-sm text-slate-500">Expected scan quality</p>
                    <p className="font-semibold text-slate-900">224 × 224 pixels • high contrast MRI</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-soft border border-slate-200 p-7 md:p-10">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Prediction preview</h3>
                      <p className="text-sm text-slate-500">View your latest inference result in one place.</p>
                    </div>
                    {timestamp && <p className="text-sm text-slate-400">{timestamp}</p>}
                  </div>

                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="spinner"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="py-16"
                      >
                        <LoadingSpinner text="Processing scan with the model" />
                      </motion.div>
                    ) : currentResult ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <ResultCard
                          detected={currentResult.detected}
                          confidence={currentResult.confidence}
                          tumorTypeFromName={currentResult.tumorTypeFromName ?? undefined}
                          onViewDetails={() => navigate('/dashboard')}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center"
                      >
                        <p className="text-sm text-slate-500">Upload a scan to see the prediction result here.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-white rounded-3xl shadow-soft border border-slate-200 p-7 md:p-10">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Recent uploads</h3>
                      <p className="text-sm text-slate-500">History of scans for quick review.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {detectionHistory.length > 0 ? (
                      detectionHistory.slice(0, 5).map((item) => (
                        <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1">
                              <p className="font-semibold text-slate-900">{item.scanName}</p>
                              <p className="text-sm text-slate-500">{new Date(item.date).toLocaleString()}</p>
                            </div>
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.result === 'positive' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                              {item.result}
                            </span>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                            <p>Confidence {(item.confidence * 100).toFixed(1)}%</p>
                            <button
                              type="button"
                              onClick={() => navigate('/dashboard')}
                              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
                            >
                              Details <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">No recent scans yet. Upload one to begin.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Recommended next steps</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Confirm results with a clinical radiologist before making treatment decisions.</li>
                <li>• Use high-resolution MRI scans and preserve original DICOM metadata when possible.</li>
                <li>• Keep patient records secure and review HIPAA compliance guidelines.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detection;
