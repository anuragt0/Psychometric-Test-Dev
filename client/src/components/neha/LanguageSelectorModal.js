// LanguageSelectorModal.js

import React from 'react';
import './LanguageSelectorModal.css'; // Import your CSS file

const LanguageSelectorModal = ({ languages, onSelect }) => {
  const handleLanguageClick = language => {
    onSelect(language);
  };
  
  return (
    <div className="modal-container">
      <h4>Select Your Language</h4>
      <ul className="language-list">
        {languages.map(language => (
          <li
            key={language}
            onClick={() => handleLanguageClick(language)}
            className="language-option"
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelectorModal;
