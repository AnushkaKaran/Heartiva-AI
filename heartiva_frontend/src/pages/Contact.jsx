import { Send, Mail, HeartPulse, Brain, BookOpen, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container page-container contact-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Get in touch regarding the Heartiva AI academic project.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-panel">
          <div className="info-brand">
            <HeartPulse size={40} className="brand-icon mb-4" />
            <h2>Heartiva AI</h2>
            <p className="brand-subtitle">Academic Machine Learning Project</p>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-item">
            <MessageSquare size={24} className="info-icon" />
            <div className="info-content">
              <h3>Get in Touch</h3>
              <p>Have questions about the Heartiva AI academic project, its implementation, or the machine-learning approach?</p>
            </div>
          </div>

          <div className="info-item">
            <Mail size={24} className="info-icon" />
            <div className="info-content">
              <h3>General Inquiries</h3>
              <p>For questions related to the academic research, model architecture, frontend implementation, or project details.</p>
            </div>
          </div>

          <div className="info-item">
            <Brain size={24} className="info-icon" />
            <div className="info-content">
              <h3>Machine Learning</h3>
              <p>Explore how machine learning and data-driven analysis are used in the project.</p>
            </div>
          </div>

          <div className="info-item">
            <BookOpen size={24} className="info-icon" />
            <div className="info-content">
              <h3>Academic Project</h3>
              <p>This project is developed for educational and academic purposes.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your email address" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full justify-center">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
