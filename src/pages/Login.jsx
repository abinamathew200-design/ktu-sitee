import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DEMO_STUDENT } from '../data/sampleData';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('student@ktu.edu.in');
  const [password, setPassword] = useState('ktu12345');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both User ID/Email and Password.');
      return;
    }
    // Perform demo authentication
    onLogin(DEMO_STUDENT);
    navigate('/');
  };

  const handleFillDemo = () => {
    setEmail(DEMO_STUDENT.email);
    setPassword('ktu12345');
    setError('');
  };

  return (
    <div className="login-page-container">
      <div className="login-card-wrapper">
        {/* Left Side branding panel */}
        <div className="login-brand-panel">
          <div className="brand-logo-large">
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="22" fill="#ffffff"/>
              <path d="M25 30 L50 18 L75 30 L50 42 Z" fill="#0d3b66" stroke="#1d4ed8" strokeWidth="3"/>
              <path d="M32 40 L32 58 C32 68 68 68 68 58 L68 40" stroke="#0d3b66" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="75" cy="55" r="4" fill="#3b82f6"/>
            </svg>
          </div>
          <h1 className="brand-heading">KTU SmartHub</h1>
          <p className="brand-subtext">APJ Abdul Kalam Technological University</p>

          <div className="features-list">
            <div className="feature-item">
              <CheckCircle2 size={18} /> <span>Unified Examination Timetables & Results</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} /> <span>Dynamic University Deadline Alerts</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} /> <span>Interactive PYQs & Practice Mock Tests</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} /> <span>Digital Forms & Academic Calendar</span>
            </div>
          </div>

          <div className="security-disclaimer">
            <ShieldAlert size={15} />
            <span>Demo Prototype Environment — Strictly Frontend Powered</span>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="login-form-panel">
          <div className="form-header">
            <h2>Welcome to KTU SmartHub</h2>
            <p>Please enter your KTU Student ID or Registered Email</p>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleLoginSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">User ID / Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. student@ktu.edu.in or TVE22CS045"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label className="form-label">Password</label>
                <button
                  type="button"
                  className="forgot-link"
                  onClick={() => setShowForgotModal(true)}
                >
                  Forgot password?
                </button>
              </div>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-full login-btn">
              Login to SmartHub <ArrowRight size={16} />
            </button>
          </form>

          {/* Quick Demo Fill Box */}
          <div className="demo-credentials-box">
            <div className="demo-box-header">
              <span>🚀 <strong>Demo Credentials</strong></span>
              <button type="button" onClick={handleFillDemo} className="btn-fill-demo">
                Auto Fill Credentials
              </button>
            </div>
            <p className="demo-cred-text">
              User ID: <code>student@ktu.edu.in</code> | Password: <code>ktu12345</code>
            </p>
            <p className="security-notice-text">
              * Note: This demo login operates strictly on local state and localStorage. It does not claim production database security.
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal-overlay" onClick={() => setShowForgotModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Reset Password Instructions</h3>
              <button className="close-btn" onClick={() => setShowForgotModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ marginBottom: '12px' }}>
                In official production, KTU password reset requests are handled through your college institutional email or by contacting your KTU e-Gov institutional Nodal Officer.
              </p>
              <div className="demo-notice-bar" style={{ textAlign: 'left', borderRadius: '8px' }}>
                🔑 For this <strong>KTU SmartHub Demo</strong>, simply use password <code>ktu12345</code> with any email ID to login.
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setShowForgotModal(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .login-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d3b66 0%, #1e3a8a 50%, #0f172a 100%);
          padding: 24px 16px;
        }

        .login-card-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          max-width: 960px;
          width: 100%;
          background-color: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .login-brand-panel {
          background: linear-gradient(180deg, #0d3b66 0%, #1d4ed8 100%);
          color: #ffffff;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .brand-logo-large {
          margin-bottom: 16px;
        }

        .brand-heading {
          font-size: 2.1rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: -0.5px;
        }

        .brand-subtext {
          color: #93c5fd;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #e0f2fe;
        }

        .feature-item svg {
          color: #60a5fa;
          flex-shrink: 0;
        }

        .security-disclaimer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #93c5fd;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .login-form-panel {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header h2 {
          font-size: 1.6rem;
          color: var(--primary-navy);
          margin-bottom: 6px;
        }

        .form-header p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .error-banner {
          background-color: var(--urgent-bg);
          color: var(--urgent-red);
          border: 1px solid var(--urgent-border);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.86rem;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .forgot-link {
          font-size: 0.82rem;
          color: var(--primary-blue);
          font-weight: 600;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .input-with-icon {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .input-with-icon .form-input {
          padding-left: 38px;
          padding-right: 38px;
        }

        .eye-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .login-btn {
          margin-top: 10px;
          padding: 12px;
          font-size: 1rem;
        }

        .demo-credentials-box {
          margin-top: 28px;
          background-color: var(--light-blue-bg);
          border: 1px dashed var(--light-blue-border);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .demo-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          font-size: 0.85rem;
          color: var(--primary-navy);
        }

        .btn-fill-demo {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background-color: var(--primary-blue);
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .btn-fill-demo:hover {
          background-color: var(--primary-dark);
        }

        .demo-cred-text {
          font-size: 0.82rem;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .demo-cred-text code {
          background-color: #ffffff;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          font-weight: 700;
        }

        .security-notice-text {
          font-size: 0.74rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .login-card-wrapper {
            grid-template-columns: 1fr;
          }
          .login-brand-panel {
            padding: 24px;
          }
          .features-list {
            display: none;
          }
          .login-form-panel {
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
}
