import React, { useState } from 'react';
import { FileText, Calendar, Clock, CheckCircle2, AlertTriangle, XCircle, Send, RotateCcw, Info, Download, ExternalLink } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import DocumentViewerModal from '../components/DocumentViewerModal';
import { UNIVERSITY_FORMS, DEMO_STUDENT } from '../data/sampleData';
import { calculateDeadlineStatus, formatDateIST } from '../utils/deadlineUtils';

export default function Forms({ user }) {
  const [filters, setFilters] = useState({ category: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFormModal, setActiveFormModal] = useState(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const categories = [
    'Examination Registration',
    'Supplementary Examination',
    'Revaluation',
    'Academic Applications',
    'Other University Forms'
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({ category: '' });
    setSearchQuery('');
  };

  const filteredForms = UNIVERSITY_FORMS.filter((form) => {
    if (filters.category && form.category !== filters.category) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = form.title.toLowerCase().includes(q);
      const matchDesc = form.description.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }
    return true;
  });

  const getFormStatus = (dueDate) => {
    if (!dueDate) return { label: 'Open', badgeClass: 'badge-success', icon: CheckCircle2 };
    const status = calculateDeadlineStatus(dueDate);
    if (status.isPast) return { label: 'Closed', badgeClass: 'badge-expired', icon: XCircle };
    if (status.urgency === 'URGENT' || status.urgency === 'WARNING') {
      return { label: 'Closing Soon', badgeClass: 'badge-warning', icon: AlertTriangle };
    }
    return { label: 'Open', badgeClass: 'badge-success', icon: CheckCircle2 };
  };

  const handleOpenFormModal = (form) => {
    setActiveFormModal(form);
    setSubmittedSuccess(false);
  };

  const handleSimulateSubmit = (e) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setActiveFormModal(null);
    }, 2500);
  };

  const filterConfigs = [
    { key: 'category', label: 'Form Category', options: categories }
  ];

  return (
    <div className="forms-page-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <FileText className="text-blue" size={32} /> University Forms & Online Applications
        </h1>
        <p className="page-subtitle">
          Official KTU examination registration, revaluation requests, supplementary applications, and certificate request forms.
        </p>
      </div>

      <div className="disclaimer-banner card">
        <Info size={18} className="text-blue" />
        <span>
          <strong>Sample Forms:</strong> Digital applications on KTU SmartHub are interactive interactive demonstrations for student guidance.
        </span>
      </div>

      <FilterBar
        filters={filterConfigs}
        filterValues={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search forms e.g. Revaluation, Supplementary..."
      />

      <div className="forms-results-header">
        <h3>Available University Forms ({filteredForms.length})</h3>
      </div>

      {filteredForms.length === 0 ? (
        <div className="empty-state card">
          <FileText size={48} />
          <h3>No forms found for your selection.</h3>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
            <RotateCcw size={15} /> Reset Filter
          </button>
        </div>
      ) : (
        <div className="forms-grid">
          {filteredForms.map((form) => {
            const statusObj = getFormStatus(form.dueDate);
            const StatusIcon = statusObj.icon;
            const dlStatus = form.dueDate ? calculateDeadlineStatus(form.dueDate) : null;

            return (
              <div key={form.id} className="form-card card card-hover">
                <div className="form-card-top">
                  <span className="badge badge-normal">{form.category}</span>
                  <span className={`badge ${statusObj.badgeClass}`}>
                    <StatusIcon size={13} /> {statusObj.label}
                  </span>
                </div>

                <h3 className="form-card-title">{form.title}</h3>
                <p className="form-card-desc">{form.description}</p>

                {form.dueDate && dlStatus && !dlStatus.isPast && (
                  <div className="form-deadline-chip">
                    <Clock size={14} /> Deadline: {formatDateIST(form.dueDate)} ({dlStatus.remainingText})
                  </div>
                )}

                <div className="form-card-footer">
                  {form.pdfUrl && (
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedDoc({ title: form.title, pdfUrl: form.pdfUrl, fileName: `${form.id}.pdf` })}
                    >
                      <Download size={14} /> PDF Template
                    </button>
                  )}
                  <button
                    className={`btn ${statusObj.label === 'Closed' ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                    disabled={statusObj.label === 'Closed'}
                    onClick={() => handleOpenFormModal(form)}
                  >
                    Open Form & Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Form Application Modal */}
      {activeFormModal && (
        <div className="modal-overlay" onClick={() => setActiveFormModal(null)}>
          <div className="modal-container form-interactive-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-normal">{activeFormModal.category}</span>
                <h3 className="modal-title" style={{ marginTop: '4px' }}>{activeFormModal.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setActiveFormModal(null)}>×</button>
            </div>

            <div className="modal-body">
              {submittedSuccess ? (
                <div className="submission-success-box">
                  <CheckCircle2 size={48} className="text-green" />
                  <h3>Application Submitted Successfully!</h3>
                  <p>Your demo application reference token has been generated: <strong>KTU-APP-{Date.now().toString().slice(-6)}</strong></p>
                </div>
              ) : (
                <form onSubmit={handleSimulateSubmit} className="interactive-form">
                  <p className="form-modal-sub">
                    Pre-filled with authenticated student details for <strong>{user?.name || DEMO_STUDENT.name}</strong> ({user?.registerNo || DEMO_STUDENT.registerNo}).
                  </p>

                  {activeFormModal.formFields.map((field) => (
                    <div className="form-group" key={field.name}>
                      <label className="form-label">{field.label}</label>
                      {field.type === 'select' ? (
                        <select className="form-select">
                          {field.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          className="form-input"
                          defaultValue={field.defaultValue}
                          required
                        />
                      )}
                    </div>
                  ))}

                  <div className="modal-footer" style={{ padding: 0, marginTop: '20px', background: 'transparent' }}>
                    <button type="button" className="btn btn-secondary" onClick={() => setActiveFormModal(null)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <Send size={16} /> Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Document Viewer Modal for Form Template PDFs */}
      <DocumentViewerModal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        document={selectedDoc}
      />

      <style>{`
        .forms-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .forms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .form-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .form-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .form-card-title {
          font-size: 1.15rem;
          color: var(--primary-navy);
          margin-bottom: 6px;
        }

        .form-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .form-deadline-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: var(--urgent-bg);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 16px;
        }

        .form-card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
          margin-top: 6px;
        }

        .form-card-footer .btn {
          flex: 1;
        }

        .form-interactive-modal {
          max-width: 580px;
        }

        .form-modal-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 18px;
          background-color: var(--light-blue-bg);
          padding: 10px;
          border-radius: var(--radius-sm);
        }

        .submission-success-box {
          text-align: center;
          padding: 36px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .submission-success-box h3 {
          font-size: 1.3rem;
          color: var(--primary-navy);
        }

        .text-green { color: var(--success-green); }
      `}</style>
    </div>
  );
}
