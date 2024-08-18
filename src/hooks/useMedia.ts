import { useState, useEffect } from "react";

export const useMedia = (queryValue: string) => {
  const query = `(${queryValue})`;

  // Initialize state to match the media query
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    // Create a MediaQueryList object
    const mediaQueryList = window.matchMedia(query);

    // Define the event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the listener to the MediaQueryList
    mediaQueryList.addEventListener("change", listener);

    // Clean up the listener on unmount
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};
