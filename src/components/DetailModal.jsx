import React from 'react';
import { X, Calendar, Clock, ExternalLink, Tag, FileText } from 'lucide-react';
import { formatDateIST, calculateDeadlineStatus } from '../utils/deadlineUtils';

export default function DetailModal({ isOpen, onClose, item, type = 'deadline' }) {
  if (!isOpen || !item) return null;

  const deadlineStatus = item.dueDate ? calculateDeadlineStatus(item.dueDate) : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            {type === 'deadline' && deadlineStatus && (
              <span className={`badge ${deadlineStatus.badgeClass}`}>
                {deadlineStatus.urgency}
              </span>
            )}
            {type === 'notification' && item.category && (
              <span className="badge badge-normal">{item.category}</span>
            )}
            {type === 'form' && item.category && (
              <span className="badge badge-normal">{item.category}</span>
            )}
            <h3 className="modal-title">{item.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close details modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {type === 'deadline' && (
            <div className="detail-meta-box">
              <div className="meta-item">
                <Calendar size={16} />
                <span>Due Date: <strong>{formatDateIST(item.dueDate)}</strong></span>
              </div>
              {deadlineStatus && (
                <div className="meta-item">
                  <Clock size={16} />
                  <span>Time Remaining: <strong>{deadlineStatus.remainingText}</strong></span>
                </div>
              )}
            </div>
          )}

          {type === 'notification' && (
            <div className="detail-meta-box">
              <div className="meta-item">
                <Calendar size={16} />
                <span>Published Date: <strong>{formatDateIST(item.publishDate)}</strong></span>
              </div>
              {item.refNo && (
                <div className="meta-item">
                  <Tag size={16} />
                  <span>Reference: <strong>{item.refNo}</strong></span>
                </div>
              )}
            </div>
          )}

          <div className="detail-content">
            <h4>Description & Details</h4>
            <p>{item.details || item.content || item.shortDescription || item.description}</p>
          </div>

          <div className="notice-disclaimer">
            <small>📌 Note: This is sample data formatted for KTU SmartHub demonstration.</small>
          </div>
        </div>

        <div className="modal-footer">
          {item.officialUrl && (
            <a
              href={item.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} /> Visit Official Portal
            </a>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <style>{`
        .modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .close-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
        }

        .close-btn:hover {
          background-color: var(--border-color);
          color: var(--text-main);
        }

        .detail-meta-box {
          display: flex;
          gap: 18px;
          background-color: var(--light-blue-bg);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: var(--primary-navy);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-content h4 {
          font-size: 0.95rem;
          margin-bottom: 8px;
          color: var(--primary-navy);
        }

        .detail-content p {
          font-size: 0.93rem;
          color: var(--text-main);
          line-height: 1.6;
          white-space: pre-line;
        }

        .notice-disclaimer {
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px dashed var(--border-color);
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
