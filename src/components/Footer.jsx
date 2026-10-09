import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Shield, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#60a5fa"/>
                <path d="M25 30 L50 18 L75 30 L50 42 Z" fill="#0d3b66" stroke="#ffffff" strokeWidth="3"/>
                <path d="M32 40 L32 58 C32 68 68 68 68 58 L68 40" stroke="#ffffff" strokeWidth="5" strokeLinecap="round"/>
              </svg>
              <span>KTU SmartHub</span>
            </div>
            <p className="footer-desc">
              Centralized student portal for APJ Abdul Kalam Technological University. Streamlining academic timetables, examination results, question papers, and university notifications.
            </p>
            <div className="disclaimer-chip">
              <Info size={14} /> Prototype demonstration only. Not officially affiliated with KTU.
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Portals</h4>
            <ul className="footer-links">
              <li><a href="https://ktu.edu.in" target="_blank" rel="noreferrer">KTU Official Website <ExternalLink size={12}/></a></li>
              <li><a href="https://app.ktu.edu.in" target="_blank" rel="noreferrer">KTU e-Gov Student Portal <ExternalLink size={12}/></a></li>
              <li><a href="https://ktu.edu.in/eu/core/announcements.htm" target="_blank" rel="noreferrer">Official Announcements <ExternalLink size={12}/></a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Student Support</h4>
            <ul className="footer-contact">
              <li><MapPin size={15}/> CET Campus, Thiruvananthapuram, Kerala</li>
              <li><Mail size={15}/> support@ktu.edu.in</li>
              <li><Phone size={15}/> +91 471 2598522 (Helpdesk)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} KTU SmartHub. Designed for KTU Engineering Students.</span>
          <span className="security-note"><Shield size={13}/> Frontend Demo Environment</span>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: var(--primary-navy);
          color: #e2e8f0;
          padding: 48px 20px 24px 20px;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 36px;
          margin-bottom: 36px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .disclaimer-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          background-color: rgba(255,255,255,0.1);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          color: #cbd5e1;
        }

        .footer-title {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 16px;
          border-bottom: 2px solid var(--accent-blue);
          padding-bottom: 6px;
          display: inline-block;
        }

        .footer-links, .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.88rem;
        }

        .footer-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #cbd5e1;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #94a3b8;
          flex-wrap: wrap;
          gap: 12px;
        }

        .security-note {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
}
