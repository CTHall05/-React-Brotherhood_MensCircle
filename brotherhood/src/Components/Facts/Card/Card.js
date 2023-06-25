import { useState } from 'react';
import './Card.css';

const Card = ({ title, image, content }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
    setContentVisible(!isContentVisible);
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
        <div className={`card-content ${isContentVisible ? 'visible' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
};


export default Card;
