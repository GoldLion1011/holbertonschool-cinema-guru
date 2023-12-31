import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

const CustomInput = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} />}
        <Form.Control
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
};

export default CustomInput;
