import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <HeartPulse size={24} className="logo-icon" />
              <span className="brand-name">Heartiva AI</span>
            </Link>
            <p className="footer-description">
              Intelligent Cardiovascular Risk Assessment.
            </p>
            <p className="footer-disclaimer">
              Built as an academic Machine Learning project. <br/>
              Heartiva AI is an educational machine learning project and is not intended to replace professional medical diagnosis or medical advice.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Application</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/assessment">Assessment</Link></li>
              <li><Link to="/patient-details">Patient Details</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Intelligence</h4>
            <ul>
              <li><Link to="/insights">Clinical Insights</Link></li>
              <li><Link to="/model-accuracy">Model Accuracy</Link></li>
              <li><Link to="/model-mechanics">How It Works</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Project</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Heartiva AI. Academic Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
