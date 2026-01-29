/**
 * Utility functions for question management
 */

/**
 * Flatten nested questions data structure
 * @param {Array} questionsData - Raw questions data (may be nested)
 * @returns {Array} Flattened array of role objects
 */
export function flattenQuestionsData(questionsData) {
  return questionsData.flat();
}

/**
 * Get questions for a specific role
 * @param {Array} flattenedData - Flattened questions data
 * @param {string} role - Role name from URL
 * @returns {Array} Questions for the role, or empty array if not found
 */
export function getQuestionsForRole(flattenedData, role) {
  const roleData = flattenedData.find((r) => r.role === role);
  return roleData?.flashcards || [];
}

/**
 * Check if a role exists in the data
 * @param {Array} flattenedData - Flattened questions data
 * @param {string} role - Role name to check
 * @returns {boolean} True if role exists
 */
export function roleExists(flattenedData, role) {
  return flattenedData.some((r) => r.role === role);
}

/**
 * Calculate progress percentage
 * @param {number} currentIndex - Current question index (0-based)
 * @param {number} totalQuestions - Total number of questions
 * @returns {number} Progress percentage (0-100)
 */
export function calculateProgress(currentIndex, totalQuestions) {
  if (totalQuestions === 0) return 0;
  return Math.round(((currentIndex + 1) / totalQuestions) * 100);
}

/**
 * Check if user is on first question
 * @param {number} currentIndex - Current question index
 * @returns {boolean}
 */
export function isFirstQuestion(currentIndex) {
  return currentIndex === 0;
}

/**
 * Check if user is on last question
 * @param {number} currentIndex - Current question index
 * @param {number} totalQuestions - Total number of questions
 * @returns {boolean}
 */
export function isLastQuestion(currentIndex, totalQuestions) {
  return currentIndex === totalQuestions - 1;
}

/**
 * Get total number of answered questions
 * @param {Object} answers - Object with question IDs as keys
 * @returns {number} Count of answered questions
 */
export function getAnsweredCount(answers) {
  return Object.keys(answers).length;
}
