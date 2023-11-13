import React, { useState } from 'react';
// import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      // Remove the genre from genres
      const updatedGenres = genres.filter((g) => g !== genre);
      setGenres(updatedGenres);
      setSelected(false);
    } else {
      // Add the genre to genres
      setGenres([...genres, genre]);
      setSelected(true);
    }
  };

  return (
    <li className={`tag ${selected ? 'selected' : ''}`} onClick={handleTag}>
      {genre}
    </li>
  );
};

export default Tag;
