/**
 * KTU SmartHub - Centralized Sample Data Store
 * All deadlines, notifications, timetables, PYQs, mock tests, results, and forms
 * are sourced from here to maintain single-source-of-truth consistency.
 *
 * DISCLAIMER: Sample data for KTU SmartHub demonstration only. Not official KTU notices.
 */

// Helper to get dates relative to today for dynamic testing
const today = new Date();
const formatDateOffset = (daysOffset, hour = 23, minute = 59) => {
  const d = new Date(today);
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hour, minute, 59, 0);
  return d.toISOString();
};

export const DEMO_STUDENT = {
  id: "TVE22CS045",
  name: "Abinash S",
  email: "student@ktu.edu.in",
  course: "B.Tech",
  branch: "Computer Science & Engineering",
  branchCode: "CSE",
  semester: "S5",
  academicYear: "2026-2027",
  college: "College of Engineering Trivandrum (CET)",
  registerNo: "TVE22CS045",
  phone: "+91 98765 43210",
  cgpa: "8.64",
  batch: "2022 - 2026",
  status: "Active Student"
};

export const DEADLINES = [
  {
    id: "DL-101",
    title: "S5 B.Tech Regular Exam Registration Deadline",
    dueDate: formatDateOffset(0), // Today
    category: "Registration",
    formId: "FORM-201",
    shortDescription: "Final date for submitting examination fee and course registration on KTU e-Gov portal for S5 B.Tech Regular (2026).",
    details: "All S5 B.Tech students must verify their registered courses, pay the prescribed examination fee via student portal, and submit the online application before 11:59 PM today. Late submission will not be entertained.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "DL-102",
    title: "S3 B.Tech Supplementary Exam Registration Closing",
    dueDate: formatDateOffset(1), // Tomorrow
    category: "Supplementary",
    formId: "FORM-202",
    shortDescription: "Last date to apply for S3 B.Tech Supplementary Examinations with standard fee payment.",
    details: "Registration for S3 B.Tech Supplementary examinations ends tomorrow. Ensure hall ticket eligibility and clear pending attendance requirements prior to submission.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "DL-103",
    title: "S7 B.Tech Revaluation Application Deadline",
    dueDate: formatDateOffset(2), // 2 days away
    category: "Revaluation",
    formId: "FORM-203",
    shortDescription: "Online application deadline for answer script copy and revaluation for S7 B.Tech results.",
    details: "Students seeking revaluation or copy of answer scripts for S7 B.Tech examinations (2026) must apply through their student login portal before the due date.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "DL-104",
    title: "M.Tech S3 Thesis Intermediate Evaluation Upload",
    dueDate: formatDateOffset(5), // 5 days away
    category: "Academic Applications",
    formId: "FORM-204",
    shortDescription: "Submission of progress report and internal thesis draft for M.Tech S3 research evaluation.",
    details: "Postgraduate candidates are instructed to upload their intermediate thesis report signed by the internal guide on the portal.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "DL-105",
    title: "Condonation Application for Shortage of Attendance (Odd Sem)",
    dueDate: formatDateOffset(8), // 8 days away
    category: "Academic Applications",
    formId: "FORM-205",
    shortDescription: "Submission of medical condonation certificates for students with 65%-74% attendance.",
    details: "Applications for attendance condonation along with authenticated medical certificates must be recommended by the Principal and submitted online.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  }
];

export const NOTIFICATIONS = [
  {
    id: "NOTIF-301",
    title: "Schedule of S5 & S3 B.Tech Regular & Supplementary Examinations Oct 2026",
    publishDate: "2026-10-08",
    category: "Examination",
    isNew: true,
    shortDescription: "Detailed timetable published for S5 and S3 B.Tech regular/supplementary university theory exams starting Nov 2026.",
    content: "The Controller of Examinations, APJ Abdul Kalam Technological University, has published the provisional timetable for S5 and S3 B.Tech examinations scheduled for November 2026. Detailed subject-wise dates are accessible in the Examination section. Grievances regarding overlaps should be emailed through college principals by Oct 15, 2026.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm",
    refNo: "KTU/EX-II/3401/2026"
  },
  {
    id: "NOTIF-302",
    title: "Publication of S4 B.Tech Regular Examination Results (2022 Scheme)",
    publishDate: "2026-10-06",
    category: "Results",
    isNew: true,
    shortDescription: "S4 B.Tech (2022 Scheme) regular examination results are announced and available on student login.",
    content: "It is hereby notified that the results of S4 B.Tech Regular Examinations held in June/July 2026 have been published. Students can view their grade cards on the KTU portal. Registration for revaluation and answer script copy opens on Oct 10, 2026.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm",
    refNo: "KTU/EX-I/1892/2026"
  },
  {
    id: "NOTIF-303",
    title: "Revised Academic Calendar for B.Tech & M.Tech S3/S5/S7 (Odd Semesters 2026-27)",
    publishDate: "2026-10-02",
    category: "Academic",
    isNew: false,
    shortDescription: "Updated academic schedule including internal assessment dates, lab exams, and semester break.",
    content: "The Academic Committee has released the revised academic calendar for Odd Semesters (S3, S5, S7) of B.Tech, M.Tech, and MCA programs for 2026-2027. First internal examination completion deadline is set for Oct 25, 2026.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm",
    refNo: "KTU/ACAD/882/2026"
  },
  {
    id: "NOTIF-304",
    title: "Registration Extension for Ph.D. Entrance Examination 2026 Phase II",
    publishDate: "2026-09-28",
    category: "Registration",
    isNew: false,
    shortDescription: "The last date for Phase II Ph.D. online application has been extended up to October 15, 2026.",
    content: "In response to requests from applicants, the University has extended the online portal registration window for Ph.D. Phase II admission until October 15, 2026.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm",
    refNo: "KTU/RESEARCH/402/2026"
  },
  {
    id: "NOTIF-305",
    title: "Guidelines for Mandatory Activity Points Verification for S8 Graduating Batch",
    publishDate: "2026-09-20",
    category: "General",
    isNew: false,
    shortDescription: "Verification portal open for uploading certificates of 100 KTU activity points for final year students.",
    content: "Colleges are directed to complete the online upload and verification of Student Activity Points (100 points requirement) for the 2022-2026 batch. Student portal document verification tab is active.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm",
    refNo: "KTU/STUDENTAFFAIRS/112/2026"
  }
];

export const EXAM_TIMETABLES = [
  {
    id: "TT-2026-S5-REG-CSE",
    year: "2026",
    examType: "Regular Examination",
    semester: "S5",
    branch: "CSE",
    title: "S5 B.Tech (CSE) Regular Examination Timetable - Nov 2026",
    publishDate: "2026-10-08",
    pdfUrl: "/documents/sample_timetable_s5_regular.pdf",
    fileName: "KTU_S5_CSE_Regular_Timetable_2026.pdf",
    schedule: [
      { code: "CST301", name: "Formal Languages & Automata Theory", date: "2026-11-10", time: "09:30 AM - 12:30 PM" },
      { code: "CST303", name: "Computer Networks", date: "2026-11-13", time: "09:30 AM - 12:30 PM" },
      { code: "CST305", name: "System Software", date: "2026-11-16", time: "09:30 AM - 12:30 PM" },
      { code: "CST307", name: "Microprocessors & Microcontrollers", date: "2026-11-19", time: "09:30 AM - 12:30 PM" },
      { code: "MCN301", name: "Disaster Management", date: "2026-11-23", time: "09:30 AM - 12:30 PM" }
    ]
  },
  {
    id: "TT-2026-S3-SUP-CSE",
    year: "2026",
    examType: "Supplementary Examination",
    semester: "S3",
    branch: "CSE",
    title: "S3 B.Tech (CSE) Supplementary Examination Timetable - Nov 2026",
    publishDate: "2026-10-07",
    pdfUrl: "/documents/sample_timetable_s3_supple.pdf",
    fileName: "KTU_S3_CSE_Supple_Timetable_2026.pdf",
    schedule: [
      { code: "MAT203", name: "Discrete Mathematical Structures", date: "2026-11-11", time: "01:30 PM - 04:30 PM" },
      { code: "CST201", name: "Data Structures", date: "2026-11-14", time: "01:30 PM - 04:30 PM" },
      { code: "CST203", name: "Logic System Design", date: "2026-11-17", time: "01:30 PM - 04:30 PM" },
      { code: "CST205", name: "Object Oriented Programming using Java", date: "2026-11-20", time: "01:30 PM - 04:30 PM" }
    ]
  },
  {
    id: "TT-2025-S4-REG-ECE",
    year: "2025",
    examType: "Regular Examination",
    semester: "S4",
    branch: "ECE",
    title: "S4 B.Tech (ECE) Regular Examination Timetable - May 2025",
    publishDate: "2025-04-20",
    pdfUrl: "/documents/sample_timetable_s5_regular.pdf",
    fileName: "KTU_S4_ECE_Regular_Timetable_2025.pdf",
    schedule: [
      { code: "ECT202", name: "Analog Circuits", date: "2025-05-15", time: "09:30 AM - 12:30 PM" },
      { code: "ECT204", name: "Signals & Systems", date: "2025-05-18", time: "09:30 AM - 12:30 PM" },
      { code: "ECT206", name: "Computer Organization & Architecture", date: "2025-05-21", time: "09:30 AM - 12:30 PM" }
    ]
  },
  {
    id: "TT-2025-S7-IMP-ME",
    year: "2025",
    examType: "Improvement Examination",
    semester: "S7",
    branch: "Mechanical Engineering",
    title: "S7 B.Tech (Mechanical) Improvement Examination Timetable - Dec 2025",
    publishDate: "2025-11-15",
    pdfUrl: "/documents/sample_timetable_s3_supple.pdf",
    fileName: "KTU_S7_ME_Improvement_2025.pdf",
    schedule: [
      { code: "MET401", name: "Design of Machine Elements", date: "2025-12-05", time: "09:30 AM - 12:30 PM" },
      { code: "MET403", name: "Mechatronics", date: "2025-12-08", time: "09:30 AM - 12:30 PM" }
    ]
  },
  {
    id: "TT-2024-S1-REG-CE",
    year: "2024",
    examType: "Regular Examination",
    semester: "S1",
    branch: "Civil Engineering",
    title: "S1 B.Tech (Civil Engineering) Regular Examination Timetable - Jan 2024",
    publishDate: "2023-12-28",
    pdfUrl: "/documents/sample_timetable_s5_regular.pdf",
    fileName: "KTU_S1_Civil_Regular_2024.pdf",
    schedule: [
      { code: "MAT101", name: "Linear Algebra & Calculus", date: "2024-01-15", time: "09:30 AM - 12:30 PM" },
      { code: "CYT100", name: "Engineering Chemistry", date: "2024-01-18", time: "09:30 AM - 12:30 PM" },
      { code: "EST100", name: "Engineering Mechanics", date: "2024-01-22", time: "09:30 AM - 12:30 PM" }
    ]
  }
];

export const PYQ_PAPERS = [
  {
    id: "PYQ-501",
    title: "Data Structures (CST201) - May 2025 Question Paper",
    course: "B.Tech",
    branch: "CSE",
    semester: "S3",
    subject: "Data Structures",
    subjectCode: "CST201",
    year: "2025",
    pdfUrl: "/documents/sample_pyq_ds_2025.pdf",
    fileName: "KTU_CST201_Data_Structures_2025.pdf",
    downloads: 1420
  },
  {
    id: "PYQ-502",
    title: "Database Management Systems (CST304) - Dec 2024 Question Paper",
    course: "B.Tech",
    branch: "CSE",
    semester: "S5",
    subject: "Database Management Systems",
    subjectCode: "CST304",
    year: "2024",
    pdfUrl: "/documents/sample_pyq_dbms_2024.pdf",
    fileName: "KTU_CST304_DBMS_2024.pdf",
    downloads: 980
  },
  {
    id: "PYQ-503",
    title: "Operating Systems (CST206) - May 2024 Question Paper",
    course: "B.Tech",
    branch: "CSE",
    semester: "S4",
    subject: "Operating Systems",
    subjectCode: "CST206",
    year: "2024",
    pdfUrl: "/documents/sample_pyq_os_2024.pdf",
    fileName: "KTU_CST206_Operating_Systems_2024.pdf",
    downloads: 1150
  },
  {
    id: "PYQ-504",
    title: "Discrete Mathematical Structures (MAT203) - Dec 2025 Question Paper",
    course: "B.Tech",
    branch: "CSE",
    semester: "S3",
    subject: "Discrete Mathematics",
    subjectCode: "MAT203",
    year: "2025",
    pdfUrl: "/documents/sample_pyq_ds_2025.pdf",
    fileName: "KTU_MAT203_Discrete_Math_2025.pdf",
    downloads: 870
  },
  {
    id: "PYQ-505",
    title: "Analog Circuits (ECT202) - May 2025 Question Paper",
    course: "B.Tech",
    branch: "ECE",
    semester: "S4",
    subject: "Analog Circuits",
    subjectCode: "ECT202",
    year: "2025",
    pdfUrl: "/documents/sample_pyq_dbms_2024.pdf",
    fileName: "KTU_ECT202_Analog_Circuits_2025.pdf",
    downloads: 640
  },
  {
    id: "PYQ-506",
    title: "Advanced Data Structures (RLCA201) - Jan 2025 Question Paper",
    course: "MCA",
    branch: "Computer Applications",
    semester: "S2",
    subject: "Advanced Data Structures",
    subjectCode: "RLCA201",
    year: "2025",
    pdfUrl: "/documents/sample_pyq_ds_2025.pdf",
    fileName: "KTU_MCA_RLCA201_2025.pdf",
    downloads: 410
  }
];

export const MOCK_TESTS = [
  {
    id: "MOCK-DS-01",
    subject: "Data Structures",
    subjectCode: "CST201",
    topic: "Arrays, Stacks & Queues",
    timeLimitMinutes: 10,
    questions: [
      {
        id: "Q1",
        question: "Which data structure operates on a Last-In, First-Out (LIFO) order?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctIndex: 1,
        explanation: "A Stack adds and removes elements from the top, following the Last-In First-Out (LIFO) protocol."
      },
      {
        id: "Q2",
        question: "What is the worst-case time complexity of accessing an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctIndex: 0,
        explanation: "Array elements are stored in contiguous memory locations, allowing direct O(1) random access via index calculation."
      },
      {
        id: "Q3",
        question: "Which of the following queue variants allows insertion and deletion from both ends?",
        options: ["Circular Queue", "Priority Queue", "Deque (Double-Ended Queue)", "Simple Queue"],
        correctIndex: 2,
        explanation: "A Deque (Double-Ended Queue) allows elements to be added or removed from either the front or the rear."
      },
      {
        id: "Q4",
        question: "In a circular queue implemented using array of size N, what is the condition for Queue Full?",
        options: [
          "(rear + 1) % N == front",
          "rear == N - 1",
          "front == rear + 1",
          "front == -1"
        ],
        correctIndex: 0,
        explanation: "The modulo arithmetic `(rear + 1) % N == front` checks if the next index wraps around to meet the front pointer."
      },
      {
        id: "Q5",
        question: "Which data structure is typically used for expression evaluation and syntax parsing?",
        options: ["Tree", "Stack", "Queue", "Heap"],
        correctIndex: 1,
        explanation: "Stacks are heavily used for converting and evaluating infix, prefix, and postfix expressions."
      }
    ]
  },
  {
    id: "MOCK-OS-01",
    subject: "Operating Systems",
    subjectCode: "CST206",
    topic: "Process Management & CPU Scheduling",
    timeLimitMinutes: 10,
    questions: [
      {
        id: "Q101",
        question: "Which CPU scheduling algorithm gives the minimum average waiting time for a given set of processes?",
        options: ["Round Robin", "First-Come First-Served (FCFS)", "Shortest Job First (SJF)", "Priority Scheduling"],
        correctIndex: 2,
        explanation: "Shortest Job First (SJF) is provably optimal for minimizing average waiting time."
      },
      {
        id: "Q102",
        question: "What is a 'deadlock' condition in an Operating System?",
        options: [
          "When a process consumes 100% CPU",
          "When two or more processes are waiting indefinitely for resources held by each other",
          "When main memory runs out of space",
          "When a process crashes due to segmentation fault"
        ],
        correctIndex: 1,
        explanation: "A deadlock occurs when a set of processes are blocked because each process holds a resource and waits for another resource held by another process."
      },
      {
        id: "Q103",
        question: "Which system call creates a new child process in Unix/Linux operating systems?",
        options: ["exec()", "fork()", "create()", "spawn()"],
        correctIndex: 1,
        explanation: "The `fork()` system call duplicates the calling process to create an exact child process."
      },
      {
        id: "Q104",
        question: "What is the phenomenon called when memory space is fragmented into small unusable chunks?",
        options: ["Paging", "Fragmentation", "Thrashing", "Segmentation"],
        correctIndex: 1,
        explanation: "Fragmentation occurs when free memory is split into non-contiguous small blocks that cannot fit new allocations."
      },
      {
        id: "Q105",
        question: "Round Robin CPU scheduling relies heavily on which concept?",
        options: ["Static Priority", "Time Quantum / Time Slice", "Burst Ratio", "Job Size"],
        correctIndex: 1,
        explanation: "Round Robin assigns a small fixed unit of CPU time (time quantum) to each process in a circular queue."
      }
    ]
  },
  {
    id: "MOCK-DBMS-01",
    subject: "Database Management Systems",
    subjectCode: "CST304",
    topic: "SQL & Relational Algebra",
    timeLimitMinutes: 10,
    questions: [
      {
        id: "Q201",
        question: "What does ACID stand for in DBMS transactions?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Accuracy, Control, Integrity, Data",
          "Aggregation, Concurrency, Indexing, Disk",
          "Access, Continuity, Isolation, Dependency"
        ],
        correctIndex: 0,
        explanation: "ACID properties ensure reliable processing of database transactions."
      },
      {
        id: "Q202",
        question: "Which SQL clause is used to filter records AFTER an aggregate function (GROUP BY) has been applied?",
        options: ["WHERE", "HAVING", "ORDER BY", "FILTER"],
        correctIndex: 1,
        explanation: "The HAVING clause applies condition filters to grouped records produced by GROUP BY."
      },
      {
        id: "Q203",
        question: "In relational algebra, which operator is represented by the Greek symbol Sigma (σ)?",
        options: ["Projection", "Selection", "Join", "Cartesian Product"],
        correctIndex: 1,
        explanation: "Sigma (σ) represents the Selection operator, which filters rows that satisfy a predicate condition."
      },
      {
        id: "Q204",
        question: "Which normal form eliminates partial dependencies (where non-prime attribute depends on part of candidate key)?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctIndex: 1,
        explanation: "Second Normal Form (2NF) requires 1NF and that no non-prime attribute is dependent on a proper subset of any candidate key."
      },
      {
        id: "Q205",
        question: "Which type of JOIN returns all rows from the left table, even if there are no matches in the right table?",
        options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"],
        correctIndex: 1,
        explanation: "LEFT OUTER JOIN returns all tuples from the left table and matched tuples from the right table (with NULLs for unmatched right rows)."
      }
    ]
  }
];

export const CALENDAR_EVENTS = [
  {
    id: "CAL-01",
    title: "Commencement of S3/S5/S7 B.Tech Classes (Odd Sem 2026-27)",
    date: "2026-08-01",
    endDate: "2026-08-01",
    academicYear: "2026-2027",
    semester: "S5",
    category: "Semester Commencement",
    description: "Official reopening of engineering colleges in Kerala for Odd semester academic sessions."
  },
  {
    id: "CAL-02",
    title: "First Series Internal Examination (S3, S5, S7)",
    date: "2026-09-22",
    endDate: "2026-09-26",
    academicYear: "2026-2027",
    semester: "S5",
    category: "Internal Examinations",
    description: "Conduct of 1st internal assessment exams by respective affiliated institutions."
  },
  {
    id: "CAL-03",
    title: "S5 B.Tech Regular Exam Registration Closes",
    date: formatDateOffset(0).split("T")[0], // Today
    endDate: formatDateOffset(0).split("T")[0],
    academicYear: "2026-2027",
    semester: "S5",
    category: "Registration Deadlines",
    description: "Deadline for exam portal course mapping and fee submission."
  },
  {
    id: "CAL-04",
    title: "Second Series Internal Examination & Attendance Publishing",
    date: "2026-10-20",
    endDate: "2026-10-24",
    academicYear: "2026-2027",
    semester: "S5",
    category: "Internal Examinations",
    description: "Completion of 2nd internal series test and final internal mark submission on KTU portal."
  },
  {
    id: "CAL-05",
    title: "Odd Semester Course Commencement End & Study Leave",
    date: "2026-11-02",
    endDate: "2026-11-08",
    academicYear: "2026-2027",
    semester: "S5",
    category: "Semester-end Dates",
    description: "Classes end for Odd semester; study leave and practical exams period."
  },
  {
    id: "CAL-06",
    title: "KTU End-Semester University Examinations Begin",
    date: "2026-11-10",
    endDate: "2026-12-04",
    academicYear: "2026-2027",
    semester: "S5",
    category: "University Examinations",
    description: "Commencement of regular and supplementary theory examinations across state examination centers."
  },
  {
    id: "CAL-07",
    title: "Deepavali Institutional Holiday",
    date: "2026-11-01",
    endDate: "2026-11-01",
    academicYear: "2026-2027",
    semester: "All",
    category: "Holidays",
    description: "University declared holiday."
  }
];

export const EXAM_RESULTS = [
  {
    id: "RES-701",
    title: "S4 B.Tech Regular Examination Results (June/July 2026)",
    publishDate: "2026-10-06",
    year: "2026",
    semester: "S4",
    examType: "Regular Examination",
    description: "Results of B.Tech S4 Regular Exams held in June 2026 have been published. Check SGPA and grade sheets.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "RES-702",
    title: "S2 M.Tech Regular & Supplementary Results (May 2026)",
    publishDate: "2026-09-29",
    year: "2026",
    semester: "S2",
    examType: "Regular Examination",
    description: "Postgraduate M.Tech Semester 2 regular and supplementary exam results released on portal.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "RES-703",
    title: "S6 B.Tech Supplementary Examination Results (Jan 2026)",
    publishDate: "2026-08-15",
    year: "2026",
    semester: "S6",
    examType: "Supplementary Examination",
    description: "Re-evaluation results and supplementary marklists updated for S6 B.Tech.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  },
  {
    id: "RES-704",
    title: "S3 B.Tech Improvement & Supplementary Results (Dec 2025)",
    publishDate: "2025-03-12",
    year: "2025",
    semester: "S3",
    examType: "Improvement Examination",
    description: "S3 B.Tech improvement exam results published for 2021 & 2022 schemes.",
    officialUrl: "https://ktu.edu.in/eu/core/announcements.htm"
  }
];

export const UNIVERSITY_FORMS = [
  {
    id: "FORM-201",
    title: "S5 B.Tech Regular Exam Registration Form",
    category: "Examination Registration",
    deadlineId: "DL-101",
    dueDate: formatDateOffset(0),
    description: "Official form for enrolling in S5 regular theory and practical university examinations.",
    formFields: [
      { name: "studentName", label: "Student Name", type: "text", defaultValue: "Abinash S" },
      { name: "registerNo", label: "Register Number", type: "text", defaultValue: "TVE22CS045" },
      { name: "college", label: "College Name", type: "text", defaultValue: "College of Engineering Trivandrum" },
      { name: "branch", label: "Branch", type: "text", defaultValue: "Computer Science & Engineering" },
      { name: "sem", label: "Semester", type: "text", defaultValue: "S5 B.Tech" },
      { name: "examFee", label: "Fee Amount", type: "text", defaultValue: "₹ 1,500" }
    ],
    pdfUrl: "/documents/sample_form_exam_reg.pdf"
  },
  {
    id: "FORM-202",
    title: "Supplementary Exam Application Form",
    category: "Supplementary Examination",
    deadlineId: "DL-102",
    dueDate: formatDateOffset(1),
    description: "Application for registering backlog subjects in upcoming supplementary examinations.",
    formFields: [
      { name: "studentName", label: "Student Name", type: "text", defaultValue: "Abinash S" },
      { name: "registerNo", label: "Register Number", type: "text", defaultValue: "TVE22CS045" },
      { name: "backlogCourses", label: "Select Backlog Subjects", type: "select", options: ["MAT203 - Discrete Math", "CST201 - Data Structures"] },
      { name: "feePerCourse", label: "Fee per Subject", type: "text", defaultValue: "₹ 500" }
    ],
    pdfUrl: "/documents/sample_form_exam_reg.pdf"
  },
  {
    id: "FORM-203",
    title: "Answer Script Revaluation & Copy Request Form",
    category: "Revaluation",
    deadlineId: "DL-103",
    dueDate: formatDateOffset(2),
    description: "Request form for re-checking evaluation or receiving digital copy of valuation script.",
    formFields: [
      { name: "studentName", label: "Student Name", type: "text", defaultValue: "Abinash S" },
      { name: "subjectCode", label: "Subject Code & Name", type: "text", defaultValue: "CST206 - Operating Systems" },
      { name: "requestType", label: "Request Type", type: "select", options: ["Revaluation Only (₹600)", "Copy of Answer Script Only (₹500)", "Both Revaluation & Copy (₹1100)"] }
    ],
    pdfUrl: "/documents/sample_form_exam_reg.pdf"
  },
  {
    id: "FORM-204",
    title: "Certificate Request & Migration Application",
    category: "Academic Applications",
    dueDate: formatDateOffset(14),
    description: "Application for issuing Conduct Certificate, Provisional Degree, Transcripts, or Migration Certificate.",
    formFields: [
      { name: "studentName", label: "Student Name", type: "text", defaultValue: "Abinash S" },
      { name: "certType", label: "Certificate Requested", type: "select", options: ["Official Transcript", "Provisional Certificate", "Migration Certificate", "Grade Card Correction"] },
      { name: "purpose", label: "Purpose of Application", type: "text", defaultValue: "Higher Education / Employment" }
    ],
    pdfUrl: "/documents/sample_form_exam_reg.pdf"
  },
  {
    id: "FORM-205",
    title: "Medical Condonation of Attendance Form",
    category: "Academic Applications",
    deadlineId: "DL-105",
    dueDate: formatDateOffset(8),
    description: "Official form for condoning shortage of attendance (65%-74%) on valid medical grounds.",
    formFields: [
      { name: "studentName", label: "Student Name", type: "text", defaultValue: "Abinash S" },
      { name: "attendancePercentage", label: "Current Attendance %", type: "text", defaultValue: "68%" },
      { name: "doctorName", label: "Attending Doctor Name & Reg No", type: "text", defaultValue: "Dr. K. Nair (Reg #48291)" }
    ],
    pdfUrl: "/documents/sample_form_exam_reg.pdf"
  }
];
