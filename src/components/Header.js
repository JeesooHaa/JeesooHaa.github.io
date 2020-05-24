import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <img src="../logo512.png" alt="logo-png" className="header-left" />
      <p className="header-center"></p>
      <p
        className="header-right"
        onClick={(e) => (window.location.href = "#Project")}
      >
        project
      </p>
    </div>
  );
};

export default Header;
