import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { mockAnalyzeScan, getDetectionHistory, HistoryItem } from '../utils/api';

interface DetectionContextType {
  isLoading: boolean;
  detectionHistory: HistoryItem[];
  currentResult: {
    detected: boolean;
    confidence: number;
    processingTime?: number;
  } | null;
  analyzeScan: (file: File) => Promise<void>;
  clearResult: () => void;
  refreshHistory: () => Promise<void>;
}

const DetectionContext = createContext<DetectionContextType | undefined>(undefined);

export const DetectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [detectionHistory, setDetectionHistory] = useState<HistoryItem[]>([]);
  const [currentResult, setCurrentResult] = useState<{
    detected: boolean;
    confidence: number;
    processingTime?: number;
  } | null>(null);

  useEffect(() => {
    refreshHistory();
  }, []);

  const analyzeScan = async (file: File) => {
    setIsLoading(true);
    try {
      const result = await mockAnalyzeScan(file);
      setCurrentResult(result);
      
      // Add to history (in a real app, this would be handled by the backend)
      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        patientId: `P-${Math.floor(10000 + Math.random() * 90000)}`,
        scanName: file.name,
        date: new Date().toISOString(),
        result: result.detected ? 'positive' : 'negative',
        confidence: result.confidence,
        imageUrl: URL.createObjectURL(file)
      };
      
      setDetectionHistory(prev => [newHistoryItem, ...prev]);
    } catch (error) {
      console.error('Error analyzing scan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResult = () => {
    setCurrentResult(null);
  };

  const refreshHistory = async () => {
    try {
      // In a real app, this would fetch from the API
      // const history = await getDetectionHistory();
      // setDetectionHistory(history);
      
      // For demo, we'll use mock data
      const mockHistory: HistoryItem[] = [
        {
          id: '1',
          patientId: 'P-10045',
          scanName: 'brain_mri_001.dcm',
          date: '2023-05-15T09:30:00',
          result: 'negative',
          confidence: 0.96,
          imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: '2',
          patientId: 'P-10046',
          scanName: 'brain_mri_002.dcm',
          date: '2023-05-14T14:15:00',
          result: 'positive',
          confidence: 0.89,
          imageUrl: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: '3',
          patientId: 'P-10047',
          scanName: 'brain_mri_003.dcm',
          date: '2023-05-14T11:45:00',
          result: 'positive',
          confidence: 0.92,
          imageUrl: 'https://images.unsplash.com/photo-1559757148-c1a53a7d8af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        }
      ];
      
      setDetectionHistory(mockHistory);
    } catch (error) {
      console.error('Error fetching detection history:', error);
    }
  };

  return (
    <DetectionContext.Provider
      value={{
        isLoading,
        detectionHistory,
        currentResult,
        analyzeScan,
        clearResult,
        refreshHistory
      }}
    >
      {children}
    </DetectionContext.Provider>
  );
};

export const useDetection = () => {
  const context = useContext(DetectionContext);
  if (context === undefined) {
    throw new Error('useDetection must be used within a DetectionProvider');
  }
  return context;
};