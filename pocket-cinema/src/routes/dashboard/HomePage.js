import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';
// import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  const loadMovies = async (pageNum) => {
    try {
      const response = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNum,
        },
      });

      setMovies((prevMovies) => [...prevMovies, ...response.data]);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>

      <Button label="Load More..." onClick={handleLoadMore} />
    </div>
  );
};

export default HomePage;
