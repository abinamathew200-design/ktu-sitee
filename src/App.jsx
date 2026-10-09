import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components & Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Student from './pages/Student';
import PYQ from './pages/PYQ';
import MockTest from './pages/MockTest';
import AcademicCalendar from './pages/AcademicCalendar';
import StudentProfile from './pages/StudentProfile';
import Exam from './pages/Exam';
import Result from './pages/Result';
import Forms from './pages/Forms';
import Notifications from './pages/Notifications';

// Sample default user
import { DEMO_STUDENT } from './data/sampleData';

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('ktu_user_session');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error('Failed to parse user session', e);
      return null;
    }
  });

  const handleLogin = (userData) => {
    const userToSave = userData || DEMO_STUDENT;
    setUser(userToSave);
    try {
      localStorage.setItem('ktu_user_session', JSON.stringify(userToSave));
    } catch (e) {
      console.error('Failed to save user session', e);
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('ktu_user_session');
    } catch (e) {
      console.error('Failed to remove user session', e);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    try {
      localStorage.setItem('ktu_user_session', JSON.stringify(updatedUser));
    } catch (e) {
      console.error('Failed to update user session', e);
    }
  };

  return (
    <Router>
      <div className="app-container">
        {user && <Navbar user={user} onLogout={handleLogout} />}

        <main className="main-content">
          <Routes>
            {/* Public Login Route */}
            <Route
              path="/login"
              element={
                user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
              }
            />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute user={user}>
                  <Home user={user} />
                </ProtectedRoute>
              }
            />

            {/* STUDENT Resources Parent & Sub-Routes */}
            <Route
              path="/student"
              element={
                <ProtectedRoute user={user}>
                  <Student />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/pyq"
              element={
                <ProtectedRoute user={user}>
                  <PYQ />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pyq"
              element={
                <ProtectedRoute user={user}>
                  <PYQ />
                </ProtectedRoute>
              }
            />

            <Route
              path="/student/mock-test"
              element={
                <ProtectedRoute user={user}>
                  <MockTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mock-test"
              element={
                <ProtectedRoute user={user}>
                  <MockTest />
                </ProtectedRoute>
              }
            />

            <Route
              path="/student/academic-calendar"
              element={
                <ProtectedRoute user={user}>
                  <AcademicCalendar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academic-calendar"
              element={
                <ProtectedRoute user={user}>
                  <AcademicCalendar />
                </ProtectedRoute>
              }
            />

            <Route
              path="/student/profile"
              element={
                <ProtectedRoute user={user}>
                  <StudentProfile user={user} onUpdateUser={handleUpdateUser} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user}>
                  <StudentProfile user={user} onUpdateUser={handleUpdateUser} />
                </ProtectedRoute>
              }
            />

            {/* EXAM Page */}
            <Route
              path="/exam"
              element={
                <ProtectedRoute user={user}>
                  <Exam />
                </ProtectedRoute>
              }
            />

            {/* RESULT Page */}
            <Route
              path="/result"
              element={
                <ProtectedRoute user={user}>
                  <Result />
                </ProtectedRoute>
              }
            />

            {/* FORMS Page */}
            <Route
              path="/forms"
              element={
                <ProtectedRoute user={user}>
                  <Forms user={user} />
                </ProtectedRoute>
              }
            />

            {/* NOTIFICATIONS Page */}
            <Route
              path="/notifications"
              element={
                <ProtectedRoute user={user}>
                  <Notifications />
                </ProtectedRoute>
              }
            />

            {/* Catch-all Fallback */}
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
          </Routes>
        </main>

        {user && <Footer />}
      </div>
    </Router>
  );
}
