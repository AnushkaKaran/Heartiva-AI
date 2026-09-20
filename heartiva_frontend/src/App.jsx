import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Assessment from './pages/Assessment';
import PatientDetails from './pages/PatientDetails';
import Prediction from './pages/Prediction';
import ClinicalInsights from './pages/ClinicalInsights';
import ModelAccuracy from './pages/ModelAccuracy';
import ModelMechanics from './pages/ModelMechanics';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/insights" element={<ClinicalInsights />} />
          <Route path="/model-accuracy" element={<ModelAccuracy />} />
          <Route path="/model-mechanics" element={<ModelMechanics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
