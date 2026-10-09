import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function DashboardCard({
  title,
  subtitle,
  icon: Icon,
  badgeText,
  badgeColor = 'primary',
  onClick,
  children,
  actionText = 'Explore'
}) {
  return (
    <div className="dashboard-card card card-hover" onClick={onClick}>
      <div className="card-top">
        <div className="card-icon-title">
          {Icon && (
            <div className="icon-badge">
              <Icon size={20} />
            </div>
          )}
          <div>
            <h3 className="card-title">{title}</h3>
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
        </div>
        {badgeText && <span className={`badge badge-${badgeColor}`}>{badgeText}</span>}
      </div>

      <div className="card-body-content">{children}</div>

      {onClick && (
        <div className="card-footer-action">
          <span className="card-link">
            {actionText} <ArrowRight size={15} />
          </span>
        </div>
      )}

      <style>{`
        .dashboard-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          cursor: pointer;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-badge {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: var(--light-blue-bg);
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .card-subtitle {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .card-body-content {
          flex: 1;
          margin-bottom: 16px;
        }

        .card-footer-action {
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
          margin-top: 8px;
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-blue);
        }
      `}</style>
    </div>
  );
}
