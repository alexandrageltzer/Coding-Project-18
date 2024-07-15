import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div>
      <h3>Rate {movie}</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} Star{star > 1 && 's'}
        </button>
      ))}
      {submitted && <p>Thank you for your rating {movie} {rating} stars!</p>}
    </div>
  );
};

export default RateMovieButton;
