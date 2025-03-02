import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface DetectionResult {
  detected: boolean;
  confidence: number;
  regions?: {
    x: number;
    y: number;
    width: number;
    height: number;
    confidence: number;
  }[];
  processingTime: number;
}

export interface HistoryItem {
  id: string;
  patientId: string;
  scanName: string;
  date: string;
  result: 'positive' | 'negative';
  confidence: number;
  imageUrl: string;
}

// Function to upload and analyze an MRI scan
export const analyzeScan = async (file: File): Promise<DetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('scan', file);

    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error analyzing scan:', error);
    throw error;
  }
};

// Function to get detection history
export const getDetectionHistory = async (): Promise<HistoryItem[]> => {
  try {
    const response = await axios.get(`${API_URL}/history`);
    return response.data;
  } catch (error) {
    console.error('Error fetching detection history:', error);
    throw error;
  }
};

// Function to get a specific detection result
export const getDetectionById = async (id: string): Promise<DetectionResult> => {
  try {
    const response = await axios.get(`${API_URL}/detection/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching detection ${id}:`, error);
    throw error;
  }
};

// Mock implementation for demo purposes
export const mockAnalyzeScan = (file: File): Promise<DetectionResult> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Random result for demo
      const detected = Math.random() > 0.5;
      const confidence = detected ? 0.85 + Math.random() * 0.15 : 0.05 + Math.random() * 0.15;
      
      resolve({
        detected,
        confidence,
        regions: detected ? [
          {
            x: 120,
            y: 150,
            width: 60,
            height: 40,
            confidence: confidence * 0.95,
          }
        ] : [],
        processingTime: 1.2 + Math.random(),
      });
    }, 2000);
  });
};