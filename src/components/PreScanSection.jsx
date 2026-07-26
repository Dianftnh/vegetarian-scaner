import { Camera, ArrowLeft, ShieldAlert, Cpu, Lightbulb, RefreshCw, CheckCircle2 } from 'lucide-react';

function PreScanSection({ onRequestPermission, onBack, error, permissionState, isModelReady }) {
  const isDenied = permissionState === 'denied' || Boolean(error);

  return (
    <div className="prescan-container view-transition">
      <div className="prescan-card">
        {isDenied ? (
          /* Error / Permission Denied State */
          <div className="prescan-content error-state">
            <div className="prescan-icon-wrapper error">
              <ShieldAlert size={48} />
            </div>

            <h2 className="prescan-title">Camera Access Required</h2>
            <p className="prescan-desc">
              {error || 'VegetarianScan requires camera access permission to scan and recognize vegetables.'}
            </p>

            <div className="prescan-tips">
              <p className="tips-title">Troubleshooting steps:</p>
              <ul>
                <li>Click the lock / permission icon next to your browser URL.</li>
                <li>Set Camera permission to <strong>&quot;Allow&quot;</strong>.</li>
                <li>Click <strong>Try Again</strong> below.</li>
              </ul>
            </div>

            <div className="prescan-actions">
              <button className="primary-cta-btn" onClick={onRequestPermission}>
                <RefreshCw size={18} />
                <span>Try Again</span>
              </button>

              <button className="secondary-btn" onClick={onBack}>
                <ArrowLeft size={18} />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        ) : (
          /* Initial Preparation State */
          <div className="prescan-content">
            <div className="prescan-icon-wrapper">
              <Camera size={44} />
            </div>

            <h2 className="prescan-title">Ready to Recognize Vegetables?</h2>
            <p className="prescan-desc">
              VegetarianScan requires access to your device camera to recognize vegetables and provide real-time AI facts.
            </p>

            <div className="prescan-flow-steps">
              <div className="flow-step">
                <div className="flow-icon">
                  <Camera size={20} />
                </div>
                <span>1. Camera</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step">
                <div className="flow-icon">
                  <Cpu size={20} />
                </div>
                <span>2. AI Vision</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step">
                <div className="flow-icon">
                  <Lightbulb size={20} />
                </div>
                <span>3. AI Facts</span>
              </div>
            </div>

            <div className="privacy-note">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Your privacy is protected. Video frames are processed 100% locally in your browser.</span>
            </div>

            <div className="prescan-actions">
              <button
                className="primary-cta-btn"
                onClick={onRequestPermission}
                disabled={!isModelReady}
                style={{ opacity: isModelReady ? 1 : 0.7 }}
              >
                <span>{isModelReady ? 'Allow Camera & Start' : 'Preparing AI Model...'}</span>
              </button>

              <button className="secondary-btn" onClick={onBack}>
                <ArrowLeft size={18} />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreScanSection;
