import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <p>{new Date().getUTCFullYear()}</p> {/* Outputs 2020 */}
      </footer>
    </div>
  );
};

export default Footer;
