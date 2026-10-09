import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, GraduationCap, Calendar, Award, FileText, Bell, LogOut, Menu, X, User } from 'lucide-react';

export default function Navbar({ user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const navItems = [
    { label: 'HOME', path: '/', icon: Home },
    { label: 'STUDENT', path: '/student', icon: GraduationCap },
    { label: 'EXAM', path: '/exam', icon: Calendar },
    { label: 'RESULT', path: '/result', icon: Award },
    { label: 'FORMS', path: '/forms', icon: FileText },
    { label: 'NOTIFICATIONS', path: '/notifications', icon: Bell },
  ];

  return (
    <header className="navbar-wrapper">
      {/* Top Banner Disclaimer */}
      <div className="demo-notice-bar">
        <span>🎓 <strong>KTU SmartHub Demo Portal</strong> — APJ Abdul Kalam Technological University Student Resource Center</span>
      </div>

      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            <div className="logo-icon-box">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#0d3b66"/>
                <path d="M25 30 L50 18 L75 30 L50 42 Z" fill="#60a5fa" stroke="#ffffff" strokeWidth="3"/>
                <path d="M32 40 L32 58 C32 68 68 68 68 58 L68 40" stroke="#ffffff" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="75" cy="55" r="4" fill="#60a5fa"/>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-title">KTU SmartHub</span>
              <span className="brand-subtitle">Student Portal</span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Navigation Tabs (Exact 6 Tabs) */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `nav-tab ${isActive ? 'nav-tab-active' : ''}`
                }
                end={item.path === '/'}
              >
                <Icon size={17} className="nav-icon" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right side user info & logout */}
        <div className="nav-actions">
          {user && (
            <div className="user-badge" title={`${user.name} (${user.registerNo})`}>
              <div className="avatar-circle">
                <User size={15} />
              </div>
              <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-sem">{user.semester} {user.branchCode}</span>
              </div>
            </div>
          )}

          <button onClick={handleLogout} className="logout-btn" title="Logout of demo portal">
            <LogOut size={16} />
            <span className="logout-text">Logout</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `mobile-nav-item ${isActive ? 'mobile-nav-active' : ''}`
                }
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          background-color: #ffffff;
          border-bottom: 2px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 900;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1.1;
          letter-spacing: -0.3px;
        }

        .brand-subtitle {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: var(--bg-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.86rem;
          color: var(--text-muted);
          transition: var(--transition-fast);
          text-decoration: none;
          letter-spacing: 0.5px;
        }

        .nav-tab:hover {
          color: var(--primary-navy);
          background-color: #ffffff;
        }

        .nav-tab-active {
          color: #ffffff !important;
          background-color: var(--primary-navy) !important;
          box-shadow: 0 2px 6px rgba(13, 59, 102, 0.25);
        }

        .nav-icon {
          opacity: 0.9;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--light-blue-bg);
          padding: 5px 12px 5px 6px;
          border-radius: 9999px;
          border: 1px solid var(--light-blue-border);
        }

        .avatar-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--primary-navy);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .user-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .user-sem {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: #fef2f2;
          border: 1px solid #fca5a5;
        }

        .logout-btn:hover {
          background-color: var(--urgent-red);
          color: #ffffff;
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--primary-navy);
          padding: 6px;
        }

        .mobile-nav-drawer {
          display: none;
          flex-direction: column;
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
          padding: 12px 20px;
          gap: 8px;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
        }

        .mobile-nav-active {
          background-color: var(--light-blue-bg);
          color: var(--primary-blue);
          border-left: 4px solid var(--primary-blue);
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .mobile-nav-drawer {
            display: flex;
          }
          .user-details {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
