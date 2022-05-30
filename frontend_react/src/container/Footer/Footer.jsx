import React, { useState } from "react";
import { BsPhone, BsMailbox2 } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import { AppWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      username,
      email,
      message,
    };

    emailjs
      .send("service_b87hj6c", "template_qycxo35", contact, "kUcyMdzpvPTKRMUTo")
      .then((response) => {
        console.log(response);
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };

  return (
    <>
      <h2 className="head-text">You can reach here:</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <BsMailbox2 />
          <a href="mailto:sanastrobarre99@gmail.com" className="p-text">
            sanastrobarre99@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <BsPhone />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +45 27136813
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact", "app__lightbluebg");
