import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <p>{new Date().getUTCFullYear()}</p> {/* Outputs 2022 */}
      </footer>
    </section>
  );
};

export default Footer;
