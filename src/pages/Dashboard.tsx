import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Download, Filter, ChevronDown, ChevronUp, BarChart, PieChart, LineChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  interface Detection {
    id: number;
    patientId: string;
    scanName: string;
    date: string;
    result: string;
    confidence: number;
    notes: string;
  }

  const [detections, setDetections] = useState<Detection[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const mockData = [
      {
        id: 1,
        patientId: 'P-10045',
        scanName: 'brain_mri_001.dcm',
        date: '2023-05-15T09:30:00',
        result: 'negative',
        confidence: 0.96,
        notes: 'Routine checkup, no abnormalities detected',
      },
      {
        id: 2,
        patientId: 'P-10046',
        scanName: 'brain_mri_002.dcm',
        date: '2023-05-14T14:15:00',
        result: 'positive',
        confidence: 0.89,
        notes: 'Small anomaly detected in frontal lobe, recommended follow-up',
      },
      {
        id: 3,
        patientId: 'P-10047',
        scanName: 'brain_mri_003.dcm',
        date: '2023-05-14T11:45:00',
        result: 'positive',
        confidence: 0.92,
        notes: 'Potential glioblastoma detected, urgent consultation required',
      },
      {
        id: 4,
        patientId: 'P-10048',
        scanName: 'brain_mri_004.dcm',
        date: '2023-05-13T16:20:00',
        result: 'negative',
        confidence: 0.97,
        notes: 'Post-treatment follow-up, no recurrence detected',
      },
      {
        id: 5,
        patientId: 'P-10049',
        scanName: 'brain_mri_005.dcm',
        date: '2023-05-12T10:00:00',
        result: 'negative',
        confidence: 0.95,
        notes: 'Routine screening, no abnormalities detected',
      },
      {
        id: 6,
        patientId: 'P-10050',
        scanName: 'brain_mri_006.dcm',
        date: '2023-05-11T13:30:00',
        result: 'positive',
        confidence: 0.87,
        notes: 'Small meningioma detected, recommended follow-up in 3 months',
      },
    ];

    setDetections(mockData);
  }, []);

  const filteredDetections = detections.filter(detection => {
    if (activeTab === 'all') return true;
    if (activeTab === 'positive') return detection.result === 'positive';
    if (activeTab === 'negative') return detection.result === 'negative';
    return true;
  });

  const sortedDetections = [...filteredDetections].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Stats for the dashboard
  const totalScans = detections.length;
  const positiveScans = detections.filter(d => d.result === 'positive').length;
  const negativeScans = detections.filter(d => d.result === 'negative').length;
  const positiveRate = totalScans > 0 ? (positiveScans / totalScans) * 100 : 0;

  return (
    <div className="pt-16">
      <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600 mb-8">Monitor and analyze your brain tumor detection results</p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Total Scans</h3>
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <BarChart className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{totalScans}</p>
                <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Positive Detections</h3>
                  <div className="bg-red-100 p-2 rounded-full">
                    <PieChart className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{positiveScans}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {positiveRate.toFixed(1)}% of total scans
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Negative Detections</h3>
                  <div className="bg-green-100 p-2 rounded-full">
                    <PieChart className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{negativeScans}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {(100 - positiveRate).toFixed(1)}% of total scans
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Average Confidence</h3>
                  <div className="bg-blue-100 p-2 rounded-full">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {detections.length > 0
                    ? (
                        parseFloat(
                          (
                            detections.reduce((sum, d) => sum + d.confidence, 0) /
                            detections.length
                          ).toFixed(2)
                        ) * 100
                      )
                    : 0}%
                </p>
                <p className="text-sm text-gray-500 mt-2">Model accuracy</p>
              </motion.div>
            </div>

            {/* Detection List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Detection History</h2>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Tabs */}
                    <div className="flex rounded-md overflow-hidden border border-gray-200">
                      <button
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === 'all'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveTab('all')}
                      >
                        All
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === 'positive'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveTab('positive')}
                      >
                        Positive
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === 'negative'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveTab('negative')}
                      >
                        Negative
                      </button>
                    </div>

                    {/* Filter Button */}
                    <div className="relative">
                      <button
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                        onClick={toggleFilter}
                      >
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                        {isFilterOpen ? (
                          <ChevronUp className="h-4 w-4 ml-2" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-2" />
                        )}
                      </button>

                      {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <div className="p-3">
                            <p className="text-sm font-medium text-gray-700 mb-2">Sort by</p>
                            <div className="space-y-2">
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name="sort"
                                  checked={sortOrder === 'newest'}
                                  onChange={() => setSortOrder('newest')}
                                  className="h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2 text-sm text-gray-700">Newest first</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name="sort"
                                  checked={sortOrder === 'oldest'}
                                  onChange={() => setSortOrder('oldest')}
                                  className="h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2 text-sm text-gray-700">Oldest first</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Scan Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Result
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Confidence
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedDetections.map((detection, index) => (
                      <motion.tr
                        key={detection.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{detection.patientId}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{detection.scanName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            {formatDate(detection.date)}
                            <span className="mx-1">•</span>
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            {formatTime(detection.date)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              detection.result === 'positive'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {detection.result === 'positive' ? 'Anomaly Detected' : 'No Anomaly'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {(detection.confidence * 100).toFixed(1)}%
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                          <button className="text-indigo-600 hover:text-indigo-900 flex items-center">
                            <Download className="h-4 w-4 mr-1" /> Report
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {sortedDetections.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                  No detection records found matching your criteria.
                </div>
              )}

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{sortedDetections.length}</span> of{' '}
                    <span className="font-medium">{detections.length}</span> results
                  </p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;