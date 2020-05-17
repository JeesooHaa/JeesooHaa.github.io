import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <img src="../logo512.png" alt="logo-png" className="header-left" />
      <p className="header-center">J E E S O O H A A</p>
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
