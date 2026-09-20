import { UserCircle, HeartPulse, Activity } from 'lucide-react';
import './GridPages.css';

const ClinicalInsights = () => {
  return (
    <div className="container page-container animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Clinical Insights</h1>
        <p className="page-subtitle">Understand the major cardiovascular risk factors analyzed by Heartiva AI.</p>
      </div>
      
      <h2 className="insights-section-heading first-heading" style={{ color: 'var(--primary-dark)' }}>Physical Attributes</h2>
      <div className="grid-layout insights-grid">
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><UserCircle size={32} /></div>
          <h3>Age & Gender</h3>
          <p>Age is a primary non-modifiable risk factor. Cardiovascular risk generally increases with age, and baseline risks differ between genders.</p>
        </div>
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Height & Weight</h3>
          <p>These metrics are used to calculate Body Mass Index (BMI), an important indicator of metabolic health and cardiovascular strain.</p>
        </div>
      </div>

      <h2 className="insights-section-heading" style={{ color: 'var(--primary-dark)' }}>Clinical Metrics</h2>
      <div className="grid-layout insights-grid">
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><HeartPulse size={32} /></div>
          <h3>Blood Pressure</h3>
          <p>Elevated systolic and diastolic blood pressure forces the heart to work harder, accelerating arterial aging and increasing cardiovascular risk.</p>
        </div>
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Cholesterol</h3>
          <p>High levels of certain cholesterols can lead to plaque buildup in arteries, significantly raising the risk of heart disease.</p>
        </div>
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Glucose</h3>
          <p>Elevated blood glucose levels over time can damage the blood vessels and the nerves that control the heart.</p>
        </div>
      </div>

      <h2 className="insights-section-heading" style={{ color: 'var(--primary-dark)' }}>Lifestyle Factors</h2>
      <div className="grid-layout insights-grid">
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Smoking</h3>
          <p>Smoking damages the lining of the arteries, leading to a buildup of fatty material which narrows the artery.</p>
        </div>
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Alcohol Consumption</h3>
          <p>Excessive alcohol intake can raise blood pressure and contribute to high triglycerides, producing irregular heartbeats.</p>
        </div>
        <div className="card feature-card-rich">
          <div className="icon-wrapper"><Activity size={32} /></div>
          <h3>Physical Activity</h3>
          <p>Regular exercise strengthens the heart muscle, lowers blood pressure, and helps maintain a healthy weight.</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalInsights;
