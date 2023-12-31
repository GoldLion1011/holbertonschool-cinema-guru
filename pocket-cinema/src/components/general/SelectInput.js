import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './general.css';

import Form from 'react-bootstrap/Form';

const CustomSelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
  };

  return (
    <div className={`select-input-container ${className}`}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default CustomSelectInput;
