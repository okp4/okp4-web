import { useRef, useEffect } from "react";

export const useHorizontalScroll = (eventCallBackFn) => {
  const ref = useRef();

  useEffect(() => {
    const current = ref.current;
    const handleWheelEvent = (event) => {
      event.preventDefault();
      current?.scrollTo({
        left: current?.scrollLeft + event.deltaY,
      });
      eventCallBackFn();
    };
    current?.addEventListener("wheel", handleWheelEvent);
    return () => current?.removeEventListener("wheel", handleWheelEvent);
  }, [ref, eventCallBackFn]);
  return ref;
};
