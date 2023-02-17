import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const refElement = useRef();
  const refWheel = useRef();
  useEffect(() => {
    const element = refElement.current;
    const wheel = refWheel.current;
    if (element && wheel) {
      const onWheel = (e) => {
        // if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + e.deltaY,
          behavior: "smooth",
        });

        // console.log({ scrollLeft: element.scrollLeft });
        // console.log({ innerWidth: window.innerWidth });
        // console.log({ scrollWidth: element.scrollWidth });
      };
      wheel.addEventListener("wheel", onWheel);

      if (element.scrollLeft + window.innerWidth >= element.scrollWidth) {
        console.log("On continue le scroll de la page");
        wheel.removeEventListener("wheel", onWheel);
      } else {
        console.log("On reste bloqué");
      }
      return () => wheel.removeEventListener("wheel", onWheel);
    }
  }, []);
  return { refElement, refWheel };
}
