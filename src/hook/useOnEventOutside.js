import { useEffect, useCallback } from "react";

export const useOnEventOutside = (ref, listener, handler, options) => {
  const callback = useCallback(
    (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) {
        return;
      }

      handler(event);
    },
    [handler, ref]
  );

  useEffect(() => {
    window.addEventListener(listener, callback, options);

    return () => window.removeEventListener(listener, callback, options);
  }, [callback, listener, options]);
};
