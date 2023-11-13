import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';
// import './dashboard.css';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadWatchLater();
  }, []);

  const loadWatchLater = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/titles/watchlater');
      setMovies(response.data);
    } catch (error) {
      console.error('Error loading watch later:', error);
    }
  };

  return (
    <div className="watch-later">
      <h1>Movies to Watch Later</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
