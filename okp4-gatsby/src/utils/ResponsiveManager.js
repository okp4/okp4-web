let breakpointsValue;

export function initBreakpointsFromCSS() {
  if (!breakpointsValue) {
    breakpointsValue = {};
    const cssBreakpoints = window
      .getComputedStyle(document.body)
      .getPropertyValue("--breakpoints");
    cssBreakpoints.split(",").forEach((cssBreakpoint) => {
      if (cssBreakpoint.length > 0) {
        if (cssBreakpoint[0] === " ") {
          cssBreakpoint = cssBreakpoint.substr(1);
        }
        const breakpointInfos = cssBreakpoint.split(" ");
        breakpointsValue[breakpointInfos[0]] = parseInt(breakpointInfos[1], 10);
      }
    });
  }
}

export function breakpoints() {
  initBreakpointsFromCSS();
  return breakpointsValue;
}

export function isWindowLarger(breakpoint) {
  const breakpointValue = breakpoints()[breakpoint];

  if (!breakpointValue) {
    console.error("No corresponding breakpoint", breakpoint);
    return false;
  }

  return window.innerWidth >= breakpointValue;
}

export function isWindowSmaller(breakpoint) {
  const breakpointValue = breakpoints()[breakpoint];

  if (!breakpointValue) {
    console.error("No corresponding breakpoint", breakpoint);
    return false;
  }

  return window.innerWidth < breakpointValue;
}

export function getCurrentBreakpoint() {
  const currentBreakpoints = breakpoints();
  let currentBreakpoint;

  Object.keys(currentBreakpoints).forEach((breakpoint) => {
    if (window.innerWidth > currentBreakpoints[breakpoint]) {
      currentBreakpoint = breakpoint;
    }
  });

  return currentBreakpoint;
}

export function initViewportHeightForMobile() {
  var fullVhInit = window.innerHeight;
  document.documentElement.style.setProperty("--fullVH", `${fullVhInit}px`);

  const callback = () => {
    const fullVh = window.innerHeight;
    const vh = fullVh * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--full-vh", `${fullVh}px`);
    document.documentElement.style.setProperty("--fullVHAlways", `${fullVh}px`);

    if (window.scrollY === 0) {
      document.documentElement.style.setProperty("--fullVH", `${fullVh}px`);
    }
  };

  callback();
  window.addEventListener("resize", () => callback());
}
