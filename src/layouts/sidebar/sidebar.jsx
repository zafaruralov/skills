import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import headerIcon from "../../assets/images/header/header-icon.svg";
import globalIcon from "../../assets/images/header/global.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // const handleContainerClick = () => {
  //   navigate(`/candidates`);
  // };
  return (
    <header className="app-navbar">
      <div className="app-navbar__icon">
        <img src={headerIcon} aria-label="header icon" alt="skills icon" className="app-navbar__icon-image" />
      </div>

      <button
        className={`app-navbar__hamburger ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`app-navbar__links ${isMenuOpen ? "app-navbar__links--open" : ""}`}>
        <li className="app-navbar__link">
          <a href="/">Career</a>
        </li>
        <li className="app-navbar__link">
          <a href="/candidates">Candidates</a>
        </li>
        <li className="app-navbar__link">
          <a href="">Info</a>
        </li>
      </ul>

      <div className="app-navbar__actions">
        <div className="app-navbar__lang">
          <img src={globalIcon} alt="global image" />
          <h2 className="app-navbar__lang-title">Eng</h2>
        </div>
        <div className="app-navbar__actions-wrapper">
          <button className="button primary">Login</button>
          <button className="button secondary">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
