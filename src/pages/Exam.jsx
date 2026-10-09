import React, { useState } from 'react';
import { Calendar, FileText, Eye, Download, RotateCcw, Info, Search } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import DocumentViewerModal from '../components/DocumentViewerModal';
import { EXAM_TIMETABLES } from '../data/sampleData';
import { formatDateIST } from '../utils/deadlineUtils';

export default function Exam() {
  const [filters, setFilters] = useState({
    year: '',
    examType: '',
    semester: '',
    branch: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);

  // Derive unique options dynamically from available dataset
  const years = Array.from(new Set(EXAM_TIMETABLES.map((t) => t.year))).sort((a, b) => b - a);
  const examTypes = Array.from(new Set(EXAM_TIMETABLES.map((t) => t.examType)));
  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const branches = ['CSE', 'ECE', 'EEE', 'Civil Engineering', 'Mechanical Engineering'];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      year: '',
      examType: '',
      semester: '',
      branch: ''
    });
    setSearchQuery('');
  };

  // Filter timetables logic
  const filteredTimetables = EXAM_TIMETABLES.filter((item) => {
    if (filters.year && item.year !== filters.year) return false;
    if (filters.examType && item.examType !== filters.examType) return false;
    if (filters.semester && item.semester !== filters.semester) return false;
    if (filters.branch && item.branch !== filters.branch) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchBranch = item.branch.toLowerCase().includes(q);
      if (!matchTitle && !matchBranch) return false;
    }
    return true;
  });

  const filterConfigs = [
    { key: 'year', label: 'Examination Year', options: years },
    { key: 'examType', label: 'Examination Type', options: examTypes },
    { key: 'semester', label: 'Semester', options: semesters },
    { key: 'branch', label: 'Branch', options: branches }
  ];

  const handleDownload = (timetable) => {
    const link = document.createElement('a');
    link.href = timetable.pdfUrl;
    link.download = timetable.fileName || `${timetable.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="exam-page-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <Calendar className="text-blue" size={32} /> Examination Timetables
        </h1>
        <p className="page-subtitle">
          Select exam year, examination type, semester, and branch to quickly locate official KTU theory timetables.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <Info size={18} className="text-blue" />
        <span>
          <strong>Sample Timetables:</strong> The timetables displayed below contain verified sample schedules for demonstration purposes.
        </span>
      </div>

      {/* Filter Controls Bar */}
      <FilterBar
        filters={filterConfigs}
        filterValues={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search timetables e.g. S5 Regular Nov 2026..."
      />

      {/* Results Section */}
      <div className="results-summary-bar">
        <h3>Matching Examination Timetables ({filteredTimetables.length})</h3>
      </div>

      {filteredTimetables.length === 0 ? (
        <div className="empty-state card">
          <FileText size={48} />
          <h3>No examination timetables found matching your filter criteria.</h3>
          <p>Try clearing your active filters or selecting another semester or branch.</p>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
            <RotateCcw size={15} /> Reset All Filters
          </button>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Exam Year</th>
                <th>Exam Type</th>
                <th>Semester</th>
                <th>Branch</th>
                <th>Timetable Title</th>
                <th>Published Date</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTimetables.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="badge badge-urgent">{item.year}</span>
                  </td>
                  <td>
                    <span className="badge badge-normal">{item.examType}</span>
                  </td>
                  <td>
                    <strong>{item.semester}</strong>
                  </td>
                  <td>{item.branch}</td>
                  <td>
                    <div className="timetable-title-cell">
                      <FileText size={16} className="text-blue" />
                      <strong>{item.title}</strong>
                    </div>
                  </td>
                  <td>{formatDateIST(item.publishDate)}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedDoc(item)}
                      >
                        <Eye size={14} /> View
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleDownload(item)}
                      >
                        <Download size={14} /> Download PDF
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PDF Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        document={selectedDoc}
      />

      <style>{`
        .exam-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .results-summary-bar {
          margin-top: 4px;
        }

        .timetable-title-cell {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-navy);
        }

        .table-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
