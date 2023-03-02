const getGlobalVariable = (key) => window.OKP4_ENV[key];

export const getSendinblueApiEndpoint = () =>
  getGlobalVariable("SENDINBLUE_API_ENDPOINT");

export const getSendinblueApiKey = () =>
  getGlobalVariable("SENDINBLUE_API_KEY");

export const getCaptchaSiteKey = () => getGlobalVariable("CAPTCHA_SITE_KEY");
