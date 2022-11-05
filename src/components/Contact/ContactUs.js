import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0z9atv2", "template_g7x1p3b", form.current, "3bl9IgA5kFVtwKzTv").then(
      (result) => {
        console.log(result.text);
        console.log("Message sent!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-label-div">
        <label>Name:</label>
        <input type="text" name="user_name" placeholder="Name" />
      </div>
      <div className="input-label-div">
        <label>Email:</label>
        <input type="email" name="user_email" placeholder="Email" />
      </div>
      <div className="input-label-div">
        <label>Message:</label>
        <textarea name="message" placeholder="Enter your message here" />
      </div>
      <input type="submit" value="Send Message" className="input-submit" />
    </form>
  );
};

export default ContactUs;
