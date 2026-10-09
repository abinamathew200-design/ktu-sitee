# KTU SmartHub - Student Portal

**KTU SmartHub** is a responsive, student-friendly university portal designed for APJ Abdul Kalam Technological University (KTU) students. It organizes examination timetables, results, previous year question papers, mock tests, university forms, academic calendar, and real-time urgency deadline notifications in one centralized location.

---

## 🚀 Technology Stack

- **React.js (v18+)**
- **Vite** (Development Environment & Build tool)
- **React Router DOM (v6)** for page navigation
- **Lucide React** for icons
- **JavaScript (ES6+)** & CSS3 Custom Properties
- **localStorage** for client-side demo authentication, editable profile, and mock test score history
- **Frontend-Only Architecture** (No backend, no database, no external AI services)

---

## 🔐 Demo Login Credentials

For demonstration and testing purposes, use the pre-filled demo account:

- **User ID / Email:** `student@ktu.edu.in` (or `TVE22CS045`)
- **Password:** `ktu12345`

*Note: Frontend prototype login operates using client state. It does not claim production-level server authentication.*

---

## 📌 Main Portal Navigation (6 Primary Tabs)

1. **HOME:** Student Dashboard featuring:
   - Animated Deadline Notification Banner (URGENT / WARNING / UPCOMING)
   - Dynamic IST Timezone remaining-time calculation
   - Upcoming Deadlines list
   - Latest University Notifications
   - Upcoming Examination Highlight
   - PYQ & Mock Test quick-access cards
   - Academic Calendar shortcut
2. **STUDENT:** Student Resources Hub with 4 interactive sections:
   - **Previous Year Question Papers (PYQ):** Multi-filter search (Course, Branch, Semester, Subject, Year) with PDF viewer and download support.
   - **Interactive Mock Tests:** Subject-wise timed MCQ practice, non-resetting timer, automatic score evaluation, detailed answer explanations, and localStorage score history.
   - **Academic Calendar:** Filterable university schedules and event views.
   - **Student Profile:** Editable demo student details saved in localStorage.
3. **EXAM:** Examination Timetables with multi-level filtering (Exam Year, Exam Type, Semester, Branch), responsive schedule tables, and PDF download options.
4. **RESULT:** Official university result publication announcements and portal result login links.
5. **FORMS:** Categorized university applications with dynamic availability status (`Open`, `Closing Soon`, `Closed`) and interactive online form simulation.
6. **NOTIFICATIONS:** Centralized university circulars with keyword search, category filters, date sorting, and visual NEW indicators.

---

## 🛠️ How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📁 Data Architecture

All sample data for deadlines, notifications, timetables, question papers, mock tests, calendar events, results, and forms are centralized in:
`src/data/sampleData.js`

Deadlines shared between the Home page banner and Forms/Notifications pages originate from this single source of truth.
