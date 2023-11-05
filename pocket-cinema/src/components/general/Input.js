import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css'


const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} />}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
};

export default Input;
