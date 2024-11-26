import React, { useState, useRef, useEffect } from "react";
import headerIcon from "../../assets/images/header/header-icon.svg";
import globalIcon from "../../assets/images/header/global.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");

  const menuRef = useRef(null);
  const langRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
    if (langRef.current && !langRef.current.contains(event.target)) {
      setIsLangOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLang = () => {
    setIsLangOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  return (
    <header className="app-navbar">
      <div className="app-navbar__icon">
        <img src={headerIcon} aria-label="header icon" alt="skills icon" className="app-navbar__icon-image" />
      </div>

      <button
        className={`app-navbar__hamburger ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
        ref={menuRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`app-navbar__links ${isMenuOpen ? "app-navbar__links--open" : ""}`}>
        <li className="app-navbar__link">
          <a href="/career" onClick={() => setIsMenuOpen(false)}>
            Career
          </a>
        </li>
        <li className="app-navbar__link">
          <a href="/candidates" onClick={() => setIsMenuOpen(false)}>
            Candidates
          </a>
        </li>
        <li className="app-navbar__link">
          <a href="/info" onClick={() => setIsMenuOpen(false)}>
            Info
          </a>
        </li>
      </ul>

      <div className="app-navbar__actions">
        <div className={`app-navbar__langs ${isLangOpen ? "open" : ""}`} ref={langRef}>
          <div className="app-navbar__lang" onClick={toggleLang}>
            <img src={globalIcon} alt="global image" />
            <h2 className="app-navbar__lang-title">{selectedLang}</h2>
          </div>
          {isLangOpen && (
            <div className="app-navbar__lang-body">
              <div className="app-navbar__lang" onClick={() => changeLanguage("Uz")}>
                <img src={globalIcon} alt="global image" />
                <h2 className="app-navbar__lang-title">Uz</h2>
              </div>
              <div className="app-navbar__lang" onClick={() => changeLanguage("En")}>
                <img src={globalIcon} alt="global image" />
                <h2 className="app-navbar__lang-title">En</h2>
              </div>
            </div>
          )}
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
