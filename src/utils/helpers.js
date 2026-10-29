/**
 * Helper utility functions for LearnHub calculations and filtering.
 */

/**
 * Calculates completion percentage for a course rounded to the nearest integer.
 * @param {string[]} [completedLessonIds=[]] - Array of completed lesson IDs.
 * @param {number} [totalLessons=0] - Total number of lessons in the course.
 * @returns {number} Percentage between 0 and 100.
 */
export function calculateProgress(completedLessonIds = [], totalLessons = 0) {
  if (!totalLessons || totalLessons <= 0) return 0;
  if (!Array.isArray(completedLessonIds) || completedLessonIds.length === 0) return 0;

  const validCompleted = Math.min(completedLessonIds.length, totalLessons);
  const percentage = (validCompleted / totalLessons) * 100;
  return Math.min(100, Math.max(0, Math.round(percentage)));
}

/**
 * Gets count of completed lessons.
 * @param {string[]} [completedLessonIds=[]]
 * @returns {number}
 */
export function getCompletedCount(completedLessonIds = []) {
  if (!Array.isArray(completedLessonIds)) return 0;
  return completedLessonIds.length;
}

/**
 * Gets remaining lesson count.
 * @param {string[]} [completedLessonIds=[]]
 * @param {number} [totalLessons=0]
 * @returns {number}
 */
export function getRemainingCount(completedLessonIds = [], totalLessons = 0) {
  const completed = getCompletedCount(completedLessonIds);
  return Math.max(0, totalLessons - completed);
}

/**
 * Checks if a course is enrolled.
 * @param {string[]} [enrolledCourseIds=[]]
 * @param {string} courseId
 * @returns {boolean}
 */
export function isCourseEnrolled(enrolledCourseIds = [], courseId) {
  if (!Array.isArray(enrolledCourseIds) || !courseId) return false;
  return enrolledCourseIds.includes(courseId);
}

/**
 * Finds the first incomplete lesson in a course.
 * If all lessons are completed or none found, returns the first lesson.
 * @param {Object} course - Course object with lessons array.
 * @param {string[]} [completedLessonIds=[]] - Array of completed lesson IDs.
 * @returns {Object|null} First incomplete lesson or first lesson.
 */
export function getFirstIncompleteLesson(course, completedLessonIds = []) {
  if (!course || !Array.isArray(course.lessons) || course.lessons.length === 0) {
    return null;
  }
  const completedSet = new Set(Array.isArray(completedLessonIds) ? completedLessonIds : []);
  const incompleteLesson = course.lessons.find((lesson) => !completedSet.has(lesson.id));
  return incompleteLesson || course.lessons[0];
}

/**
 * Filters courses based on search text, category, and difficulty level.
 * Performs case-insensitive matching across title, instructor, category, and description.
 * 
 * @param {Array} courses - Full list of courses.
 * @param {Object} filters - Filter criteria.
 * @param {string} [filters.search=''] - Keyword to match.
 * @param {string} [filters.category='All'] - Selected category.
 * @param {string} [filters.level='All Levels'] - Selected difficulty level.
 * @returns {Array} Filtered list of courses.
 */
export function filterCourses(courses = [], { search = '', category = 'All', level = 'All Levels' } = {}) {
  if (!Array.isArray(courses)) return [];

  const query = search ? search.trim().toLowerCase() : '';
  const selectedCategory = category ? category.trim() : 'All';
  const selectedLevel = level ? level.trim() : 'All Levels';

  return courses.filter((course) => {
    // Category match
    const categoryMatch =
      selectedCategory === 'All' ||
      selectedCategory === 'All Categories' ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    // Level match
    const levelMatch =
      selectedLevel === 'All Levels' ||
      selectedLevel === 'All' ||
      course.level.toLowerCase() === selectedLevel.toLowerCase();

    // Search query match
    let searchMatch = true;
    if (query) {
      const titleMatch = (course.title || '').toLowerCase().includes(query);
      const instructorMatch = (course.instructor || '').toLowerCase().includes(query);
      const categoryTextMatch = (course.category || '').toLowerCase().includes(query);
      const descriptionMatch = (course.description || '').toLowerCase().includes(query);
      searchMatch = titleMatch || instructorMatch || categoryTextMatch || descriptionMatch;
    }

    return categoryMatch && levelMatch && searchMatch;
  });
}
