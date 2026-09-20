import { createContext, useState, useContext } from 'react';

const AssessmentContext = createContext();

export function AssessmentProvider({ children }) {
  const [patientData, setPatientData] = useState({
    // Step 1: Patient Information
    gender: '',
    age: '',
    height: '',
    weight: '',
    
    // Step 2: Clinical Metrics
    systolicBP: '',
    diastolicBP: '',
    cholesterol: '',
    glucose: '',
    
    // Step 3: Lifestyle Factors
    smoking: '',
    alcohol: '',
    physicalActivity: ''
  });

  const updatePatientData = (newData) => {
    setPatientData(prev => ({ ...prev, ...newData }));
  };

  const resetPatientData = () => {
    setPatientData({
      gender: '', age: '', height: '', weight: '',
      systolicBP: '', diastolicBP: '', cholesterol: '', glucose: '',
      smoking: '', alcohol: '', physicalActivity: ''
    });
  };

  return (
    <AssessmentContext.Provider value={{ patientData, updatePatientData, resetPatientData }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  return useContext(AssessmentContext);
}
