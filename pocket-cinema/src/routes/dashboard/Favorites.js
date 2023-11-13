import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';
// import './dashboard.css';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:8000//api/titles/favorite');
      setMovies(response.data);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  return (
    <div className="favorites">
      <h1>Movies you like</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
