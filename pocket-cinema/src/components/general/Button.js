import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import './general.css';

const CustomButton = ({ label, className, onClick, icon }) => {
  return (
    <Button variant="primary" className={`button ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}&nbsp;{label}
    </Button>
  );
};

export default CustomButton;
