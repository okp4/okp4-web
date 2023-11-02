export const OKP4_ENV = "localhost";
export const getOkp4Env = () =>
  typeof window !== "undefined" ? OKP4_ENV : null;
