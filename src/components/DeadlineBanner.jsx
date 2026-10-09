import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Pause, Play, ChevronRight, Info } from 'lucide-react';
import { calculateDeadlineStatus } from '../utils/deadlineUtils';

export default function DeadlineBanner({ deadlines = [], onSelectDeadline }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter out past deadlines
  const activeDeadlines = deadlines.filter((d) => {
    const status = calculateDeadlineStatus(d.dueDate);
    return !status.isPast;
  });

  // Cycle through active deadlines automatically if not paused
  useEffect(() => {
    if (activeDeadlines.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeDeadlines.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeDeadlines.length, isPaused]);

  if (activeDeadlines.length === 0) {
    return (
      <div className="deadline-banner banner-normal">
        <div className="banner-content">
          <Info size={18} className="banner-icon" />
          <span className="banner-text">
            <strong>🔵 UPDATE:</strong> No immediate urgent university deadlines pending at this time.
          </span>
        </div>
      </div>
    );
  }

  const currentItem = activeDeadlines[currentIndex] || activeDeadlines[0];
  const status = calculateDeadlineStatus(currentItem.dueDate);

  // Styling based on urgency category
  let bannerClass = 'banner-normal';
  let pulseClass = '';

  if (status.urgency === 'URGENT') {
    bannerClass = 'banner-urgent';
    pulseClass = 'animate-pulse-urgent';
  } else if (status.urgency === 'WARNING') {
    bannerClass = 'banner-warning';
  } else if (status.urgency === 'UPCOMING') {
    bannerClass = 'banner-upcoming';
  }

  return (
    <div className={`deadline-banner ${bannerClass} ${isPaused ? 'paused-animation' : pulseClass}`}>
      <div className="banner-main" onClick={() => onSelectDeadline && onSelectDeadline(currentItem)}>
        <div className="banner-badge-group">
          <span className="banner-prefix">{status.bannerPrefix}</span>
          <span className="banner-counter">
            {currentIndex + 1} of {activeDeadlines.length}
          </span>
        </div>

        <div className="banner-text-content">
          <span className="banner-title">{currentItem.title}</span>
          <span className="banner-time">
            <Clock size={13} />
            <span>{status.remainingText}</span>
          </span>
        </div>

        <div className="banner-action">
          <span className="action-link">
            View Details <ChevronRight size={14} />
          </span>
        </div>
      </div>

      <div className="banner-controls">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPaused(!isPaused);
          }}
          className="pause-btn"
          title={isPaused ? "Play slide animation" : "Pause banner animation for accessibility"}
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      </div>

      <style>{`
        .deadline-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: var(--radius-lg);
          padding: 12px 18px;
          margin-bottom: 24px;
          transition: var(--transition-normal);
          cursor: pointer;
          border: 2px solid transparent;
        }

        .banner-urgent {
          background-color: var(--urgent-bg);
          border-color: var(--urgent-red);
          color: #991b1b;
        }

        .banner-warning {
          background-color: var(--warning-bg);
          border-color: var(--warning-orange);
          color: #c2410c;
        }

        .banner-upcoming {
          background-color: var(--upcoming-bg);
          border-color: var(--upcoming-yellow);
          color: #854d0e;
        }

        .banner-normal {
          background-color: var(--normal-bg);
          border-color: var(--light-blue-border);
          color: var(--primary-navy);
        }

        .banner-main {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          flex-wrap: wrap;
        }

        .banner-badge-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .banner-prefix {
          font-weight: 800;
          font-size: 0.88rem;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }

        .banner-counter {
          font-size: 0.75rem;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 2px 8px;
          border-radius: 9999px;
          font-weight: 700;
        }

        .banner-text-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          flex-wrap: wrap;
        }

        .banner-title {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .banner-time {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          background-color: rgba(255, 255, 255, 0.85);
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .banner-action {
          display: flex;
          align-items: center;
        }

        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.84rem;
          font-weight: 700;
          text-decoration: underline;
        }

        .banner-controls {
          display: flex;
          align-items: center;
          padding-left: 12px;
          border-left: 1px solid rgba(0,0,0,0.1);
        }

        .pause-btn {
          padding: 6px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.7);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pause-btn:hover {
          background-color: #ffffff;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .deadline-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .banner-controls {
            align-self: flex-end;
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
