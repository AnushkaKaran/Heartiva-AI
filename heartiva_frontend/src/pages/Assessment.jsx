import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, User, Activity, HeartPulse } from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import Stepper from '../components/Stepper';
import './Assessment.css';

const steps = ['Patient', 'Clinical', 'Lifestyle', 'Review'];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const { patientData, updatePatientData } = useAssessment();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updatePatientData({ [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!patientData.gender) newErrors.gender = 'Gender is required';
      if (!patientData.age || patientData.age <= 0) newErrors.age = 'Valid age is required';
      if (!patientData.height || patientData.height <= 0) newErrors.height = 'Valid height is required';
      if (!patientData.weight || patientData.weight <= 0) newErrors.weight = 'Valid weight is required';
    } else if (currentStep === 2) {
      if (!patientData.systolicBP || patientData.systolicBP <= 0) newErrors.systolicBP = 'Valid systolic BP is required';
      if (!patientData.diastolicBP || patientData.diastolicBP <= 0) newErrors.diastolicBP = 'Valid diastolic BP is required';
      if (!patientData.cholesterol) newErrors.cholesterol = 'Cholesterol level is required';
      if (!patientData.glucose) newErrors.glucose = 'Glucose level is required';
    } else if (currentStep === 3) {
      if (!patientData.smoking) newErrors.smoking = 'Please select a smoking status';
      if (!patientData.alcohol) newErrors.alcohol = 'Please select an alcohol status';
      if (!patientData.physicalActivity) newErrors.physicalActivity = 'Please select physical activity status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    navigate('/prediction');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-section animate-fade-in">
            <h2>Patient Information</h2>
            <div className="grid grid-cols-2 gap-6 form-grid">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select name="gender" value={patientData.gender} onChange={handleInputChange} className={`form-control ${errors.gender ? 'error' : ''}`}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <div className="form-error">{errors.gender}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Age (years)</label>
                <input type="number" name="age" value={patientData.age} onChange={handleInputChange} className={`form-control ${errors.age ? 'error' : ''}`} placeholder="e.g. 45" />
                {errors.age && <div className="form-error">{errors.age}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Height (cm)</label>
                <input type="number" name="height" value={patientData.height} onChange={handleInputChange} className={`form-control ${errors.height ? 'error' : ''}`} placeholder="e.g. 170" />
                {errors.height && <div className="form-error">{errors.height}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Weight (kg)</label>
                <input type="number" name="weight" value={patientData.weight} onChange={handleInputChange} className={`form-control ${errors.weight ? 'error' : ''}`} placeholder="e.g. 70" />
                {errors.weight && <div className="form-error">{errors.weight}</div>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-section animate-fade-in">
            <h2>Clinical Metrics</h2>
            <div className="grid grid-cols-2 gap-6 form-grid">
              <div className="form-group">
                <label className="form-label">Systolic Blood Pressure (mmHg)</label>
                <input type="number" name="systolicBP" value={patientData.systolicBP} onChange={handleInputChange} className={`form-control ${errors.systolicBP ? 'error' : ''}`} placeholder="e.g. 120" />
                {errors.systolicBP && <div className="form-error">{errors.systolicBP}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Diastolic Blood Pressure (mmHg)</label>
                <input type="number" name="diastolicBP" value={patientData.diastolicBP} onChange={handleInputChange} className={`form-control ${errors.diastolicBP ? 'error' : ''}`} placeholder="e.g. 80" />
                {errors.diastolicBP && <div className="form-error">{errors.diastolicBP}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Cholesterol Level</label>
                <select name="cholesterol" value={patientData.cholesterol} onChange={handleInputChange} className={`form-control ${errors.cholesterol ? 'error' : ''}`}>
                  <option value="">Select Level</option>
                  <option value="Normal">Normal</option>
                  <option value="Above Normal">Above Normal</option>
                  <option value="Well Above Normal">Well Above Normal</option>
                </select>
                {errors.cholesterol && <div className="form-error">{errors.cholesterol}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Glucose Level</label>
                <select name="glucose" value={patientData.glucose} onChange={handleInputChange} className={`form-control ${errors.glucose ? 'error' : ''}`}>
                  <option value="">Select Level</option>
                  <option value="Normal">Normal</option>
                  <option value="Above Normal">Above Normal</option>
                  <option value="Well Above Normal">Well Above Normal</option>
                </select>
                {errors.glucose && <div className="form-error">{errors.glucose}</div>}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-section animate-fade-in">
            <h2>Lifestyle Factors</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="form-group">
                <label className="form-label">Do you smoke?</label>
                <div className="segment-control">
                  <label className={`segment ${patientData.smoking === 'No' ? 'active' : ''}`}>
                    <input type="radio" name="smoking" value="No" checked={patientData.smoking === 'No'} onChange={handleInputChange} />
                    No
                  </label>
                  <label className={`segment ${patientData.smoking === 'Yes' ? 'active' : ''}`}>
                    <input type="radio" name="smoking" value="Yes" checked={patientData.smoking === 'Yes'} onChange={handleInputChange} />
                    Yes
                  </label>
                </div>
                {errors.smoking && <div className="form-error">{errors.smoking}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Do you consume alcohol regularly?</label>
                <div className="segment-control">
                  <label className={`segment ${patientData.alcohol === 'No' ? 'active' : ''}`}>
                    <input type="radio" name="alcohol" value="No" checked={patientData.alcohol === 'No'} onChange={handleInputChange} />
                    No
                  </label>
                  <label className={`segment ${patientData.alcohol === 'Yes' ? 'active' : ''}`}>
                    <input type="radio" name="alcohol" value="Yes" checked={patientData.alcohol === 'Yes'} onChange={handleInputChange} />
                    Yes
                  </label>
                </div>
                {errors.alcohol && <div className="form-error">{errors.alcohol}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Do you engage in regular physical activity?</label>
                <div className="segment-control">
                  <label className={`segment ${patientData.physicalActivity === 'No' ? 'active' : ''}`}>
                    <input type="radio" name="physicalActivity" value="No" checked={patientData.physicalActivity === 'No'} onChange={handleInputChange} />
                    No
                  </label>
                  <label className={`segment ${patientData.physicalActivity === 'Yes' ? 'active' : ''}`}>
                    <input type="radio" name="physicalActivity" value="Yes" checked={patientData.physicalActivity === 'Yes'} onChange={handleInputChange} />
                    Yes
                  </label>
                </div>
                {errors.physicalActivity && <div className="form-error">{errors.physicalActivity}</div>}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-section animate-fade-in">
            <h2>Review Your Information</h2>
            <div className="review-grid">
              <div className="review-card premium-card">
                <div className="review-card-header">
                  <User size={20} className="review-icon" />
                  <h3>Patient</h3>
                </div>
                <div className="review-list">
                  <div className="review-item">
                    <span className="review-label">Age</span>
                    <span className="review-value">{patientData.age} years</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Gender</span>
                    <span className="review-value">{patientData.gender}</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Height</span>
                    <span className="review-value">{patientData.height} cm</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Weight</span>
                    <span className="review-value">{patientData.weight} kg</span>
                  </div>
                </div>
              </div>
              <div className="review-card premium-card">
                <div className="review-card-header">
                  <Activity size={20} className="review-icon" />
                  <h3>Clinical</h3>
                </div>
                <div className="review-list">
                  <div className="review-item">
                    <span className="review-label">Systolic BP</span>
                    <span className="review-value">{patientData.systolicBP} mmHg</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Diastolic BP</span>
                    <span className="review-value">{patientData.diastolicBP} mmHg</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Cholesterol</span>
                    <span className="review-value">{patientData.cholesterol}</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Glucose</span>
                    <span className="review-value">{patientData.glucose}</span>
                  </div>
                </div>
              </div>
              <div className="review-card premium-card">
                <div className="review-card-header">
                  <HeartPulse size={20} className="review-icon" />
                  <h3>Lifestyle</h3>
                </div>
                <div className="review-list">
                  <div className="review-item">
                    <span className="review-label">Smoking</span>
                    <span className="review-value">{patientData.smoking}</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Alcohol</span>
                    <span className="review-value">{patientData.alcohol}</span>
                  </div>
                  <div className="review-divider"></div>
                  <div className="review-item">
                    <span className="review-label">Physical Activity</span>
                    <span className="review-value">{patientData.physicalActivity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container page-container assessment-page">
      <div className="page-header text-center">
        <h1 className="page-title">Cardiovascular Risk Assessment</h1>
        <p className="page-subtitle">Enter the required patient information to generate an ML-based cardiovascular risk assessment.</p>
      </div>

      <div className="card-grid">
        <Stepper currentStep={currentStep} steps={steps} />
      </div>

      <div className="assessment-form-container card">
        {renderStep()}

        <div className="form-actions">
          {currentStep > 1 ? (
            <button className="btn btn-secondary" onClick={handleBack}>
              <ArrowLeft size={18} /> Back
            </button>
          ) : <div></div>}

          {currentStep < 4 ? (
            <button className="btn btn-primary" onClick={handleNext}>
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn btn-primary analyze-btn" onClick={handleSubmit}>
              Analyze Risk <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
