import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <p></p>
      <p></p>
      <p
        className="footer-right"
        onClick={(e) => (window.location.href = "#Contact")}
      >
        contact
      </p>
    </div>
  );
};

export default Footer;
