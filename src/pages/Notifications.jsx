import React, { useState } from 'react';
import { Bell, Search, Tag, Calendar, ChevronRight, RotateCcw, Info, ArrowUpDown } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import DetailModal from '../components/DetailModal';
import { NOTIFICATIONS } from '../data/sampleData';
import { formatDateIST } from '../utils/deadlineUtils';

export default function Notifications() {
  const [filters, setFilters] = useState({ category: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest'
  const [selectedNotif, setSelectedNotif] = useState(null);

  const categories = [
    'Examination',
    'Registration',
    'Academic',
    'Results',
    'Applications',
    'General'
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({ category: '' });
    setSearchQuery('');
    setSortBy('newest');
  };

  let filteredNotifs = NOTIFICATIONS.filter((notif) => {
    if (filters.category && notif.category !== filters.category) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = notif.title.toLowerCase().includes(q);
      const matchDesc = notif.shortDescription.toLowerCase().includes(q);
      const matchRef = notif.refNo ? notif.refNo.toLowerCase().includes(q) : false;
      if (!matchTitle && !matchDesc && !matchRef) return false;
    }
    return true;
  });

  // Sort by date
  filteredNotifs.sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime();
    const dateB = new Date(b.publishDate).getTime();
    return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const filterConfigs = [
    { key: 'category', label: 'Notification Category', options: categories }
  ];

  return (
    <div className="notifications-page-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <Bell className="text-blue" size={32} /> Central University Notifications
        </h1>
        <p className="page-subtitle">
          Official KTU circulars, examination schedules, result announcements, and administrative orders.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <Info size={18} className="text-blue" />
        <span>
          <strong>Sample Notices:</strong> Notifications listed are verified sample records for KTU SmartHub portal demonstration.
        </span>
      </div>

      {/* Filter Bar with Sort control */}
      <div className="notif-filter-wrapper">
        <FilterBar
          filters={filterConfigs}
          filterValues={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Search notifications by title or circular ref no..."
        />

        <div className="sort-control-card card">
          <div className="sort-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUpDown size={14} /> Sort By Date
            </label>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="notifs-results-header">
        <h3>University Notifications ({filteredNotifs.length})</h3>
      </div>

      {filteredNotifs.length === 0 ? (
        <div className="empty-state card">
          <Bell size={48} />
          <h3>No notifications found for your search query.</h3>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
            <RotateCcw size={15} /> Reset Filters
          </button>
        </div>
      ) : (
        <div className="notifs-grid">
          {filteredNotifs.map((notif) => (
            <div key={notif.id} className="notif-card card card-hover" onClick={() => setSelectedNotif(notif)}>
              <div className="notif-card-header">
                <div className="notif-badge-group">
                  <span className="badge badge-normal">{notif.category}</span>
                  {notif.isNew && <span className="badge badge-urgent">NEW</span>}
                </div>
                <div className="notif-date-badge">
                  <Calendar size={13} /> {formatDateIST(notif.publishDate)}
                </div>
              </div>

              <h3 className="notif-card-title">{notif.title}</h3>
              <p className="notif-card-desc">{notif.shortDescription}</p>

              <div className="notif-card-footer">
                <span className="ref-number">{notif.refNo}</span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNotif(notif);
                  }}
                >
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <DetailModal
        isOpen={!!selectedNotif}
        onClose={() => setSelectedNotif(null)}
        item={selectedNotif}
        type="notification"
      />

      <style>{`
        .notifications-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .notif-filter-wrapper {
          display: flex;
          gap: 16px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .notif-filter-wrapper .filter-bar-card {
          flex: 1;
          margin-bottom: 0;
        }

        .sort-control-card {
          min-width: 200px;
          padding: 20px;
          margin-bottom: 0;
          background-color: #ffffff;
        }

        .notifs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .notif-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .notif-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .notif-badge-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .notif-date-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .notif-card-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .notif-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .notif-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }

        .ref-number {
          font-size: 0.76rem;
          color: var(--text-light);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .notif-filter-wrapper {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
}
