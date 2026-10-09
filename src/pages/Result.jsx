import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, RotateCcw, Info } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import { EXAM_RESULTS } from '../data/sampleData';
import { formatDateIST } from '../utils/deadlineUtils';

export default function Result() {
  const [filters, setFilters] = useState({
    year: '',
    semester: '',
    examType: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['2026', '2025', '2024'];
  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const examTypes = ['Regular Examination', 'Supplementary Examination', 'Improvement Examination'];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      year: '',
      semester: '',
      examType: ''
    });
    setSearchQuery('');
  };

  const filteredResults = EXAM_RESULTS.filter((item) => {
    if (filters.year && item.year !== filters.year) return false;
    if (filters.semester && item.semester !== filters.semester) return false;
    if (filters.examType && item.examType !== filters.examType) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }
    return true;
  });

  const filterConfigs = [
    { key: 'year', label: 'Exam Year', options: years },
    { key: 'semester', label: 'Semester', options: semesters },
    { key: 'examType', label: 'Exam Type', options: examTypes }
  ];

  return (
    <div className="result-page-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <Award className="text-blue" size={32} /> Examination Results
        </h1>
        <p className="page-subtitle">
          Official KTU university result publication announcements and portal result login shortcuts.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <Info size={18} className="text-blue" />
        <span>
          <strong>Privacy Disclaimer:</strong> This portal displays official result announcement notifications. Private marks and grade cards require authentic KTU e-Gov student login.
        </span>
      </div>

      {/* Filters */}
      <FilterBar
        filters={filterConfigs}
        filterValues={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search result announcements e.g. S4 Regular..."
      />

      <div className="results-header-bar">
        <h3>Result Publication Announcements ({filteredResults.length})</h3>
      </div>

      {filteredResults.length === 0 ? (
        <div className="empty-state card">
          <Award size={48} />
          <h3>No result announcements found for your selection.</h3>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
            <RotateCcw size={15} /> Reset Filters
          </button>
        </div>
      ) : (
        <div className="result-cards-list">
          {filteredResults.map((item) => (
            <div key={item.id} className="result-announcement-card card card-hover">
              <div className="result-card-top">
                <div className="result-tags">
                  <span className="badge badge-normal">{item.semester} Semester</span>
                  <span className="badge badge-upcoming">{item.examType}</span>
                  <span className="badge badge-urgent">Year {item.year}</span>
                </div>
                <div className="result-pub-date">
                  <Calendar size={14} /> Published: {formatDateIST(item.publishDate)}
                </div>
              </div>

              <h3 className="result-card-title">{item.title}</h3>
              <p className="result-card-desc">{item.description}</p>

              <div className="result-card-footer">
                <span className="portal-notice"><CheckCircle2 size={15} className="text-green"/> Result Active on KTU Portal</span>
                <a
                  href={item.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={15} /> Check Official KTU Result Portal
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .result-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .result-cards-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .result-announcement-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .result-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .result-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .result-pub-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .result-card-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
        }

        .result-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .result-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .portal-notice {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-green { color: var(--success-green); }
      `}</style>
    </div>
  );
}
