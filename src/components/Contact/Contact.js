import React, { useState } from "react";
import { Alert } from "@mui/material";
import ContactUs from "./ContactUs";

const Contact = () => {
  //!remove alert states and components to form component later
  const [successAlert, setSuccessAlert] = useState(true);
  const [failureAlert, setFailureAlert] = useState(true);
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
              <i class="fa-solid fa-phone"></i> <a href="tel:+972524555527"> Call Me</a>
            </div>
            <div className="contact-way">
              <i class="fa-solid fa-envelope"></i> <a href="mail:+972524555527"> Email</a>
            </div>
            <div className="contact-way">
              <i class="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          {/*  {successAlert && (
          <Alert
            onClose={() => {
              setSuccessAlert(false);
            }}>
            This is a success alert — check it out!
          </Alert>
        )}
        {failureAlert && (
          <Alert
            severity="error"
            onClose={() => {
              setFailureAlert(false);
            }}>
            This is a success alert — check it out!
          </Alert>
        )} */}
          <div className="contact-form">
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
