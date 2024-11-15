import React from "react";
import headerIcon from "../../assets/images/header/header-icon.svg";
import globalIcon from "../../assets/images/header/global.svg";

const Header = () => {
  return (
    <header className="app-navbar">
      <div className="app-navbar__icon">
        <img src={headerIcon} aria-label="header icon" alt="skills icon" className="app-navbar__icon-image" />
      </div>
      <ul className="app-navbar__links">
        <li className="app-navbar__link">
          <a href="">Career</a>
        </li>
        <li className="app-navbar__link">
          <a href=""> Candidates</a>
        </li>
        <li className="app-navbar__link">
          <a href="">info</a>
        </li>
      </ul>
      <div className="app-navbar__actions">
        <div className="app-navbar__lang">
          <img src={globalIcon} alt="glob image" />
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
