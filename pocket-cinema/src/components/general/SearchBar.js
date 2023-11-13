import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './general.css';

import Form from 'react-bootstrap/Form';

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
