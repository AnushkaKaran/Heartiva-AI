import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  FileText,
  RefreshCw,
  Activity,
  Heart,
  Droplet,
  Wind,
  Zap,
  CheckCircle,
  Shield,
  Info,
} from "lucide-react";
import { useAssessment } from "../context/AssessmentContext";
import { predictRisk } from "../services/predictionService";
import {
  calculateBMI,
  getBMIStatus,
  getBMIExplanation,
  analyzeBloodPressure,
  analyzeCholesterol,
  analyzeGlucose,
  analyzeLifestyle,
  generateRecommendations,
} from "../utils/healthAnalysis";
import "./Prediction.css";

const Prediction = () => {
  const { patientData } = useAssessment();
  const navigate = useNavigate();
  const { resetPatientData } = useAssessment();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [loadingText, setLoadingText] = useState(
    "Processing patient information...",
  );

  useEffect(() => {
    // If no patient data, redirect back to assessment
    if (!patientData.age) {
      navigate("/assessment");
      return;
    }

    const fetchPrediction = async () => {
      try {
        const data = await predictRisk(patientData);
        setResult(data);
      } catch (error) {
        console.error("Error fetching prediction:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [patientData, navigate]);

  useEffect(() => {
    if (!loading) return;

    const messages = [
      "Processing patient information...",
      "Analyzing clinical metrics...",
      "Evaluating lifestyle factors...",
      "Running AI risk assessment...",
      "Generating personalized results...",
    ];

    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setLoadingText(messages[i]);
    }, 1200);

    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <div className="container section ai-loading">
        <div className="pred-heart-container">
          <div className="pred-heart-glow"></div>

          <div className="pred-heart-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>

          <div className="pred-ecg-line">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path
                d="M0,50 L150,50 L170,30 L190,70 L210,10 L230,90 L250,40 L270,50 L500,50 L650,50 L670,30 L690,70 L710,10 L730,90 L750,40 L770,50 L1000,50"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="pred-particles">
            <div className="pred-particle pred-p1"></div>
            <div className="pred-particle pred-p2"></div>
            <div className="pred-particle pred-p3"></div>
            <div className="pred-particle pred-p4"></div>
            <div className="pred-particle pred-p5"></div>
          </div>
        </div>

        <h2 className="ai-loading-title">Analyzing Cardiovascular Risk</h2>

        <div className="ai-loading-progress-bar">
          <div className="ai-loading-progress-fill"></div>
        </div>

        <p className="ai-loading-text">{loadingText}</p>
      </div>
    );
  }

  if (!result) return null;

  const getStatusClass = (status) => {
    switch (status) {
      case "Healthy":
        return "status-healthy";
      case "Needs Attention":
        return "status-attention";
      case "Risk Factor":
        return "status-risk";
      default:
        return "status-monitor";
    }
  };

  const bmi = calculateBMI(patientData.height, patientData.weight);
  const bmiStatus = getBMIStatus(bmi);
  const bmiMessage = getBMIExplanation(bmi);

  const bpAnalysis = analyzeBloodPressure(
    patientData.systolicBP,
    patientData.diastolicBP,
  );

  const cholAnalysis = analyzeCholesterol(patientData.cholesterol);
  const glucAnalysis = analyzeGlucose(patientData.glucose);
  const smokeAnalysis = analyzeLifestyle("smoking", patientData.smoking);

  const activityAnalysis = analyzeLifestyle(
    "activity",
    patientData.physicalActivity,
  );

  const recommendations = generateRecommendations(patientData, bmi);

  return (
    <div className="container page-container prediction-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Cardiovascular Risk Assessment</h1>

        <p className="page-subtitle">
          Intelligent prediction based on the trained Machine Learning model.
        </p>
      </div>

      <section className="dashboard-section">
        <div className="section-header">
          <Shield className="section-icon" />
          <h2>Heartiva AI Risk Analysis</h2>
        </div>

        <div className="prediction-card">
          <div className="prediction-main">
            {/* Probability Ring */}
            {/* 3D Orbiting Risk Indicator */}
            <div className="risk-indicator orbit-container">
              {/* Back orbit */}
              <div className="orbit orbit-back">
                <span className="orbit-planet planet-purple"></span>
              </div>

              {/* Second orbit */}
              <div className="orbit orbit-middle">
                <span className="orbit-planet planet-pink"></span>
              </div>

              {/* Front orbit */}
              <div className="orbit orbit-front">
                <span className="orbit-planet planet-blue"></span>
              </div>

              {/* Center probability */}
              <div className="risk-value orbit-center">
                <span className="ring-caption">
                  CARDIOVASCULAR DISEASE PROBABILITY
                </span>

                <span className="ring-percentage">
                  {Number(result.class1Probability).toFixed(2)}%
                </span>

                <span className="ring-description">Model Output</span>
              </div>
            </div>

            {/* Prediction Details */}
            <div className="risk-details">
              <h2>Model Prediction</h2>

              <p className="prediction-label">{result.predictionLabel}</p>

              {/* Probability Breakdown */}
              <div className="probability-details">
                <div className="probability-row">
                  <span className="probability-dot purple-dot"></span>

                  <span className="probability-name">
                    Cardiovascular Disease
                  </span>

                  <span className="probability-number">
                    {Number(result.class1Probability).toFixed(2)}%
                  </span>
                </div>

                <div className="probability-row">
                  <span className="probability-dot lavender-dot"></span>

                  <span className="probability-name">
                    No Cardiovascular Disease
                  </span>

                  <span className="probability-number">
                    {Number(result.class0Probability).toFixed(2)}%
                  </span>
                </div>
              </div>

              <p className="probability-note">
                Probabilities represent the model's output for each class and
                are not a clinical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section mt-8">
        <div className="section-header">
          <Activity className="section-icon" />
          <h2>Your Health Snapshot</h2>
        </div>

        <div className="health-snapshot-grid">
          <div className={`metric-card ${getStatusClass(bmiStatus.status)}`}>
            <span className="metric-label">BMI</span>
            <span className="metric-value">{bmi !== null ? bmi : "N/A"}</span>
            <span className="metric-status">{bmiStatus.label}</span>
          </div>

          <div className={`metric-card ${getStatusClass(bpAnalysis.status)}`}>
            <span className="metric-label">Blood Pressure</span>
            <span className="metric-value">{bpAnalysis.display}</span>
            <span className="metric-status">{bpAnalysis.label}</span>
          </div>

          <div className={`metric-card ${getStatusClass(cholAnalysis.status)}`}>
            <span className="metric-label">Cholesterol</span>
            <span className="metric-value">{cholAnalysis.display}</span>
            <span className="metric-status">{cholAnalysis.label}</span>
          </div>

          <div className={`metric-card ${getStatusClass(glucAnalysis.status)}`}>
            <span className="metric-label">Glucose</span>
            <span className="metric-value">{glucAnalysis.display}</span>
            <span className="metric-status">{glucAnalysis.label}</span>
          </div>

          <div
            className={`metric-card ${getStatusClass(smokeAnalysis.status)}`}
          >
            <span className="metric-label">Smoking</span>
            <span className="metric-value">{smokeAnalysis.display}</span>
            <span className="metric-status">{smokeAnalysis.label}</span>
          </div>

          <div
            className={`metric-card ${getStatusClass(activityAnalysis.status)}`}
          >
            <span className="metric-label">Activity</span>
            <span className="metric-value">{activityAnalysis.display}</span>
            <span className="metric-status">{activityAnalysis.label}</span>
          </div>
        </div>
      </section>

      <section className="dashboard-section mt-8">
        <div className="section-header">
          <Heart className="section-icon" />
          <h2>Your Health Factors</h2>
        </div>

        <div className="health-factors-list">
          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Activity size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Body Mass Index</h3>

                  <span className="factor-value">
                    {bmi !== null ? bmi : "N/A"}
                  </span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(bmiStatus.status)}`}
              >
                {bmiStatus.status}
              </span>
            </div>

            <p className="factor-message">{bmiMessage}</p>
          </div>

          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Heart size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Blood Pressure</h3>

                  <span className="factor-value">{bpAnalysis.display}</span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(bpAnalysis.status)}`}
              >
                {bpAnalysis.status}
              </span>
            </div>

            <p className="factor-message">{bpAnalysis.message}</p>
          </div>

          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Droplet size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Cholesterol</h3>

                  <span className="factor-value">{cholAnalysis.display}</span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(
                  cholAnalysis.status,
                )}`}
              >
                {cholAnalysis.status}
              </span>
            </div>

            <p className="factor-message">{cholAnalysis.message}</p>
          </div>

          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Droplet size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Glucose</h3>

                  <span className="factor-value">{glucAnalysis.display}</span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(
                  glucAnalysis.status,
                )}`}
              >
                {glucAnalysis.status}
              </span>
            </div>

            <p className="factor-message">{glucAnalysis.message}</p>
          </div>

          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Wind size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Smoking</h3>

                  <span className="factor-value">{smokeAnalysis.display}</span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(
                  smokeAnalysis.status,
                )}`}
              >
                {smokeAnalysis.status}
              </span>
            </div>

            <p className="factor-message">{smokeAnalysis.message}</p>
          </div>

          <div className="health-factor-row card">
            <div className="factor-main">
              <div className="factor-left">
                <Zap size={24} className="factor-icon" />

                <div className="factor-info">
                  <h3>Physical Activity</h3>

                  <span className="factor-value">
                    {activityAnalysis.display}
                  </span>
                </div>
              </div>

              <span
                className={`factor-badge ${getStatusClass(
                  activityAnalysis.status,
                )}`}
              >
                {activityAnalysis.status}
              </span>
            </div>

            <p className="factor-message">{activityAnalysis.message}</p>
          </div>
        </div>
      </section>

      <section className="dashboard-section mt-8">
        <div className="section-header">
          <CheckCircle className="section-icon" />
          <h2>Heartiva Recommendations</h2>
        </div>

        <div className="recommendations-container card">
          <p className="recommendations-intro">
            Your cardiovascular profile shows a few areas that may benefit from
            attention.
          </p>

          <ul className="recommendations-list">
            {recommendations.map((rec, index) => (
              <li key={index} className="recommendation-item">
                <CheckCircle size={20} className="rec-icon" />

                <p>{rec}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dashboard-section mt-8">
        <div className="section-header">
          <Info className="section-icon" />
          <h2>Why This Result?</h2>
        </div>

        <div className="info-card card">
          <p>
            Heartiva AI uses a machine-learning model to estimate cardiovascular
            risk from the assessment data. Additional indicators such as BMI and
            individual health-factor insights are provided to help explain the
            profile and are not a medical diagnosis.
          </p>
        </div>
      </section>

      <div className="disclaimer-alert mt-8">
        <AlertCircle size={20} />

        <p>
          <strong>Educational use only — not a medical diagnosis.</strong> This
          tool is for academic demonstration purposes and should not replace
          professional medical advice.
        </p>
      </div>

      <div className="actions-section">
        <Link to="/patient-details" className="btn btn-secondary">
          <FileText size={18} /> View Patient Details
        </Link>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            resetPatientData();
            navigate("/assessment");
          }}
        >
          <RefreshCw size={18} /> New Assessment
        </button>
      </div>
    </div>
  );
};

export default Prediction;
