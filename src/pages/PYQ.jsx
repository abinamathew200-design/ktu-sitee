import React, { useState } from 'react';
import { BookOpen, FileText, Download, Eye, RotateCcw, AlertCircle } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import DocumentViewerModal from '../components/DocumentViewerModal';
import { PYQ_PAPERS } from '../data/sampleData';

export default function PYQ() {
  const [filters, setFilters] = useState({
    course: '',
    branch: '',
    semester: '',
    subject: '',
    year: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const courses = ['B.Tech', 'M.Tech', 'MCA'];
  const branches = ['CSE', 'ECE', 'EEE', 'Civil Engineering', 'Mechanical Engineering', 'Computer Applications'];
  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const years = ['2025', '2024', '2023', '2022', '2021'];
  const subjects = [
    'Data Structures',
    'Database Management Systems',
    'Operating Systems',
    'Discrete Mathematics',
    'Analog Circuits',
    'Advanced Data Structures'
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      course: '',
      branch: '',
      semester: '',
      subject: '',
      year: ''
    });
    setSearchQuery('');
  };

  // Filter papers logic
  const filteredPapers = PYQ_PAPERS.filter((paper) => {
    if (filters.course && paper.course !== filters.course) return false;
    if (filters.branch && paper.branch !== filters.branch) return false;
    if (filters.semester && paper.semester !== filters.semester) return false;
    if (filters.subject && paper.subject !== filters.subject) return false;
    if (filters.year && paper.year !== filters.year) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = paper.title.toLowerCase().includes(q);
      const matchSubject = paper.subject.toLowerCase().includes(q);
      const matchCode = paper.subjectCode ? paper.subjectCode.toLowerCase().includes(q) : false;
      if (!matchTitle && !matchSubject && !matchCode) return false;
    }
    return true;
  });

  const filterConfigs = [
    { key: 'course', label: 'Course', options: courses },
    { key: 'branch', label: 'Branch', options: branches },
    { key: 'semester', label: 'Semester', options: semesters },
    { key: 'subject', label: 'Subject', options: subjects },
    { key: 'year', label: 'Exam Year', options: years }
  ];

  const handleDownload = (paper) => {
    const link = document.createElement('a');
    link.href = paper.pdfUrl;
    link.download = paper.fileName || `${paper.subjectCode}_${paper.year}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pyq-page-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <BookOpen className="text-blue" size={30} /> Previous Year Question Papers (PYQ)
        </h1>
        <p className="page-subtitle">
          Search and download KTU university theory question papers for all engineering branches and semesters.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <AlertCircle size={18} className="text-blue" />
        <span>
          <strong>Sample Notice:</strong> Document files are verified sample KTU question papers for portal demonstration.
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
        searchPlaceholder="Search by subject code, title e.g. CST201..."
      />

      {/* PYQ Results */}
      <div className="results-header">
        <h3>Matching Question Papers ({filteredPapers.length})</h3>
      </div>

      {filteredPapers.length === 0 ? (
        <div className="empty-state">
          <FileText size={48} />
          <h3>No question papers found for your selection.</h3>
          <p>Try clearing filters or searching for another subject or year.</p>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
            <RotateCcw size={15} /> Reset Filters
          </button>
        </div>
      ) : (
        <div className="pyq-grid">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="pyq-card card card-hover">
              <div className="pyq-card-header">
                <span className="badge badge-normal">{paper.course}</span>
                <span className="badge badge-upcoming">{paper.semester} {paper.branch}</span>
                <span className="badge badge-urgent">{paper.year} Exam</span>
              </div>

              <h3 className="pyq-card-title">{paper.title}</h3>

              <div className="pyq-meta">
                <div className="meta-line">
                  <span className="meta-lbl">Subject:</span>
                  <span className="meta-val">{paper.subject} ({paper.subjectCode})</span>
                </div>
                <div className="meta-line">
                  <span className="meta-lbl">Branch:</span>
                  <span className="meta-val">{paper.branch}</span>
                </div>
              </div>

              <div className="pyq-card-actions">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedDoc(paper)}
                >
                  <Eye size={15} /> View PDF
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleDownload(paper)}
                >
                  <Download size={15} /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        document={selectedDoc}
      />

      <style>{`
        .pyq-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .disclaimer-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background-color: var(--light-blue-bg);
          border: 1px solid var(--light-blue-border);
          font-size: 0.88rem;
          color: var(--primary-navy);
        }

        .results-header {
          margin-top: 8px;
        }

        .pyq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .pyq-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
        }

        .pyq-card-header {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .pyq-card-title {
          font-size: 1.08rem;
          color: var(--primary-navy);
          margin-bottom: 14px;
          line-height: 1.35;
        }

        .pyq-meta {
          background-color: var(--bg-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .meta-line {
          display: flex;
          gap: 8px;
        }

        .meta-lbl {
          color: var(--text-muted);
          font-weight: 600;
        }

        .meta-val {
          color: var(--primary-navy);
          font-weight: 700;
        }

        .pyq-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .pyq-card-actions .btn {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
