import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BrainCircuit, Zap, BarChart3, Stethoscope, ShieldCheck, Database, LayoutDashboard, Quote, Mail, FolderHeart, Clock, Sparkles } from 'lucide-react';
import AIHeart from '../components/AIHeart';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              See Cardiovascular Health <br/>
              <span className="text-gradient">Through a Smarter Lens.</span>
            </h1>
            <p className="hero-subtitle">
              Heartiva AI uses machine learning to analyze cardiovascular risk factors and provide an intelligent, data-driven risk assessment.
            </p>
            <div className="hero-actions">
              <Link to="/assessment" className="btn btn-primary">
                Start Assessment <ArrowRight size={18} />
              </Link>
              <Link to="/solutions" className="btn btn-secondary">
                Explore Solutions
              </Link>
            </div>
            
            <div className="hero-how-it-works">
              <div className="hero-hiw-card">
                <span className="hero-hiw-text">New to Heartiva AI?</span>
                <Link to="/model-mechanics" className="hero-hiw-link">
                  <Sparkles size={16} className="hero-hiw-icon" />
                  <span>See how it works</span>
                  <ArrowRight size={16} className="hero-hiw-arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-visual hero-visual-container">
            <AIHeart />
            
            {/* Connecting Elements */}
            <svg className="connection-line desktop-only" viewBox="0 0 100 100">
              <path d="M10,90 Q50,50 90,10" fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4 4" className="animated-line" />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--primary-light)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Particles */}
            <div className="particles-container">
              <div className="particle p-1"></div>
              <div className="particle p-2"></div>
              <div className="particle p-3"></div>
              <div className="particle p-4"></div>
              <div className="particle p-5"></div>
            </div>

            {/* Floating AI Analysis Card */}
            <div className="floating-ai-card glass-card">
              <div className="floating-card-header">
                <span className="status-dot"></span>
                <span className="status-text">AI System Active</span>
              </div>
              <h4 className="floating-card-title">AI ANALYSIS</h4>
              
              <div className="floating-card-stats">
                <div className="stat-row">
                  <span>Risk Factors Analyzed</span>
                  <span className="stat-value pulse-text">12</span>
                </div>
                <div className="stat-row">
                  <span>Model Confidence</span>
                  <span className="stat-value pulse-text">94.8%</span>
                </div>
              </div>
              
              <div className="ekg-waveform-container">
                <svg className="ekg-waveform" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 L20,10 L25,2 L35,18 L40,10 L60,10 L65,5 L70,12 L75,10 L100,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <BrainCircuit size={32} className="highlight-icon" />
              <h3>ML</h3>
              <p>Machine Learning</p>
            </div>
            <div className="highlight-card">
              <Activity size={32} className="highlight-icon" />
              <h3>AI</h3>
              <p>Intelligent Assessment</p>
            </div>
            <div className="highlight-card">
              <Database size={32} className="highlight-icon" />
              <h3>Multi-Factor</h3>
              <p>Risk Analysis</p>
            </div>
            <div className="highlight-card">
              <Zap size={32} className="highlight-icon" />
              <h3>Fast</h3>
              <p>Prediction Workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heartiva AI */}
      <section className="why-section page-container">
        <div className="container">
          <div className="page-header text-center">
            <h2 className="page-title">Why Heartiva AI?</h2>
            <p className="page-subtitle">A professional approach to cardiovascular risk analysis.</p>
          </div>
          <div className="grid grid-cols-4 gap-6 card-grid why-grid">
            <div className="card feature-card">
              <div className="feature-icon-wrapper"><BrainCircuit size={24} /></div>
              <h3>AI-Powered Analysis</h3>
              <p>Analyze cardiovascular risk factors using a trained Machine Learning model.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon-wrapper"><LayoutDashboard size={24} /></div>
              <h3>Structured Assessment</h3>
              <p>Collect patient information through a guided assessment workflow.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon-wrapper"><Zap size={24} /></div>
              <h3>Fast Risk Evaluation</h3>
              <p>Process submitted information and return a model prediction rapidly.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon-wrapper"><BarChart3 size={24} /></div>
              <h3>Data-Driven Insights</h3>
              <p>Present model results in a clear and understandable interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section page-container">
        <div className="container">
          <div className="page-header text-center">
            <h2 className="page-title">How It Works</h2>
          </div>
          <div className="process-wrapper card-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Enter Patient Information</h3>
              <p>Input vital clinical and lifestyle details.</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>AI Analyzes Risk Factors</h3>
              <p>Machine learning evaluates the data.</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>View Risk Assessment</h3>
              <p>Receive an intelligent prediction report.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Solutions */}
      <section className="advanced-ai-section page-container">
        <div className="container">
          <div className="page-header text-center">
            <h2 className="page-title">Advanced AI Solutions</h2>
            <p className="page-subtitle">Intelligent technology designed to transform cardiovascular risk assessment.</p>
          </div>
          <div className="grid grid-cols-4 gap-6 card-grid advanced-ai-grid">
            <div className="card glass-card">
              <div className="feature-icon-wrapper"><BrainCircuit size={24} /></div>
              <h3>AI-Powered Risk Analysis</h3>
              <p>Analyze multiple cardiovascular risk factors together using machine learning to identify meaningful patterns in patient data.</p>
            </div>
            <div className="card glass-card">
              <div className="feature-icon-wrapper"><ShieldCheck size={24} /></div>
              <h3>Intelligent Health Insights</h3>
              <p>Transform clinical and lifestyle information into easy-to-understand insights that help users understand the factors influencing their risk.</p>
            </div>
            <div className="card glass-card">
              <div className="feature-icon-wrapper"><Database size={24} /></div>
              <h3>Data-Driven Predictions</h3>
              <p>Use trained machine learning models to generate cardiovascular risk predictions from structured patient information.</p>
            </div>
            <div className="card glass-card">
              <div className="feature-icon-wrapper"><Stethoscope size={24} /></div>
              <h3>Personalized Assessment</h3>
              <p>Combine demographic, clinical, and lifestyle factors to create a more comprehensive individual risk assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Users Say */}
      <section className="testimonials-section page-container">
        <div className="container">
          <div className="page-header text-center">
            <h2 className="page-title">What Our Users Say</h2>
            <p className="page-subtitle">Designed to make cardiovascular risk assessment easier to understand.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 card-grid testimonials-grid">
            <div className="card testimonial-card glass-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">"Heartiva AI presents complex cardiovascular risk information in a way that is simple and easy to understand."</p>
              <div className="testimonial-author">
                <div className="avatar">SR</div>
                <div>
                  <h4>Student Project Reviewer</h4>
                </div>
              </div>
            </div>
            <div className="card testimonial-card glass-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">"The assessment workflow makes it easy to enter patient information and understand how different factors contribute to cardiovascular risk."</p>
              <div className="testimonial-author">
                <div className="avatar">AD</div>
                <div>
                  <h4>Academic Demonstration User</h4>
                </div>
              </div>
            </div>
            <div className="card testimonial-card glass-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">"I really liked the combination of machine learning and a modern healthcare interface. It makes the project feel practical and interactive."</p>
              <div className="testimonial-author">
                <div className="avatar">ME</div>
                <div>
                  <h4>ML Project Evaluator</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="contact-info-section page-container">
        <div className="container">
          <div className="page-header text-center">
            <h2 className="page-title">Get in Touch</h2>
            <p className="page-subtitle">Have questions about Heartiva AI or want to learn more about the project?</p>
          </div>
          <div className="grid grid-cols-2 gap-8 card-grid contact-grid">
            <div className="card contact-card left-side glass-card">
              <h3>Let's Connect</h3>
              <p className="mb-6">Whether you're interested in the machine learning approach, the technology behind Heartiva AI, or the project itself, we'd love to hear from you.</p>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>Heartivaai.project@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item mt-4">
                <div className="contact-icon"><FolderHeart size={20} /></div>
                <div>
                  <h4>Project Type</h4>
                  <p>Academic Machine Learning Project</p>
                </div>
              </div>
            </div>

            <div className="card contact-card right-side glass-card">
              <h3>Working Hours</h3>
              
              <div className="hours-list mt-6">
                <div className="hours-item">
                  <span className="day">Monday — Friday</span>
                  <span className="time">9:00 AM — 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM — 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time closed">Closed</span>
                </div>
              </div>

              <div className="hours-note mt-6">
                <Clock size={16} />
                <p>Available for academic discussions and project-related queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section page-container">
        <div className="container">
          <div className="cta-card premium-cta">
            <h2>Ready to Explore Your Cardiovascular Risk?</h2>
            <p>Take a structured assessment and discover how machine learning can help analyze cardiovascular risk factors.</p>
            <Link to="/assessment" className="btn btn-primary mt-6">
              Start Assessment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
