import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

export default function FilterBar({
  filters = [],
  filterValues = {},
  onFilterChange,
  onReset,
  searchQuery = '',
  onSearchChange,
  searchPlaceholder = 'Search by keyword...'
}) {
  return (
    <div className="filter-bar-card card">
      <div className="filter-grid">
        {onSearchChange !== undefined && (
          <div className="filter-group search-group">
            <label className="form-label">Search</label>
            <div className="search-input-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="form-input search-input"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
        )}

        {filters.map((f) => (
          <div className="filter-group" key={f.key}>
            <label className="form-label">{f.label}</label>
            <select
              className="form-select"
              value={filterValues[f.key] || ''}
              onChange={(e) => onFilterChange(f.key, e.target.value)}
            >
              <option value="">{f.allLabel || `All ${f.label}s`}</option>
              {f.options.map((opt) => {
                const val = typeof opt === 'object' ? opt.value : opt;
                const label = typeof opt === 'object' ? opt.label : opt;
                return (
                  <option key={val} value={val}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>
        ))}

        {onReset && (
          <div className="filter-group reset-group">
            <label className="form-label" style={{ visibility: 'hidden' }}>Reset</label>
            <button className="btn btn-secondary btn-reset" onClick={onReset}>
              <RotateCcw size={15} /> Reset Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .filter-bar-card {
          margin-bottom: 24px;
          padding: 20px;
          background-color: #ffffff;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          align-items: flex-end;
        }

        .search-group {
          grid-column: span 1;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          padding-left: 38px;
        }

        .btn-reset {
          width: 100%;
          height: 42px;
        }

        @media (max-width: 640px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
