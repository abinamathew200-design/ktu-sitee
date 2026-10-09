import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function DocumentViewerModal({ isOpen, onClose, document }) {
  if (!isOpen || !document) return null;

  const handleDownload = () => {
    const link = window.document.createElement('a');
    link.href = document.pdfUrl;
    link.download = document.fileName || 'KTU_Document.pdf';
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container doc-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="doc-title-box">
            <FileText size={20} className="doc-icon" />
            <div>
              <h3 className="modal-title">{document.title || document.fileName}</h3>
              <span className="doc-sub">{document.fileName}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close PDF viewer">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body doc-body">
          <div className="pdf-frame-wrapper">
            <iframe
              src={document.pdfUrl}
              title={document.title}
              className="pdf-iframe"
            />
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={document.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <ExternalLink size={16} /> Open in New Tab
          </a>
          <button className="btn btn-primary" onClick={handleDownload}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <style>{`
        .doc-modal {
          max-width: 850px;
          height: 85vh;
          display: flex;
          flex-direction: column;
        }

        .doc-title-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .doc-icon {
          color: var(--primary-blue);
        }

        .doc-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .doc-body {
          flex: 1;
          padding: 0;
          overflow: hidden;
          background-color: #525659;
        }

        .pdf-frame-wrapper {
          width: 100%;
          height: 100%;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
}
