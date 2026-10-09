import React from 'react';
import { Calendar, Tag, ExternalLink, ChevronRight } from 'lucide-react';
import { formatDateIST } from '../utils/deadlineUtils';

export default function NotificationCard({ notification, onClick }) {
  return (
    <div className="notification-card card card-hover" onClick={() => onClick && onClick(notification)}>
      <div className="notif-header">
        <div className="notif-tags">
          <span className="badge badge-normal">
            <Tag size={12} /> {notification.category}
          </span>
          {notification.isNew && <span className="badge badge-urgent">NEW</span>}
        </div>
        <div className="notif-date">
          <Calendar size={13} />
          <span>{formatDateIST(notification.publishDate)}</span>
        </div>
      </div>

      <h3 className="notif-title">{notification.title}</h3>
      <p className="notif-desc">{notification.shortDescription}</p>

      <div className="notif-footer">
        <span className="notif-ref">{notification.refNo || 'KTU Official Notice'}</span>
        <button className="btn btn-secondary btn-sm" onClick={(e) => { e.stopPropagation(); onClick(notification); }}>
          View Details <ChevronRight size={14} />
        </button>
      </div>

      <style>{`
        .notification-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
        }

        .notif-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .notif-tags {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .notif-date {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .notif-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-navy);
          line-height: 1.35;
        }

        .notif-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          flex: 1;
        }

        .notif-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
          margin-top: 4px;
        }

        .notif-ref {
          font-size: 0.78rem;
          color: var(--text-light);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
