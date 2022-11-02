import React, { useState } from "react";
import { Alert } from "@mui/material";

const Contact = () => {
  //!remove alert states and components to form component later
  const [successAlert, setSuccessAlert] = useState(true);
  const [failureAlert, setFailureAlert] = useState(true);
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-details"></div>
        {successAlert && (
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
        )}
        <div className="contact-form"></div>
      </div>
    </section>
  );
};

export default Contact;
