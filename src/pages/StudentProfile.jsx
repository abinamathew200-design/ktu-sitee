import React, { useState } from 'react';
import { User, Edit3, Save, RotateCcw, CheckCircle2, Building, Mail, Phone, BookOpen, Award, Shield } from 'lucide-react';
import { DEMO_STUDENT } from '../data/sampleData';

export default function StudentProfile({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || DEMO_STUDENT.name,
    email: user?.email || DEMO_STUDENT.email,
    phone: user?.phone || DEMO_STUDENT.phone,
    semester: user?.semester || DEMO_STUDENT.semester,
    branch: user?.branch || DEMO_STUDENT.branch,
    college: user?.college || DEMO_STUDENT.college
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      ...formData
    };
    onUpdateUser(updatedUser);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetDefault = () => {
    setFormData({
      name: DEMO_STUDENT.name,
      email: DEMO_STUDENT.email,
      phone: DEMO_STUDENT.phone,
      semester: DEMO_STUDENT.semester,
      branch: DEMO_STUDENT.branch,
      college: DEMO_STUDENT.college
    });
    onUpdateUser(DEMO_STUDENT);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="student-profile-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <User className="text-blue" size={32} /> Student Profile & Academic Record
        </h1>
        <p className="page-subtitle">
          Manage demo student account details, enrolled engineering branch, and academic preferences.
        </p>
      </div>

      <div className="demo-notice-bar" style={{ borderRadius: '10px' }}>
        📌 <strong>Demo Data Disclaimer:</strong> Editable profile details are saved locally in your browser's <code>localStorage</code>.
      </div>

      {saveSuccess && (
        <div className="save-alert">
          <CheckCircle2 size={18} /> Profile details saved successfully in localStorage!
        </div>
      )}

      <div className="profile-layout-grid">
        {/* Main Profile Info Card */}
        <div className="profile-card card">
          <div className="profile-card-header">
            <div className="avatar-large">
              <User size={40} />
            </div>
            <div className="profile-header-text">
              <h2>{formData.name}</h2>
              <p className="reg-no">KTU Register No: <strong>{user?.registerNo || DEMO_STUDENT.registerNo}</strong></p>
              <div className="header-badges">
                <span className="badge badge-normal">{formData.semester} B.Tech</span>
                <span className="badge badge-upcoming">{user?.branchCode || DEMO_STUDENT.branchCode}</span>
                <span className="badge badge-success">CGPA: {user?.cgpa || DEMO_STUDENT.cgpa}</span>
              </div>
            </div>

            {!isEditing ? (
              <button className="btn btn-secondary btn-edit-toggle" onClick={() => setIsEditing(true)}>
                <Edit3 size={15} /> Edit Profile
              </button>
            ) : (
              <button className="btn btn-secondary btn-edit-toggle" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            )}
          </div>

          <form onSubmit={handleSave} className="profile-form">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">KTU Register Number (Read-only)</label>
                <input
                  type="text"
                  className="form-input"
                  value={user?.registerNo || DEMO_STUDENT.registerNo}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Mobile Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.phone}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Enrolled Course</label>
                <input
                  type="text"
                  className="form-input"
                  value={user?.course || DEMO_STUDENT.course}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label">Current Semester</label>
                <select
                  className="form-select"
                  value={formData.semester}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('semester', e.target.value)}
                >
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                  <option value="S4">S4</option>
                  <option value="S5">S5</option>
                  <option value="S6">S6</option>
                  <option value="S7">S7</option>
                  <option value="S8">S8</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Engineering Branch</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.branch}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('branch', e.target.value)}
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Affiliated Institution / College</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.college}
                  disabled={!isEditing}
                  onChange={(e) => handleChange('college', e.target.value)}
                />
              </div>
            </div>

            {isEditing && (
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  <Save size={16} /> Save Profile Changes
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleResetDefault}>
                  <RotateCcw size={16} /> Reset Default Demo
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Side Academic Record Highlights */}
        <div className="profile-side-col">
          <div className="side-stat-card card">
            <h3 className="side-card-title">
              <Award size={18} className="text-blue" /> Academic Performance
            </h3>
            <div className="stat-rows">
              <div className="stat-row">
                <span className="stat-lbl">Cumulative CGPA</span>
                <span className="stat-val text-blue">8.64 / 10.0</span>
              </div>
              <div className="stat-row">
                <span className="stat-lbl">Batch</span>
                <span className="stat-val">2022 - 2026</span>
              </div>
              <div className="stat-row">
                <span className="stat-lbl">Activity Points</span>
                <span className="stat-val text-success">85 / 100 Earned</span>
              </div>
            </div>
          </div>

          <div className="side-stat-card card">
            <h3 className="side-card-title">
              <Shield size={18} className="text-navy" /> Portal Security Notice
            </h3>
            <p className="side-card-desc">
              Your session is currently authenticated in local demo mode. No credentials or personal identification data are transmitted to external servers.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .student-profile-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .save-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background-color: var(--success-bg);
          border: 1px solid #a7f3d0;
          color: var(--success-green);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .profile-layout-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 24px;
        }

        .profile-card {
          padding: 28px;
        }

        .profile-card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .avatar-large {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--primary-navy);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .profile-header-text {
          flex: 1;
        }

        .profile-header-text h2 {
          font-size: 1.5rem;
          color: var(--primary-navy);
        }

        .reg-no {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .header-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .btn-edit-toggle {
          align-self: flex-start;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .full-width {
          grid-column: span 2;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
        }

        .profile-side-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-stat-card {
          padding: 22px;
        }

        .side-card-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stat-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .stat-row:last-child {
          border-bottom: none;
        }

        .stat-lbl {
          color: var(--text-muted);
        }

        .stat-val {
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-success { color: var(--success-green); }

        .side-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .profile-layout-grid {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
