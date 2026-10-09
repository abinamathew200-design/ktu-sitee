import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Clock,
  Calendar,
  FileQuestion,
  BrainCircuit,
  Award,
  ChevronRight,
  Sparkles,
  AlertCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import DeadlineBanner from '../components/DeadlineBanner';
import DetailModal from '../components/DetailModal';
import { DEADLINES, NOTIFICATIONS, EXAM_TIMETABLES, MOCK_TESTS, CALENDAR_EVENTS } from '../data/sampleData';
import { calculateDeadlineStatus, formatDateIST } from '../utils/deadlineUtils';

export default function Home({ user }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('deadline');
  const navigate = useNavigate();

  const handleOpenDeadline = (dl) => {
    setSelectedItem(dl);
    setModalType('deadline');
  };

  const handleOpenNotif = (notif) => {
    setSelectedItem(notif);
    setModalType('notification');
  };

  // Filter active deadlines for upcoming list
  const activeDeadlines = DEADLINES.map((d) => ({
    ...d,
    status: calculateDeadlineStatus(d.dueDate)
  })).filter((d) => !d.status.isPast);

  return (
    <div className="home-dashboard-container">
      {/* Dashboard Top Welcome Banner */}
      <div className="welcome-header">
        <div>
          <h1 className="welcome-title">Welcome to KTU SmartHub</h1>
          <p className="welcome-subtitle">
            Hello, <strong>{user?.name || 'Student'}</strong> ({user?.registerNo || 'TVE22CS045'}) — {user?.semester || 'S5'} {user?.branchCode || 'CSE'} | {user?.college || 'CET Thiruvananthapuram'}
          </p>
        </div>
        <div className="status-pill">
          <span className="dot pulse-dot"></span> Active Semester: 2026-27 (Odd)
        </div>
      </div>

      {/* 1. Animated Deadline Banner */}
      <DeadlineBanner
        deadlines={DEADLINES}
        onSelectDeadline={handleOpenDeadline}
      />

      {/* Grid Layout for Dashboard Sections */}
      <div className="dashboard-grid">
        {/* Left Column: Deadlines & Notifications */}
        <div className="dash-col main-dash-col">
          {/* 2. Upcoming Deadlines Section */}
          <section className="dash-section card">
            <div className="section-header">
              <div className="header-title-box">
                <Clock className="section-icon text-red" size={20} />
                <h2>Upcoming University Deadlines</h2>
              </div>
              <span className="badge badge-normal">{activeDeadlines.length} Active</span>
            </div>

            <div className="deadlines-list">
              {activeDeadlines.length === 0 ? (
                <p className="no-data-text">No active deadlines pending at this moment.</p>
              ) : (
                activeDeadlines.map((item) => (
                  <div
                    key={item.id}
                    className={`deadline-item-row ${item.status.urgency === 'URGENT' ? 'urgent-row' : ''}`}
                    onClick={() => handleOpenDeadline(item)}
                  >
                    <div className="item-left">
                      <span className={`badge ${item.status.badgeClass}`}>
                        {item.status.urgency}
                      </span>
                      <div className="item-text">
                        <h4 className="item-title">{item.title}</h4>
                        <span className="item-date">Due: {formatDateIST(item.dueDate)}</span>
                      </div>
                    </div>
                    <div className="item-right">
                      <span className="time-rem-chip">
                        <Clock size={13} /> {item.status.remainingText}
                      </span>
                      <button className="btn btn-secondary btn-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* 3. Latest University Notifications */}
          <section className="dash-section card">
            <div className="section-header">
              <div className="header-title-box">
                <Bell className="section-icon text-blue" size={20} />
                <h2>Latest University Notifications</h2>
              </div>
              <button className="view-all-link" onClick={() => navigate('/notifications')}>
                View All <ChevronRight size={14} />
              </button>
            </div>

            <div className="notifications-preview-list">
              {NOTIFICATIONS.slice(0, 3).map((notif) => (
                <div key={notif.id} className="notif-row-card" onClick={() => handleOpenNotif(notif)}>
                  <div className="notif-row-top">
                    <span className="badge badge-normal">{notif.category}</span>
                    {notif.isNew && <span className="badge badge-urgent">NEW</span>}
                    <span className="notif-row-date">{formatDateIST(notif.publishDate)}</span>
                  </div>
                  <h4 className="notif-row-title">{notif.title}</h4>
                  <p className="notif-row-desc">{notif.shortDescription}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Shortcuts & Upcoming Exam Info */}
        <div className="dash-col side-dash-col">
          {/* 4. Upcoming Examination Information Card */}
          <section className="dash-section card exam-highlight-card">
            <div className="section-header">
              <div className="header-title-box">
                <Calendar className="section-icon text-navy" size={20} />
                <h2>Upcoming Examination</h2>
              </div>
              <span className="badge badge-urgent">Nov 2026</span>
            </div>

            <div className="exam-card-body">
              <div className="exam-badge-title">
                <h3>S5 B.Tech Regular Theory Exams</h3>
                <span className="exam-sub-info">Scheme: 2019 / 2022 | Mode: Offline</span>
              </div>
              <div className="exam-schedule-highlights">
                <div className="sched-item">
                  <span className="sched-subject">CST301 Formal Languages</span>
                  <span className="sched-date">Nov 10, 2026</span>
                </div>
                <div className="sched-item">
                  <span className="sched-subject">CST303 Computer Networks</span>
                  <span className="sched-date">Nov 13, 2026</span>
                </div>
              </div>
              <button className="btn btn-primary btn-full" onClick={() => navigate('/exam')}>
                View Complete Timetable <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* 5 & 6. Quick Access Cards for PYQs & Mock Tests */}
          <div className="quick-cards-grid">
            <div className="quick-access-card card card-hover" onClick={() => navigate('/student/pyq')}>
              <div className="quick-icon pyq-icon">
                <BookOpen size={24} />
              </div>
              <div className="quick-info">
                <h3>Previous Year Question Papers</h3>
                <p>Access KTU solved & official PYQs filtered by subject & semester.</p>
              </div>
              <span className="quick-arrow">
                Explore PYQs <ChevronRight size={15} />
              </span>
            </div>

            <div className="quick-access-card card card-hover" onClick={() => navigate('/student/mock-test')}>
              <div className="quick-icon mock-icon">
                <BrainCircuit size={24} />
              </div>
              <div className="quick-info">
                <h3>Interactive Mock Tests</h3>
                <p>Practice MCQs with countdown timer, score report & explanations.</p>
              </div>
              <span className="quick-arrow">
                Start Practice <ChevronRight size={15} />
              </span>
            </div>
          </div>

          {/* 7. Academic Calendar Shortcut */}
          <section className="dash-section card calendar-shortcut-card" onClick={() => navigate('/student/academic-calendar')}>
            <div className="section-header">
              <div className="header-title-box">
                <Calendar className="section-icon text-cyan" size={20} />
                <h2>Academic Calendar Shortcut</h2>
              </div>
              <ChevronRight size={18} className="text-muted" />
            </div>
            <div className="calendar-upcoming-item">
              <div className="cal-date-badge">
                <span className="cal-month">OCT</span>
                <span className="cal-day">20</span>
              </div>
              <div className="cal-details">
                <h4>2nd Series Internal Exams</h4>
                <p>Odd Semester internal evaluation & attendance upload window.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Details View Modal */}
      <DetailModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        type={modalType}
      />

      <style>{`
        .home-dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .welcome-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #0d3b66 0%, #1d4ed8 100%);
          color: #ffffff;
          padding: 24px 28px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          flex-wrap: wrap;
          gap: 16px;
        }

        .welcome-title {
          font-size: 1.85rem;
          color: #ffffff;
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }

        .welcome-subtitle {
          color: #bfdbfe;
          font-size: 0.94rem;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          backdrop-filter: blur(4px);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4ade80;
          box-shadow: 0 0 8px #4ade80;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }

        .dash-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .dash-section {
          padding: 24px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }

        .header-title-box {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .header-title-box h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-red { color: var(--urgent-red); }
        .text-blue { color: var(--primary-blue); }
        .text-navy { color: var(--primary-navy); }
        .text-cyan { color: var(--accent-cyan); }

        .view-all-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .deadlines-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deadline-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .deadline-item-row:hover {
          background-color: var(--light-blue-bg);
          border-color: var(--light-blue-border);
        }

        .urgent-row {
          border-left: 4px solid var(--urgent-red);
          background-color: #fef2f2;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .item-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .item-date {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
        }

        .item-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .time-rem-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: #ffffff;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--urgent-border);
        }

        .notifications-preview-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .notif-row-card {
          padding: 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: #ffffff;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .notif-row-card:hover {
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-sm);
        }

        .notif-row-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .notif-row-date {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .notif-row-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .notif-row-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .exam-highlight-card {
          background: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
        }

        .exam-badge-title {
          margin-bottom: 16px;
        }

        .exam-badge-title h3 {
          font-size: 1.1rem;
          color: var(--primary-navy);
        }

        .exam-sub-info {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .exam-schedule-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .sched-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #ffffff;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.86rem;
        }

        .sched-subject {
          font-weight: 600;
          color: var(--text-main);
        }

        .sched-date {
          font-weight: 700;
          color: var(--primary-blue);
        }

        .quick-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .quick-access-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
        }

        .quick-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pyq-icon {
          background-color: #e0e7ff;
          color: #4338ca;
        }

        .mock-icon {
          background-color: #fae8ff;
          color: #a21caf;
        }

        .quick-info h3 {
          font-size: 1.05rem;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .quick-info p {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .quick-arrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--primary-blue);
          margin-top: 4px;
        }

        .calendar-shortcut-card {
          cursor: pointer;
        }

        .calendar-upcoming-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background-color: var(--bg-subtle);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .cal-date-badge {
          background-color: var(--primary-navy);
          color: #ffffff;
          border-radius: var(--radius-md);
          padding: 6px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 54px;
        }

        .cal-month {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .cal-day {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1;
        }

        .cal-details h4 {
          font-size: 0.95rem;
          color: var(--primary-navy);
        }

        .cal-details p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
