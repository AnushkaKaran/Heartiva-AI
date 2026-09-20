import { LayoutDashboard, Users, BrainCircuit, BarChart3, Activity, PieChart } from 'lucide-react';
import './GridPages.css';

const Solutions = () => {
  const solutions = [
    {
      title: "Cardiovascular Risk Assessment",
      description: "Comprehensive evaluation of patient risk factors using trained machine learning models.",
      icon: <Activity size={32} />
    },
    {
      title: "Patient Profile Analysis",
      description: "Structured collection and review of demographic, clinical, and lifestyle data.",
      icon: <Users size={32} />
    },
    {
      title: "Machine Learning Prediction",
      description: "Advanced classification algorithms applied to structured medical datasets.",
      icon: <BrainCircuit size={32} />
    },
    {
      title: "Clinical Metrics",
      description: "Evaluation of key physiological indicators including blood pressure and glucose.",
      icon: <BarChart3 size={32} />
    },
    {
      title: "Lifestyle Factors",
      description: "Analysis of behavioral patterns that contribute to overall cardiovascular health.",
      icon: <PieChart size={32} />
    },
    {
      title: "Model Insights",
      description: "Transparent visualization of model performance and predictive mechanics.",
      icon: <LayoutDashboard size={32} />
    }
  ];

  return (
    <div className="container page-container animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Intelligent Cardiovascular Assessment</h1>
        <p className="page-subtitle">Explore the capabilities of Heartiva AI.</p>
      </div>
      
      <div className="grid-layout card-grid">
        {solutions.map((item, index) => (
          <div key={index} className="card feature-card-rich">
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
