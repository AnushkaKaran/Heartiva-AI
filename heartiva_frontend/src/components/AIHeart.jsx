import './AIHeart.css';

const AIHeart = () => {
  return (
    <div className="ai-heart-container">
      {/* Floating particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      <div className="heart-wrapper">
        <svg viewBox="0 0 100 100" className="heart-svg">
          {/* Glowing outer aura */}
          <path 
            className="heart-aura"
            d="M50,88 C50,88 15,65 15,35 C15,20 28,10 40,15 C46,18 50,25 50,25 C50,25 54,18 60,15 C72,10 85,20 85,35 C85,65 50,88 50,88 Z"
          />
          
          {/* Orbital Ring - Back Half (Full ellipse, rendered behind heart body) */}
          <g transform="rotate(-15 50 50)">
            <ellipse 
              className="orbital-ring back" 
              cx="50" cy="50" 
              rx="46" ry="16" 
            />
          </g>

          {/* Main Heart Body */}
          <path 
            className="heart-body"
            d="M50,85 C50,85 20,62 20,35 C20,22 30,15 40,18 C45,20 50,28 50,28 C50,28 55,20 60,18 C70,15 80,22 80,35 C80,62 50,85 50,85 Z"
          />

          {/* Orbital Ring - Front Half (Bottom arc, rendered in front of heart body) */}
          <g transform="rotate(-15 50 50)">
            <path 
              className="orbital-ring front" 
              d="M 96,50 A 46,16 0 0,1 4,50" 
            />
          </g>

          {/* AI Circuit traces */}
          <path className="circuit-trace" d="M30,35 L40,45 L50,40 L60,50 L70,35" fill="none" strokeWidth="1" strokeDasharray="4 2" />
          <path className="circuit-trace" d="M35,25 L45,30 L50,20 L55,30 L65,25" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
          <path className="circuit-trace" d="M40,55 L45,60 L50,55 L55,60 L60,55" fill="none" strokeWidth="1" />
          
          {/* AI Core Nodes */}
          <circle cx="30" cy="35" r="1.5" className="core-node" />
          <circle cx="40" cy="45" r="1.5" className="core-node" />
          <circle cx="50" cy="40" r="2.5" className="core-node pulse" />
          <circle cx="60" cy="50" r="1.5" className="core-node" />
          <circle cx="70" cy="35" r="1.5" className="core-node" />
          <circle cx="50" cy="20" r="1.5" className="core-node" />
          <circle cx="50" cy="55" r="1.5" className="core-node" />

          {/* EKG / Pulse Waveform across center */}
          <path 
            className="pulse-wave"
            d="M20,50 L35,50 L40,40 L45,65 L52,30 L58,55 L62,50 L80,50" 
            fill="none" 
            strokeWidth="1.5" 
          />
        </svg>

        {/* Scanning Lens Effect */}
        <div className="scanning-line"></div>
      </div>
    </div>
  );
};

export default AIHeart;
