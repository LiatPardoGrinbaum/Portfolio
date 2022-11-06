import React from "react";

import ContactUs from "./ContactUs";
import contactme from "../../assets/contactme.jpg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="title">
          <h1>
            <span style={{ color: "rgb(38, 0, 121)" }}>..• Contact Me •..</span>
          </h1>
        </div>
        <div className="contact-container-inner">
          <div className="contact-details">
            <h1>Let's get in touch!</h1>
            <div className="contact-way">
              <a href="tel:+972524555527">
                {" "}
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="mailto:+972524555527">
                {" "}
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/liat-pardo-grinbaum-43932b146/" target="blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/LiatPardoGrinbaum" target="blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <img src={contactme} alt="phone" style={{ opacity: "0.5" }} />
          </div>
          <div className="contact-form">
            <ContactUs />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
