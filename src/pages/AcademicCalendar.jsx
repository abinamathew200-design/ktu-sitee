import React, { useState } from 'react';
import { Calendar as CalendarIcon, Tag, List, Grid, Info, Clock } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import { CALENDAR_EVENTS } from '../data/sampleData';
import { formatDateIST } from '../utils/deadlineUtils';

export default function AcademicCalendar() {
  const [filters, setFilters] = useState({
    academicYear: '',
    semester: '',
    category: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'

  const academicYears = ['2026-2027', '2025-2026'];
  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const categories = [
    'Semester Commencement',
    'Internal Examinations',
    'University Examinations',
    'Holidays',
    'Registration Deadlines',
    'Semester-end Dates'
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      academicYear: '',
      semester: '',
      category: ''
    });
    setSearchQuery('');
  };

  const filteredEvents = CALENDAR_EVENTS.filter((event) => {
    if (filters.academicYear && event.academicYear !== filters.academicYear) return false;
    if (filters.semester && event.semester !== 'All' && event.semester !== filters.semester) return false;
    if (filters.category && event.category !== filters.category) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchDesc = event.description.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }
    return true;
  });

  const filterConfigs = [
    { key: 'academicYear', label: 'Academic Year', options: academicYears },
    { key: 'semester', label: 'Semester', options: semesters },
    { key: 'category', label: 'Event Category', options: categories }
  ];

  return (
    <div className="academic-calendar-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <CalendarIcon className="text-blue" size={32} /> KTU Academic Calendar
        </h1>
        <p className="page-subtitle">
          Official University academic schedules, semester commencement dates, exam periods, and institutional holidays.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <Info size={18} className="text-blue" />
        <span>
          <strong>Sample Calendar:</strong> Event schedules are sample data for portal demonstration. Verify official KTU notifications for binding academic dates.
        </span>
      </div>

      {/* Filter Bar */}
      <FilterBar
        filters={filterConfigs}
        filterValues={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search calendar events e.g. Internal Exams..."
      />

      {/* View Mode Toggle & Results Count */}
      <div className="calendar-toolbar">
        <h3>Academic Schedule Events ({filteredEvents.length})</h3>
        <div className="view-toggle-btns">
          <button
            className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('list')}
          >
            <List size={15} /> Organized List
          </button>
          <button
            className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={15} /> Card Grid
          </button>
        </div>
      </div>

      {/* Events List / Grid */}
      {filteredEvents.length === 0 ? (
        <div className="empty-state">
          <CalendarIcon size={48} />
          <h3>No events found for your selection.</h3>
          <p>Try resetting the category or semester filters.</p>
        </div>
      ) : viewMode === 'list' ? (
        <div className="events-list-view">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-list-item card">
              <div className="event-date-col">
                <div className="date-block">
                  <span className="date-month">{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
                  <span className="date-day">{new Date(event.date).getDate()}</span>
                </div>
                <span className="date-year">{new Date(event.date).getFullYear()}</span>
              </div>

              <div className="event-info-col">
                <div className="event-tags">
                  <span className="badge badge-normal">{event.category}</span>
                  <span className="badge badge-upcoming">{event.semester} Sem</span>
                  <span className="badge badge-expired">{event.academicYear}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="events-grid-view">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-grid-card card card-hover">
              <div className="grid-card-top">
                <span className="badge badge-normal">{event.category}</span>
                <span className="badge badge-upcoming">{event.semester}</span>
              </div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-date-chip">
                <Clock size={14} /> {formatDateIST(event.date)}
              </div>
              <p className="event-desc">{event.description}</p>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .academic-calendar-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .calendar-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }

        .view-toggle-btns {
          display: flex;
          gap: 8px;
        }

        .events-list-view {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .event-list-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px;
        }

        .event-date-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          background-color: var(--light-blue-bg);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--light-blue-border);
        }

        .date-month {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--primary-blue);
          text-transform: uppercase;
        }

        .date-day {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1;
        }

        .date-year {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .event-info-col {
          flex: 1;
        }

        .event-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .event-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .event-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .events-grid-view {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .event-grid-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 22px;
        }

        .grid-card-top {
          display: flex;
          justify-content: space-between;
        }

        .event-date-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-blue);
          background-color: var(--light-blue-bg);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        @media (max-width: 640px) {
          .event-list-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .event-date-col {
            width: 100%;
            flex-direction: row;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
