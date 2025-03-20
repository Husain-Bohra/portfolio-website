/**
 * Format a date to a readable string
 * @param {Date|string} date - The date to format
 * @returns {string} - The formatted date string
 */
export const formatDate = date => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Limit a string to a certain number of characters
 * @param {string} str - The string to truncate
 * @param {number} limit - The maximum number of characters
 * @returns {string} - The truncated string
 */
export const truncateString = (str, limit) => {
  if (str.length <= limit) return str;
  return str.slice(0, limit) + '...';
};

/**
 * Detect if the current device is a touch device
 * @returns {boolean} - Whether the device supports touch
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Scroll to an element smoothly
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = elementId => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
