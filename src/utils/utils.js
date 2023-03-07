export const getOkp4Env = () =>
  typeof window !== "undefined" ? OKP4_ENV : null;
