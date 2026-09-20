import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { HeartPulse, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Assessment', path: '/assessment' },
    { name: 'Patient Details', path: '/patient-details' },
    { name: 'Insights', path: '/insights' },
    { name: 'Model Accuracy', path: '/model-accuracy' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <HeartPulse size={28} className="logo-icon" />
          <div className="logo-text">
            <span className="brand-name">Heartiva AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu desktop-only">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Solutions</NavLink>
          <NavLink to="/assessment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Assessment</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Insights</NavLink>
          <NavLink to="/model-accuracy" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Model Accuracy</NavLink>
        </div>

        <div className="nav-actions desktop-only">
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          <Link to="/assessment" className="btn btn-primary ml-4">Start Assessment</Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle mobile-only" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mobile-actions">
            <Link to="/assessment" className="btn btn-primary w-full text-center">Start Assessment</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
