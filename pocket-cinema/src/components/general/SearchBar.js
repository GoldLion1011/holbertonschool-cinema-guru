import React from 'react';
import '../general/general.css';


const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
