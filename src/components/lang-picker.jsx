import React, { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" }
];

const LanguagePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-picker" aria-live="polite">
      <button
        onClick={toggleDropdown}
        aria-label="Select language"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        className="language-picker__button"
      >
        {languages.find((lang) => lang.code === selectedLanguage)?.label || "Select Language"}
      </button>

      {isOpen && (
        <ul className="language-picker__list" role="listbox" aria-labelledby="language-picker">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              role="option"
              aria-selected={selectedLanguage === lang.code ? "true" : "false"}
              className={`language-picker__item ${selectedLanguage === lang.code ? "selected" : ""}`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguagePicker;
