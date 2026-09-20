import { ArrowDown } from 'lucide-react';
import './ModelMechanics.css';

const ModelMechanics = () => {
  const pipelineSteps = [
    {
      title: "Patient Input",
      description: "Collection of demographic, clinical, and lifestyle data points through the frontend application."
    },
    {
      title: "Data Validation",
      description: "Ensuring all inputs are correctly formatted and fall within clinically valid ranges."
    },
    {
      title: "Data Preprocessing",
      description: "Handling categorical encodings and scaling continuous features to standardize inputs."
    },
    {
      title: "Feature Transformation",
      description: "Mapping the standardized inputs to the specific feature array expected by the ML model."
    },
    {
      title: "Trained Machine Learning Model",
      description: "The data is fed into a pre-trained classification model that has learned complex patterns from cardiovascular datasets."
    },
    {
      title: "Prediction",
      description: "The model outputs a probability score representing the likelihood of cardiovascular risk."
    },
    {
      title: "Result",
      description: "The prediction is securely returned to the interface and displayed in a user-friendly format."
    }
  ];

  return (
    <div className="container page-container mechanics-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">How Heartiva AI Works</h1>
        <p className="page-subtitle">The data pipeline from patient input to risk prediction.</p>
      </div>

      <div className="pipeline-container">
        {pipelineSteps.map((step, index) => (
          <div key={index} className="pipeline-step-wrapper">
            <div className="pipeline-card card">
              <div className="step-badge">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
            {index < pipelineSteps.length - 1 && (
              <div className="pipeline-arrow">
                <ArrowDown size={32} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelMechanics;
