import { useRef, useEffect, useState } from "react";

export const useHorizontalScroll = () => {
  const [handleWheelEvent, setHandleWheelEvent] = useState(() => {});
  const ref = useRef();

  useEffect(() => {
    const current = ref.current;
    current?.addEventListener("wheel", handleWheelEvent);
    return () => current?.removeEventListener("wheel", handleWheelEvent);
  }, [ref, handleWheelEvent]);
  return [ref, setHandleWheelEvent];
};
