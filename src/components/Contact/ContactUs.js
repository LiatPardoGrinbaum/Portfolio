import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill all fields.");
    } else if (!validator.isEmail(email)) {
      setError("Please enter a valid email adress.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setError("");
      setSuccess("I've got your message! Thank you :)");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      emailjs.sendForm("service_0z9atv2", "template_g7x1p3b", form.current, "3bl9IgA5kFVtwKzTv").then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-label-div">
        <label>Name:</label>
        <input type="text" name="user_name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-label-div">
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-label-div">
        <label>Message:</label>
        <textarea
          name="message"
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <input type="submit" value="Send Message" className="input-submit" />
      {error && (
        <p className="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {success && (
        <p className="alert" style={{ color: "green" }}>
          {success}
        </p>
      )}
    </form>
  );
};

export default ContactUs;
