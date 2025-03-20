import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether a media query matches
 * @param {string} query - The media query to check
 * @returns {boolean} - Whether the media query matches
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    const handler = (event) => setMatches(event.matches);
    
    // Add event listener
    mediaQuery.addEventListener('change', handler);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export default useMediaQuery; 