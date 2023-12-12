import React, { useState } from 'react';
import CloseIcon from '../assets/close.svg'
import ArrowIcon from '../assets/arrow.svg'

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const clearSelection = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setSelectedOption(null);
    setIsOpen(true);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-container">
          <div className={`input-container ${isOpen ? 'input-container-focus' : ''}`} onClick={toggleDropdown}>
            <span className='movie-title'> {selectedOption && selectedOption.title}</span>
            {selectedOption && (
            <img src={CloseIcon} className="close-logo" alt="close" onClick={clearSelection}/>
            )}
            <img src={ArrowIcon} className={`toggle-logo ${isOpen ? 'open' : ''}`} alt="^"/>
          </div>
          {isOpen && (
            <div className="dropdown-options">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`option ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => selectOption(option)}
                >
                  {option.title}
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default Dropdown;
