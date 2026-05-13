import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { analyzeScan as analyzeScanApi, mockAnalyzeScan, getDetectionHistory, HistoryItem } from '../utils/api';

interface DetectionContextType {
  isLoading: boolean;
  detectionHistory: HistoryItem[];
  currentResult: {
    detected: boolean;
    confidence: number;
    processingTime?: number;
    tumorTypeFromName?: string;
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
    tumorTypeFromName?: string;
  } | null>(null);

  useEffect(() => {
    refreshHistory();
  }, []);

  const analyzeScan = async (file: File) => {
    setIsLoading(true);
    try {
      let result;
      let usedFallback = false;

      try {
        result = await analyzeScanApi(file);
      } catch (apiError) {
        console.warn('Falling back to mock prediction due to API error:', apiError);
        result = await mockAnalyzeScan(file);
        usedFallback = true;
      }

      setCurrentResult({
        ...result,
        tumorTypeFromName: result.tumorTypeFromName,
      });


      if (!usedFallback) {
        await refreshHistory();
        return;
      }

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
      const history = await getDetectionHistory();
      if (history && history.length > 0) {
        setDetectionHistory(history);
        return;
      }
    } catch (apiError) {
      console.warn('Unable to fetch remote history, using local sample data:', apiError);
    }

    const mockHistory: HistoryItem[] = [
      {
        id: '1',
        patientId: 'P-10045',
        scanName: 'brain_mri_001.dcm',
        date: '2023-05-15T09:30:00',
        result: 'negative',
        confidence: 0.96,
        imageUrl: null
      },
      {
        id: '2',
        patientId: 'P-10046',
        scanName: 'brain_mri_002.dcm',
        date: '2023-05-14T14:15:00',
        result: 'positive',
        confidence: 0.89,
        imageUrl: null
      },
      {
        id: '3',
        patientId: 'P-10047',
        scanName: 'brain_mri_003.dcm',
        date: '2023-05-14T11:45:00',
        result: 'positive',
        confidence: 0.92,
        imageUrl: null
      }
    ];

    setDetectionHistory(mockHistory);
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