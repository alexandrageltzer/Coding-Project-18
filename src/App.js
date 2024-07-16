import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('Select a movie');
  const movies = ['10 Things I Hate About You', 'The Matrix', 'Grown Ups'];

  return (
    <div className="App">
      <div className="toolbar">
        <div className="music-note"></div>
        <MovieSelector movies={movies} onSelectMovie={setSelectedMovie} />
        {selectedMovie !== 'Select a movie' && <RateMovieButton movie={selectedMovie} />}
        <UploadButton />
      </div>
    </div>
  );
};

export default App;
