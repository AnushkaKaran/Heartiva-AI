import { Link } from 'react-router-dom';
import { useAssessment } from '../context/AssessmentContext';
import { ArrowRight, Edit, User, Activity, Coffee, ClipboardList } from 'lucide-react';
import './PatientDetails.css';

const PatientDetails = () => {
  const { patientData } = useAssessment();

  if (!patientData.age) {
    return (
      <div className="container section text-center animate-fade-in">
        <div className="empty-state-card card">
          <ClipboardList size={48} className="empty-icon" />
          <h2>No Patient Data</h2>
          <p>You haven't completed the assessment yet.</p>
          <Link to="/assessment" className="btn btn-primary mt-6">
            Start Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-container patient-details-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Patient Details</h1>
        <p className="page-subtitle">Review the submitted patient profile for cardiovascular risk assessment.</p>
      </div>

      <div className="details-grid card-grid">
        {/* Patient Profile */}
        <div className="detail-card card">
          <div className="detail-header">
            <User size={24} className="detail-icon" />
            <h2>Patient Profile</h2>
          </div>
          <div className="detail-list">
            <div className="detail-item">
              <span className="label">Gender</span>
              <span className="value">{patientData.gender}</span>
            </div>
            <div className="detail-item">
              <span className="label">Age</span>
              <span className="value">{patientData.age} years</span>
            </div>
            <div className="detail-item">
              <span className="label">Height</span>
              <span className="value">{patientData.height} cm</span>
            </div>
            <div className="detail-item">
              <span className="label">Weight</span>
              <span className="value">{patientData.weight} kg</span>
            </div>
          </div>
        </div>

        {/* Clinical Metrics */}
        <div className="detail-card card">
          <div className="detail-header">
            <Activity size={24} className="detail-icon" />
            <h2>Clinical Metrics</h2>
          </div>
          <div className="detail-list">
            <div className="detail-item">
              <span className="label">Systolic BP</span>
              <span className="value">{patientData.systolicBP} mmHg</span>
            </div>
            <div className="detail-item">
              <span className="label">Diastolic BP</span>
              <span className="value">{patientData.diastolicBP} mmHg</span>
            </div>
            <div className="detail-item">
              <span className="label">Cholesterol</span>
              <span className="value">{patientData.cholesterol}</span>
            </div>
            <div className="detail-item">
              <span className="label">Glucose</span>
              <span className="value">{patientData.glucose}</span>
            </div>
          </div>
        </div>

        {/* Lifestyle Factors */}
        <div className="detail-card card">
          <div className="detail-header">
            <Coffee size={24} className="detail-icon" />
            <h2>Lifestyle Factors</h2>
          </div>
          <div className="detail-list">
            <div className="detail-item">
              <span className="label">Smoking</span>
              <span className="value">{patientData.smoking}</span>
            </div>
            <div className="detail-item">
              <span className="label">Alcohol Consumption</span>
              <span className="value">{patientData.alcohol}</span>
            </div>
            <div className="detail-item">
              <span className="label">Physical Activity</span>
              <span className="value">{patientData.physicalActivity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="actions-section mt-12">
        <Link to="/assessment" className="btn btn-secondary">
          <Edit size={18} /> Edit Details
        </Link>
        <Link to="/prediction" className="btn btn-primary">
          Run Assessment <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default PatientDetails;
