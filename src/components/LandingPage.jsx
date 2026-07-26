import { ArrowRight, Camera, Cpu, Lightbulb, ShieldCheck, WifiOff, Sparkles } from 'lucide-react';

function LandingPage({ onStart }) {
  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page view-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="hero-badge-icon" />
            <span>Browser-Based AI Vegetable Identifier</span>
          </div>

          <h1 className="hero-headline">
            Recognize Vegetables <br />
            <span className="hero-highlight">Smarter</span> with AI.
          </h1>

          <p className="hero-subtext">
            Point your camera at a vegetable, let AI identify it instantly, and discover educational fun facts in seconds.
          </p>

          <div className="hero-actions">
            <button className="primary-cta-btn" onClick={onStart}>
              <span>Start Recognition</span>
              <ArrowRight size={20} />
            </button>
            <a href="#how-it-works" className="secondary-link" onClick={scrollToHowItWorks}>
              How It Works ↓
            </a>
          </div>

          <div className="hero-feature-pills">
            <div className="feature-pill">
              <Cpu size={16} className="pill-icon" />
              <span>Browser-Based AI (WebGPU/WebGL)</span>
            </div>
            <div className="feature-pill">
              <WifiOff size={16} className="pill-icon" />
              <span>Offline Capability Enabled*</span>
            </div>
            <div className="feature-pill">
              <ShieldCheck size={16} className="pill-icon" />
              <span>100% Local Privacy</span>
            </div>
          </div>
        </div>

        {/* Visual Graphic Mockup */}
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-card-header">
              <span className="visual-dot red"></span>
              <span className="visual-dot yellow"></span>
              <span className="visual-dot green"></span>
              <span className="visual-title">VegetarianScan AI Scanner</span>
            </div>
            <div className="visual-card-body">
              <div className="visual-scanner-demo">
                <div className="demo-scan-line"></div>
                <div className="demo-badge">
                  <span className="demo-badge-dot"></span>
                  <span>Soybean • 98% Confidence</span>
                </div>
                <div className="demo-fact-box">
                  <p>&quot;Soybeans are legumes that are rich in protein and widely used to make foods such as tofu and tempeh.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How VegetarianScan Works</h2>
          <p className="section-subtitle">Three easy steps to recognize vegetables and learn interesting facts.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon-wrapper">
              <Camera size={32} />
            </div>
            <h3 className="step-title">Allow Camera Access</h3>
            <p className="step-desc">
              Grant camera access so the browser can stream video frames in real-time.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon-wrapper">
              <Cpu size={32} />
            </div>
            <h3 className="step-title">AI Recognition</h3>
            <p className="step-desc">
              VegetarianScan uses browser-based Computer Vision to identify vegetable types instantly.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon-wrapper">
              <Sparkles size={28} />
            </div>
            <h3 className="step-title">Discover Facts</h3>
            <p className="step-desc">
              Local Generative AI creates educational and interesting nutrition facts about the vegetable.
            </p>
          </div>
        </div>

        <div className="bottom-cta-box">
          <h3>Ready to try VegetarianScan?</h3>
          <p>No registration needed, use directly in your browser.</p>
          <button className="primary-cta-btn" onClick={onStart}>
            <span>Start Recognition Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
