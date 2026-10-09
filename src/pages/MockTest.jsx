import React, { useState, useEffect, useRef } from 'react';
import {
  BrainCircuit,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  History,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Award,
  BookOpen
} from 'lucide-react';
import { MOCK_TESTS } from '../data/sampleData';

export default function MockTest() {
  const [stage, setStage] = useState('setup'); // 'setup' | 'testing' | 'result'
  const [selectedSubjectId, setSelectedSubjectId] = useState(MOCK_TESTS[0].id);
  const [activeQuiz, setActiveQuiz] = useState(null);
  
  // Quiz state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { qId: optionIndex }
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [history, setHistory] = useState([]);
  
  const timerRef = useRef(null);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ktu_mock_test_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (err) {
      console.error('Failed to load mock history', err);
    }
  }, []);

  // Save history to localStorage
  const saveHistory = (newEntry) => {
    const updated = [newEntry, ...history];
    setHistory(updated);
    try {
      localStorage.setItem('ktu_mock_test_history', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save mock history', err);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('ktu_mock_test_history');
    } catch (err) {
      console.error('Failed to clear history', err);
    }
  };

  // Start Test
  const handleStartTest = () => {
    const quiz = MOCK_TESTS.find((q) => q.id === selectedSubjectId) || MOCK_TESTS[0];
    setActiveQuiz(quiz);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTimeLeftSeconds(quiz.timeLimitMinutes * 60);
    setStage('testing');
  };

  // Countdown timer effect
  useEffect(() => {
    if (stage !== 'testing') return;

    timerRef.current = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [stage]);

  const handleSelectOption = (qId, optionIdx) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const handleAutoSubmit = () => {
    handleSubmitTest();
  };

  const handleSubmitTest = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    // Calculate score
    let score = 0;
    const total = activeQuiz.questions.length;

    activeQuiz.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });

    const percentage = Math.round((score / total) * 100);

    const historyRecord = {
      id: `HIST-${Date.now()}`,
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      subject: activeQuiz.subject,
      topic: activeQuiz.topic,
      score,
      total,
      percentage
    };

    saveHistory(historyRecord);
    setStage('result');
    setIsSubmitting(false);
  };

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const selectedQuizConfig = MOCK_TESTS.find((q) => q.id === selectedSubjectId) || MOCK_TESTS[0];

  return (
    <div className="mock-test-container">
      <div className="page-header-box">
        <h1 className="page-title">
          <BrainCircuit className="text-blue" size={32} /> Interactive Mock Test System
        </h1>
        <p className="page-subtitle">
          Test your knowledge with KTU subject-wise multiple choice quizzes, timed practice, and detailed answers.
        </p>
      </div>

      {/* STAGE 1: SETUP SCREEN */}
      {stage === 'setup' && (
        <div className="setup-grid">
          <div className="setup-card card">
            <h2 className="setup-title">
              <BookOpen size={20} className="text-blue" /> Configure Mock Examination
            </h2>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">Select Subject & Topic</label>
              <select
                className="form-select"
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
              >
                {MOCK_TESTS.map((test) => (
                  <option key={test.id} value={test.id}>
                    {test.subject} ({test.subjectCode}) — {test.topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="quiz-summary-box card">
              <h4>Test Details</h4>
              <ul className="summary-list">
                <li><strong>Subject Code:</strong> {selectedQuizConfig.subjectCode}</li>
                <li><strong>Topic Covered:</strong> {selectedQuizConfig.topic}</li>
                <li><strong>Total Questions:</strong> {selectedQuizConfig.questions.length} MCQs</li>
                <li><strong>Time Limit:</strong> {selectedQuizConfig.timeLimitMinutes} Minutes</li>
                <li><strong>Scoring:</strong> 1 mark per correct answer, 0 for wrong</li>
              </ul>
            </div>

            <div className="demo-notice-bar" style={{ borderRadius: '8px', marginBottom: '20px' }}>
              📌 Questions are sample practice MCQs for demonstration.
            </div>

            <button className="btn btn-primary btn-full btn-start" onClick={handleStartTest}>
              Start Practice Test <ChevronRight size={18} />
            </button>
          </div>

          {/* History Sidebar */}
          <div className="history-card card">
            <div className="history-header">
              <div className="history-title">
                <History size={18} className="text-blue" />
                <h3>Past Test History</h3>
              </div>
              {history.length > 0 && (
                <button className="btn-clear-hist" onClick={clearHistory}>
                  Clear History
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="no-hist-text">No past test attempts found. Complete a test to record your score history here in localStorage.</p>
            ) : (
              <div className="history-list">
                {history.map((item) => (
                  <div key={item.id} className="history-item">
                    <div className="hist-top">
                      <span className="hist-subject">{item.subject}</span>
                      <span className={`badge ${item.percentage >= 70 ? 'badge-success' : 'badge-warning'}`}>
                        {item.score}/{item.total} ({item.percentage}%)
                      </span>
                    </div>
                    <span className="hist-topic">{item.topic}</span>
                    <span className="hist-date">{item.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* STAGE 2: ACTIVE TESTING SCREEN */}
      {stage === 'testing' && activeQuiz && (
        <div className="testing-wrapper card">
          {/* Test Header */}
          <div className="testing-header">
            <div>
              <span className="badge badge-normal">{activeQuiz.subjectCode}</span>
              <h2 className="testing-title">{activeQuiz.subject}</h2>
              <span className="testing-topic">{activeQuiz.topic}</span>
            </div>

            <div className={`timer-box ${timeLeftSeconds < 120 ? 'timer-warning' : ''}`}>
              <Clock size={18} />
              <span>Time Remaining: <strong>{formatTimer(timeLeftSeconds)}</strong></span>
            </div>
          </div>

          {/* Question Navigation Grid */}
          <div className="q-nav-bar">
            <span>Questions:</span>
            <div className="q-nav-buttons">
              {activeQuiz.questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = currentQIndex === idx;
                return (
                  <button
                    key={q.id}
                    className={`q-nav-btn ${isCurrent ? 'q-nav-active' : ''} ${isAnswered ? 'q-nav-answered' : ''}`}
                    onClick={() => setCurrentQIndex(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Box */}
          {(() => {
            const currentQ = activeQuiz.questions[currentQIndex];
            const selectedOpt = userAnswers[currentQ.id];

            return (
              <div className="question-box">
                <div className="q-number-badge">
                  Question {currentQIndex + 1} of {activeQuiz.questions.length}
                </div>
                <h3 className="q-text">{currentQ.question}</h3>

                <div className="options-list">
                  {currentQ.options.map((optText, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    return (
                      <label
                        key={optIdx}
                        className={`option-card ${isSelected ? 'option-selected' : ''}`}
                        onClick={() => handleSelectOption(currentQ.id, optIdx)}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          checked={isSelected}
                          onChange={() => handleSelectOption(currentQ.id, optIdx)}
                        />
                        <span className="opt-label">{String.fromCharCode(65 + optIdx)}.</span>
                        <span className="opt-text">{optText}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Test Footer Controls */}
          <div className="testing-footer">
            <button
              className="btn btn-secondary"
              disabled={currentQIndex === 0}
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
            >
              <ChevronLeft size={16} /> Previous
            </button>

            {currentQIndex < activeQuiz.questions.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentQIndex((prev) => prev + 1)}
              >
                Next Question <ChevronRight size={16} />
              </button>
            ) : (
              <button className="btn btn-primary btn-submit-test" onClick={handleSubmitTest}>
                Submit Test <CheckCircle2 size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STAGE 3: RESULT REVIEW SCREEN */}
      {stage === 'result' && activeQuiz && (
        <div className="result-wrapper card">
          <div className="result-score-banner">
            <Award size={48} className="score-icon" />
            <h2>Test Completed!</h2>
            {(() => {
              let score = 0;
              activeQuiz.questions.forEach((q) => {
                if (userAnswers[q.id] === q.correctIndex) score += 1;
              });
              const pct = Math.round((score / activeQuiz.questions.length) * 100);

              return (
                <div className="score-details">
                  <div className="score-number">
                    {score} / {activeQuiz.questions.length}
                  </div>
                  <div className="score-percentage">
                    Score: <strong>{pct}%</strong>
                  </div>
                  <p className="score-feedback">
                    {pct >= 80 ? '🌟 Excellent performance!' : pct >= 50 ? '👍 Good attempt! Review answers below.' : '📖 Needs improvement. Practice more tests.'}
                  </p>
                </div>
              );
            })()}
          </div>

          <h3 className="review-title">Detailed Answer Explanations</h3>

          <div className="review-list">
            {activeQuiz.questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;

              return (
                <div key={q.id} className={`review-card ${isCorrect ? 'review-correct' : 'review-wrong'}`}>
                  <div className="review-header">
                    <span className="q-badge">Q{idx + 1}</span>
                    <h4 className="q-title">{q.question}</h4>
                    {isCorrect ? (
                      <span className="badge badge-success"><CheckCircle2 size={14}/> Correct</span>
                    ) : (
                      <span className="badge badge-urgent"><XCircle size={14}/> Incorrect</span>
                    )}
                  </div>

                  <div className="options-review">
                    {q.options.map((opt, oIdx) => {
                      let itemClass = 'opt-review-item';
                      if (oIdx === q.correctIndex) itemClass += ' opt-is-correct';
                      if (userAns === oIdx && !isCorrect) itemClass += ' opt-is-user-wrong';

                      return (
                        <div key={oIdx} className={itemClass}>
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          {oIdx === q.correctIndex && <span className="lbl-right">✓ Correct Answer</span>}
                          {userAns === oIdx && !isCorrect && <span className="lbl-user">Your Answer</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="explanation-box">
                    <strong>💡 Explanation:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="result-footer-actions">
            <button className="btn btn-primary" onClick={() => setStage('setup')}>
              <RotateCcw size={16} /> Retake Test or Choose Another Subject
            </button>
          </div>
        </div>
      )}

      <style>{`
        .mock-test-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .setup-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }

        .setup-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quiz-summary-box {
          margin: 20px 0;
          background-color: var(--bg-subtle);
          padding: 16px;
        }

        .summary-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        .btn-start {
          padding: 12px;
          font-size: 1rem;
        }

        .history-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }

        .history-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .history-title h3 {
          font-size: 1.1rem;
          color: var(--primary-navy);
        }

        .btn-clear-hist {
          font-size: 0.78rem;
          color: var(--urgent-red);
          font-weight: 600;
        }

        .no-hist-text {
          font-size: 0.86rem;
          color: var(--text-muted);
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .history-item {
          background-color: var(--bg-subtle);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .hist-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .hist-subject {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary-navy);
        }

        .hist-topic {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
        }

        .hist-date {
          font-size: 0.72rem;
          color: var(--text-light);
          display: block;
          margin-top: 4px;
        }

        /* Testing stage */
        .testing-wrapper {
          padding: 28px;
        }

        .testing-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .testing-title {
          font-size: 1.4rem;
          color: var(--primary-navy);
        }

        .testing-topic {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .timer-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--light-blue-bg);
          border: 1px solid var(--light-blue-border);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          color: var(--primary-navy);
          font-size: 0.95rem;
        }

        .timer-warning {
          background-color: var(--urgent-bg);
          border-color: var(--urgent-border);
          color: var(--urgent-red);
          animation: pulseGlow 1.5s infinite;
        }

        .q-nav-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          background-color: var(--bg-subtle);
          padding: 10px 16px;
          border-radius: var(--radius-md);
        }

        .q-nav-buttons {
          display: flex;
          gap: 8px;
        }

        .q-nav-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-main);
        }

        .q-nav-active {
          background-color: var(--primary-navy);
          color: #ffffff;
          border-color: var(--primary-navy);
        }

        .q-nav-answered {
          background-color: var(--accent-blue);
          color: #ffffff;
          border-color: var(--accent-blue);
        }

        .question-box {
          margin-bottom: 28px;
        }

        .q-number-badge {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-blue);
          margin-bottom: 8px;
        }

        .q-text {
          font-size: 1.25rem;
          color: var(--primary-navy);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          border: 2px solid var(--border-color);
          background-color: #ffffff;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .option-card:hover {
          border-color: var(--light-blue-border);
          background-color: var(--light-blue-bg);
        }

        .option-selected {
          border-color: var(--primary-blue) !important;
          background-color: var(--light-blue-bg) !important;
        }

        .opt-label {
          font-weight: 800;
          color: var(--primary-navy);
        }

        .opt-text {
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .testing-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .btn-submit-test {
          background-color: var(--success-green);
        }

        .btn-submit-test:hover {
          background-color: #059669;
        }

        /* Result Stage */
        .result-score-banner {
          text-align: center;
          padding: 32px;
          background-color: var(--light-blue-bg);
          border-radius: var(--radius-lg);
          margin-bottom: 28px;
        }

        .score-icon {
          color: var(--primary-navy);
          margin-bottom: 12px;
        }

        .score-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-navy);
        }

        .score-percentage {
          font-size: 1.1rem;
          color: var(--primary-blue);
        }

        .score-feedback {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .review-title {
          font-size: 1.2rem;
          color: var(--primary-navy);
          margin-bottom: 16px;
        }

        .review-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }

        .review-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .review-correct {
          border-left: 4px solid var(--success-green);
          background-color: #f0fdf4;
        }

        .review-wrong {
          border-left: 4px solid var(--urgent-red);
          background-color: #fef2f2;
        }

        .review-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
        }

        .q-badge {
          font-weight: 800;
          color: var(--primary-navy);
        }

        .q-title {
          flex: 1;
          font-size: 1rem;
          color: var(--primary-navy);
        }

        .options-review {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .opt-review-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
        }

        .opt-is-correct {
          border-color: var(--success-green);
          background-color: #ecfdf5;
          font-weight: 700;
        }

        .opt-is-user-wrong {
          border-color: var(--urgent-red);
          background-color: #fef2f2;
          color: var(--urgent-red);
        }

        .lbl-right {
          font-size: 0.76rem;
          color: var(--success-green);
          font-weight: 700;
        }

        .lbl-user {
          font-size: 0.76rem;
          color: var(--urgent-red);
          font-weight: 700;
        }

        .explanation-box {
          font-size: 0.88rem;
          color: var(--text-main);
          background-color: #ffffff;
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-color);
        }

        .result-footer-actions {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .setup-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
