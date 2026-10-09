import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, BrainCircuit, Calendar, User, ArrowRight } from 'lucide-react';

export default function Student() {
  const navigate = useNavigate();

  const resources = [
    {
      id: 'pyq',
      title: 'Previous Year Question Papers',
      subtitle: 'PYQ Repository',
      description: 'Search, filter, view, and download official KTU previous year question papers for all engineering branches and semesters.',
      icon: BookOpen,
      path: '/student/pyq',
      badge: 'B.Tech / M.Tech / MCA',
      color: '#4338ca',
      bgColor: '#e0e7ff'
    },
    {
      id: 'mock-test',
      title: 'Interactive Mock Tests',
      subtitle: 'Self Assessment',
      description: 'Practice subject-wise multiple choice tests with automatic countdown timer, instant score breakdown, and detailed answer keys.',
      icon: BrainCircuit,
      path: '/student/mock-test',
      badge: 'MCQ Practice',
      color: '#a21caf',
      bgColor: '#fae8ff'
    },
    {
      id: 'calendar',
      title: 'Academic Calendar',
      subtitle: 'Schedules & Events',
      description: 'Filter university academic schedules, semester commencement dates, series exam windows, registration deadlines, and holidays.',
      icon: Calendar,
      path: '/student/academic-calendar',
      badge: '2026-2027 Academic Year',
      color: '#0284c7',
      bgColor: '#e0f2fe'
    },
    {
      id: 'profile',
      title: 'Student Profile',
      subtitle: 'Account & Records',
      description: 'View and update demo student profile details, academic records, saved mock test performance history, and registered branch data.',
      icon: User,
      path: '/student/profile',
      badge: 'Editable Demo Details',
      color: '#059669',
      bgColor: '#d1fae5'
    }
  ];

  return (
    <div className="student-resources-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <BookOpen className="text-blue" size={32} /> Student Resources
        </h1>
        <p className="page-subtitle">
          Organized study materials, self-assessment tools, academic schedules, and student profile management.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="resource-card card card-hover"
              onClick={() => navigate(item.path)}
            >
              <div className="card-top-bar">
                <div
                  className="resource-icon-box"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  <Icon size={28} />
                </div>
                <span className="badge badge-normal">{item.badge}</span>
              </div>

              <div className="resource-body">
                <h3 className="resource-title">{item.title}</h3>
                <span className="resource-subtitle">{item.subtitle}</span>
                <p className="resource-desc">{item.description}</p>
              </div>

              <div className="resource-footer">
                <span className="open-link" style={{ color: item.color }}>
                  Open {item.title} <ArrowRight size={16} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .student-resources-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          cursor: pointer;
          min-height: 260px;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .resource-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .resource-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
          margin-bottom: 2px;
        }

        .resource-subtitle {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 12px;
        }

        .resource-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .resource-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .open-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
