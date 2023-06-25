import { useState } from 'react';
import './Card.css';

const Card = ({ title, image, content, isExpanded, onClick }) => {
  const handleExpandClick = () => {
    onClick();
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <h3>{title}</h3>
      <div className="card-image-container">
        <img className="card-image" src={image} alt={title} />
      </div>
      <button className="expand-button" onClick={handleExpandClick}>
        {isExpanded ? 'Close' : 'Expand'}
      </button>
      {isExpanded && (
        <div className={`card-content ${isExpanded ? 'visible' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Card;
