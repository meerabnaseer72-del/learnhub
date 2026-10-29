import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/common/Toast';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import NotFound from './pages/NotFound';

/**
 * ScrollToTop component ensures navigation scrolls page back to top.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Main application component.
 * Maintains shared enrollment and progress state via custom useLocalStorage hook
 * and manages global feedback toasts.
 */
export function App() {
  // LocalStorage keys specified in Section 11.A & 11.B:
  // learnhub_enrolled: string[] of course IDs
  // learnhub_progress: { [courseId]: string[] of lesson IDs }
  const [enrolledCourseIds, setEnrolledCourseIds] = useLocalStorage('learnhub_enrolled', []);
  const [progressData, setProgressData] = useLocalStorage('learnhub_progress', {});

  // Toast feedback state (Section 11.F)
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast({ message: '', type: 'success' });
  };

  /**
   * Enroll in a course (Section 7.D & 11.D).
   * Prevents duplicates, updates state, and triggers toast.
   */
  const handleEnrollCourse = (courseId, courseTitle = 'Course') => {
    if (!courseId) return;

    setEnrolledCourseIds((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      if (currentList.includes(courseId)) {
        showToast(`You are already enrolled in ${courseTitle}`, 'info');
        return currentList;
      }
      showToast(`Enrolled in "${courseTitle}" successfully!`, 'success');
      return [...currentList, courseId];
    });
  };

  /**
   * Mark a lesson as completed (Section 9.F & 11.D).
   * Prevents duplicates, updates state, and triggers toast.
   */
  const handleCompleteLesson = (courseId, lessonId, lessonTitle = 'Lesson') => {
    if (!courseId || !lessonId) return;

    setProgressData((prev) => {
      const currentMap = prev && typeof prev === 'object' ? { ...prev } : {};
      const courseLessons = Array.isArray(currentMap[courseId]) ? [...currentMap[courseId]] : [];

      if (courseLessons.includes(lessonId)) {
        return currentMap;
      }

      courseLessons.push(lessonId);
      currentMap[courseId] = courseLessons;

      showToast(`Completed: "${lessonTitle}"!`, 'success');
      return currentMap;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <ScrollToTop />
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses/:courseId"
            element={
              <CourseDetails
                enrolledCourseIds={enrolledCourseIds}
                progressData={progressData}
                onEnrollCourse={handleEnrollCourse}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                enrolledCourseIds={enrolledCourseIds}
                progressData={progressData}
              />
            }
          />
          <Route
            path="/learn/:courseId/:lessonId"
            element={
              <Lesson
                enrolledCourseIds={enrolledCourseIds}
                progressData={progressData}
                onEnrollCourse={handleEnrollCourse}
                onCompleteLesson={handleCompleteLesson}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Global Toast Feedback */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
        duration={3000}
      />
    </div>
  );
}

export default App;
