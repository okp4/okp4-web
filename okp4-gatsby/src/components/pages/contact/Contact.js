import React, { useCallback, useMemo, useState } from "react";
import content from "/content/pages/contact/contact.yaml";
import RightArrowIcon from "../../../assets/images/icons/arrow-mr.inline.svg";
import ErrorIcon from "../../../assets/images/icons/error_circle_rounded.inline.svg";
import MessageSentIcon from "../../../assets/images/icons/mark_email_read.inline.svg";
import axios from "axios";
import { getOkp4Env } from "../../../utils/utils";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const initialFormData = {
  name: "",
  country: "",
  email: "",
  message: "",
};
const initialFormState = "notSubmitted";

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isEmailValid, setEmailValid] = useState(true);
  const [formState, setFormState] = useState(initialFormState);
  const okp4Env = useMemo(() => getOkp4Env(), []);

  const checkEmailFormat = (email) => email.match(EMAIL_REGEX);

  const isEachMandatoryFieldFilled = useCallback(
    () =>
      formData.name !== "" && formData.email !== "" && formData.message !== "",
    [formData]
  );

  const resetFormData = useCallback(() => setFormData(initialFormData), []);
  const resetFormState = useCallback(() => setFormState(initialFormState), []);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = useCallback(
    (event) => {
      resetFormState();
      event.preventDefault();
      const isEmailFormatValid = checkEmailFormat(formData.email);
      setEmailValid(isEmailFormatValid);

      if (!isEachMandatoryFieldFilled()) {
        setFormState("mandatoryFieldMissing");
      } else if (isEmailFormatValid) {
        if (okp4Env) {
          const { SENDINBLUE_API_ENDPOINT, SENDINBLUE_API_KEY } = okp4Env;
          const config = {
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              "api-key": SENDINBLUE_API_KEY,
            },
          };

          const body = {
            email: formData.email,
            attributes: {
              NAME: formData.name,
              COUNTRY: formData.country,
              EMAIL: formData.email,
              MESSAGE: formData.message,
            },
          };

          axios
            .post(SENDINBLUE_API_ENDPOINT, JSON.stringify(body), config)
            .then((response) => {
              if (response.data.id) {
                resetFormData();
                setFormState("success");
              } else {
                throw new Error(
                  "HTTP server sent a 2** response that does not contain the created contact id."
                );
              }
            })
            .catch((error) => {
              if (error.response) {
                console.error(
                  `HTTP server responded with a ${
                    error.response.status
                  } code with the following error: ${JSON.stringify(
                    error.response.data
                  )}`
                );
              } else if (error.request) {
                console.error(
                  `Request was sent to the HTTP server but no response was received: ${error.request}`
                );
              } else {
                console.error(
                  `Oops.. An unspecified error occurred while trying to create a contact: ${error.message}`
                );
              }
              setFormState("error");
            });
        }
      }
    },
    [
      formData,
      isEachMandatoryFieldFilled,
      okp4Env,
      resetFormData,
      resetFormState,
    ]
  );

  return (
    <div className="contact__okp4">
      <div className="contact__main">
        <div className="wrapper">
          <div className="form__part">
            <div className="form__ellipse" />
            <div className="contact__container">
              <h2>{content.contactTitle}</h2>
              <div className="contact__details">
                <div className="contact__block">
                  <p className="contact__title">
                    {content.addressPart.addressTitle}
                  </p>
                  <div
                    className="contact__address"
                    dangerouslySetInnerHTML={{
                      __html: content.addressPart.address,
                    }}
                  ></div>
                </div>
                <div className="contact__block">
                  <p className="contact__title">
                    {content.businessPart.businessTitle}
                  </p>
                  <a
                    className="contact__address email"
                    href={`mailto:${content.businessPart.email}`}
                  >
                    {content.businessPart.email}
                  </a>
                </div>
              </div>
            </div>
            <h2>{content.contactFormTitle}</h2>
            <form className="contact__form">
              <div className="contact__fields">
                <input
                  className="input__name"
                  type="text"
                  name="name"
                  placeholder={content.name}
                  value={formData.name}
                  onChange={handleFormChange}
                />
                <input
                  className="input__country"
                  type="text"
                  name="country"
                  placeholder={content.country}
                  value={formData.country}
                  onChange={handleFormChange}
                />
                <div className="contact__fields--email">
                  <input
                    className="input__email"
                    type="email"
                    name="email"
                    placeholder={content.email}
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                  {!isEmailValid && (
                    <div className="form__message form__message__email">
                      <ErrorIcon />
                      <p className="form__error">
                        {content.formMessage.wrongEmailFormat}
                      </p>
                    </div>
                  )}
                </div>
                <textarea
                  className="input__message"
                  type="text"
                  name="message"
                  placeholder={content.message}
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              <button onClick={handleSubmit}>
                {content.send} <RightArrowIcon />
              </button>
              {formState === "mandatoryFieldMissing" && (
                <div className="form__message">
                  <ErrorIcon />
                  <p className="form__error">
                    {content.formMessage.mandatoryFieldMissing}
                  </p>
                </div>
              )}
              {formState === "error" && (
                <div className="form__message">
                  <ErrorIcon />
                  <p className="form__error">{content.formMessage.error}</p>
                </div>
              )}
              {formState === "success" && (
                <div className="form__message">
                  <MessageSentIcon />
                  <p className="form__success">
                    {content.formMessage.messageSent}
                  </p>
                </div>
              )}
            </form>
          </div>
          <div className="image_wrapper">
            <div className="world_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
