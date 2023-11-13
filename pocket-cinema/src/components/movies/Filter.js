import React from 'react';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';
// import './movies.css';

const genresList = [
  'action', 'drama', 'comedy', 'biography', 'romance',
  'thriller', 'war', 'history', 'sport', 'sci-fi',
  'documentary', 'crime', 'fantasy'
];

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  return (
    <div className="filter-container">
      <SearchBar title={title} setTitle={setTitle} />

      <div className="filter-inputs">
        <Input
          label="Min Year"
          type="number"
          value={minYear}
          setValue={setMinYear}
        />

        <Input
          label="Max Year"
          type="number"
          value={maxYear}
          setValue={setMaxYear}
        />

        <SelectInput
          label="Sort By"
          options={[
            { label: 'Latest', value: 'latest' },
            { label: 'Oldest', value: 'oldest' },
            { label: 'Highest Rated', value: 'highestrated' },
            { label: 'Lowest Rated', value: 'lowestrated' },
          ]}
          value={sort}
          setValue={setSort}
        />
      </div>

      <div className="filter-genres">
        {genresList.map((genre, index) => (
          <Tag
            key={index}
            genre={genre}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
