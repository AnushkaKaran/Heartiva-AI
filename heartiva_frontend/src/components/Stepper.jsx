
import { Check as CheckIcon } from 'lucide-react';
import './Stepper.css';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;
        
        return (
          <div key={index} className={`stepper-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="stepper-circle">
              {isCompleted ? <CheckIcon size={16} /> : `0${stepNum}`}
            </div>
            <div className="stepper-label">{step}</div>
            {index < steps.length - 1 && <div className="stepper-line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
