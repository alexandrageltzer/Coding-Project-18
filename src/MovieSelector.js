
import React from 'react';

const MovieSelector = ({ movies, onSelectMovie }) => {
  return (
    <select onChange={(e) => onSelectMovie(e.target.value)}>
      {movies.map((movie) => (
        <option key={movie} value={movie}>
          {movie}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;
