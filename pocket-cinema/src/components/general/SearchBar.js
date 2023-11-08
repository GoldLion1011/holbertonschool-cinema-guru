import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './general.css';

const CustomSearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  return (
    <Form.Control
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search..."
    />
  );
};

export default CustomSearchBar;
