import React, { useState } from "react";
import content from "/content/pages/contact/contact.yaml";
import RightArrowIcon from "../../../assets/images/icons/arrow-mr.inline.svg";

const validateEmailFormat = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  };

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

                <input
                  className="input__email"
                  type="email"
                  name="email"
                  placeholder={content.email}
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <textarea
                  className="input__message"
                  type="text"
                  name="message"
                  placeholder={content.message}
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              <button onClick={submitForm}>
                {content.send} <RightArrowIcon />
              </button>
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
