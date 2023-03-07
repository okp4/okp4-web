import { useCallback, useEffect, useState } from "react";

export const useMediaType = (query) => {
  const [matches, setMatches] = useState(false);

  const handleChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    setMatches(matchQueryList.matches);

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [handleChange, query, setMatches]);

  return matches;
};
