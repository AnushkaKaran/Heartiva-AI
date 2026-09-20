import { Code, Database, Server, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const techStack = [
    { name: "React", desc: "Frontend library for building the UI components" },
    { name: "Vite", desc: "Fast build tool and development server" },
    { name: "FastAPI", desc: "Backend framework for the prediction API" },
    { name: "Python", desc: "Core language for data processing and modeling" },
    { name: "Scikit-Learn", desc: "Machine learning library for model training" },
    { name: "Machine Learning", desc: "Algorithms utilized for predictive analysis" }
  ];

  return (
    <div className="container page-container about-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">About Heartiva AI</h1>
        <p className="page-subtitle">Academic project dedicated to intelligent cardiovascular risk assessment.</p>
      </div>

      <div className="about-content grid grid-cols-2 gap-8 mb-16 card-grid">
        <div className="about-text card">
          <h2>Project Overview</h2>
          <p>Heartiva AI is an educational machine learning project focused on cardiovascular risk assessment. By utilizing modern web technologies and machine learning algorithms, the project demonstrates how data-driven predictions can be integrated into a user-friendly interface.</p>
          <div className="disclaimer-alert mt-6">
            <CheckCircle2 size={24} className="text-primary mr-3" />
            <p><strong>Academic Purpose:</strong> Heartiva AI is not intended to replace professional medical diagnosis, advice, or treatment.</p>
          </div>
        </div>

        <div className="about-text card">
          <h2>Machine Learning Approach</h2>
          <p>The project involves developing a predictive model using confirmed clinical datasets. The data processing pipeline includes rigorous data validation, preprocessing, and feature transformation to ensure high-quality inputs for the model training phase.</p>
          <p className="mt-4">The exact algorithms and dataset specifics are continuously evaluated to optimize academic learning outcomes.</p>
        </div>
      </div>

      <div className="tech-stack-section">
        <h2 className="text-center mb-8" style={{ color: 'var(--primary-dark)' }}>Technology Stack</h2>
        <div className="grid grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card card">
              <div className="tech-header">
                {index < 2 ? <Code size={24} className="tech-icon" /> : index < 4 ? <Server size={24} className="tech-icon" /> : <Database size={24} className="tech-icon" />}
                <h3>{tech.name}</h3>
              </div>
              <p>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
