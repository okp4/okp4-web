import { useRef, useEffect } from "react";

export const useHorizontalScroll = (eventCallBackFn, openedCard) => {
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
    if (openedCard) {
      current?.removeEventListener("wheel", handleWheelEvent);
    }
    return () => current?.removeEventListener("wheel", handleWheelEvent);
  }, [ref, eventCallBackFn, openedCard]);
  return ref;
};
