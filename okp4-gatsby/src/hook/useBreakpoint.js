import { useMediaType } from "./useMediaType";

const breakpoints = {
  xxs: "0",
  xs: "375px",
  sm: "570px",
  md: "770px",
  lg: "1025px",
  xl: "1200px",
  xxl: "1500px",
  xxxl: "1800px",
};

export const useBreakpoint = () => ({
  isLarge: useMediaType(`(min-width: ${breakpoints.lg})`),
});
