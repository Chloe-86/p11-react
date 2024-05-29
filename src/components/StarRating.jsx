
import React from 'react';
import '../styles/starRating.css';

const StarRating = ({ totalStars = 5, rating = 0 }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        const isFilled = index <= rating;
        return (
          <span key={index} className={isFilled ? 'on' : 'off'}>
            <span className="star">&#9733;</span>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;