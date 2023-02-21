import { useEffect, useCallback } from "react";

export const useOnClickOutside = (ref, handler, mouseEvent, options) => {
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
    window.addEventListener(mouseEvent, callback, options);

    return () => window.removeEventListener(mouseEvent, callback, options);
  }, [callback, mouseEvent]);
};
