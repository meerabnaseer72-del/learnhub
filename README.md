# LearnHub — Learning Management System (LMS)

A modern, responsive, portfolio-grade Learning Management System (LMS) built with React.js, Vite, Tailwind CSS, React Router, and Lucide React.

LearnHub allows students to discover curated courses, explore comprehensive syllabi and learning outcomes, enroll in courses without barriers, stream lesson videos, consult supplementary documentation, mark lessons as completed, and track overall progress dynamically via a personalized "My Learning" dashboard.

---

## Live Demo & Repository

- **Live Deployment (Vercel):** [https://learnhub-lms-demo.vercel.app](https://learnhub-lms-demo.vercel.app) *(Replace with your deployed URL upon publishing)*
- **GitHub Repository:** [https://github.com/your-username/learnhub-lms](https://github.com/your-username/learnhub-lms)

---

## Key Features

1. **Course Discovery & Instant Search:**
   - Multi-field search filtering across course title, instructor, category, and description (case-insensitive).
   - Category filtering across Web Development, UI/UX Design, Data Science, Programming, Digital Marketing, and Business.
   - Difficulty level filtering (`Beginner`, `Intermediate`, `Advanced`).
   - Combined real-time filtering with URL search parameter persistence.
   - Dynamic result count display (e.g., "Showing 4 of 9 courses").
   - Loading skeletons and friendly empty states with a one-click Reset Filters option.

2. **Course Syllabus & Free Enrollment:**
   - Detailed course hero overview with difficulty badges, duration, lesson counts, and instructor credentials.
   - Dedicated "What You'll Learn" outcomes specific to each course topic.
   - Full curriculum timeline showing lesson numbers, titles, and durations.
   - Instant "Enroll Now — Free" action saving directly to browser `localStorage` (`learnhub_enrolled`).
   - Duplicate enrollment prevention and automatic state toggle to "Enrolled / Continue Learning".

3. **Interactive Lesson Classroom:**
   - Responsive 16:9 video player with HTML5 sample streaming and custom play controls.
   - Lesson overview description that dynamically updates when switching lessons.
   - Curated supplementary resources (articles, official documentation, practice guides) for each lesson.
   - Linear lesson navigation (`Previous Lesson` and `Next Lesson` buttons with boundary disabling).
   - "Mark as Complete" action storing lesson IDs in browser `localStorage` (`learnhub_progress`).
   - Interactive `LessonSidebar` displaying curriculum checkmarks, durations, and active lesson highlighting.
   - Enrollment validation: un-enrolled learners are prompted with an immediate "Enroll Now" action before lesson access.

4. **Personalized "My Learning" Dashboard:**
   - Dynamic learner overview with total enrolled course counts and completed lessons stats.
   - Course progress cards featuring animated progress bars and percentage completion `(Completed / Total) * 100`.
   - Remaining vs. completed lesson counters.
   - Smart "Continue Learning" button that automatically routes to the first incomplete lesson in the sequence.
   - "Completed" status badge and "Review Course" button once 100% progress is achieved.
   - Engaging empty state with direct CTA to browse courses.

5. **Honest, Client-Side Persistence:**
   - Custom `useLocalStorage` React hook with safe `JSON.parse` error handling and functional updater support.
   - No backend, no login barrier, no mock payment claims, and no server sync illusions.

---

## Technologies Used

- **React 19** — Component-driven declarative user interface architecture.
- **Vite 6** — Next-generation frontend build tooling and local development server.
- **Tailwind CSS v4** — Utility-first styling with responsive breakpoint prefixes and modern CSS variables.
- **React Router DOM v7** — Client-side declarative routing, URL parameters, and search query synchronization.
- **Lucide React** — Consistent, accessible stroke icon library.

---

## Project Folder Structure

```
learnhub/
├── public/
│   └── images/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Lesson.jsx
│   │   └── NotFound.jsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── courses/
│   │   │   ├── CourseCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── FilterPanel.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   └── InstructorCard.jsx
│   │   │
│   │   ├── lessons/
│   │   │   ├── LessonSidebar.jsx
│   │   │   └── VideoPlayer.jsx
│   │   │
│   │   └── common/
│   │       ├── ProgressBar.jsx
│   │       ├── EmptyState.jsx
│   │       ├── Spinner.jsx
│   │       ├── Toast.jsx
│   │       ├── Badge.jsx
│   │       └── Button.jsx
│   │
│   ├── data/
│   │   ├── courses.js
│   │   └── instructors.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   └── utils/
│       └── helpers.js
│
├── index.html
├── vite.config.ts
├── vercel.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher recommended)
- npm or yarn

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/learnhub-lms.git
cd learnhub-lms
npm install
```

### 2. Run the Development Server

Start the local Vite dev server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

### 3. Production Build

To build the optimized production bundle:

```bash
npm run build
```

The production assets will be output in the `dist/` directory.

---

## Deployment on Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize LearnHub LMS"
   git branch -M main
   git remote add origin https://github.com/your-username/learnhub-lms.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New" &rarr; "Project"**.
3. Import your `learnhub-lms` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.
8. The included `vercel.json` provides client-side SPA route rewrites for nested URLs (`/courses/:id`, `/learn/:id/:lessonId`, `/dashboard`).

---

## Credits & Asset Attributions

- **Imagery:** Freely usable photography provided by Unsplash.
- **Video Samples:** Open media streams provided by Google's HTML5 sample video archive.
- **Icons:** [Lucide Icons](https://lucide.dev).
