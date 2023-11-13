import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
// import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const favoriteResponse = await axios.get(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`);
        setIsFavorite(favoriteResponse.data.exists);

        const watchLaterResponse = await axios.get(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`);
        setIsWatchLater(watchLaterResponse.data.exists);
      } catch (error) {
        console.error('Error fetching user lists:', error);
      }
    };

    fetchUserLists();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    const url = `/api/titles/${type}/${movie.imdbId}`;
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(url);
        } else {
          await axios.post(url);
        }
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(url);
        } else {
          await axios.post(url);
        }
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error handling ${type}:`, error);
    }
  };

  return (
    <li className="movie-card">
      <FontAwesomeIcon
        icon={isFavorite ? 'heart' : ['far', 'heart']}
        onClick={() => handleClick('favorite')}
      />
      <FontAwesomeIcon
        icon={isWatchLater ? 'clock' : ['far', 'clock']}
        onClick={() => handleClick('watchlater')}
      />

      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
        <p>{movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
