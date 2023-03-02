exports.onClientEntry = () => {
  const globalVariables = {
    SENDINBLUE_API_ENDPOINT: "https://api.sendinblue.com/v3/contacts",
    SENDINBLUE_API_KEY:
      "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",
    CAPTCHA_SITE_KEY: "6LdAYcIkAAAAAL8D90cNsXvBJba37I58_UMKa4Pm",
  };

  window.OKP4_ENV = {
    ...window.OKP4_ENV,
    ...globalVariables,
  };
};
