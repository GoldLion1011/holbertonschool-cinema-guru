import React from 'react';
import '../general/general.css';


const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
  };

  return (
    <div className={`select-input-container ${className}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
