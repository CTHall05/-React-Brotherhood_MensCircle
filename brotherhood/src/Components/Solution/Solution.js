import React from 'react';
import '../Solution/Solution.css';
import Friends from '../../Images/men-friends.jpg';

const Solution = () => {
  return (
    <div className="solution-container">
      <div className="solution-card-container">
        <div className="solution-card-image">
          <img src={Friends} alt="A group of guy friends!"/>
        </div>
        <div className="solution-card-content">
          <h3>Fitness and Competition</h3>
          <ul>
            <li>Find a physical activity that you love!</li>
            <li>Immerce yourself within this community!</li>
            <li>Embrace healthy competition!</li>
          </ul>
        </div>
      </div>

      <div className="solution-card-container">
        <div className="solution-card-image">
          <img src={Friends} alt="A group of guy friends!"/>
        </div>
        <div className="solution-card-content">
          <h3>Relationships and Values</h3>
          <ul>
            <li>Decide what is important to you in a relationship.</li>
            <li>What values do you want to live by.</li>
            <li>What kind of partner do you want.</li>
          </ul>
        </div>
      </div>

      <div className="solution-card-container">
        <div className="solution-card-image">
         <img src={Friends} alt="A group of guy friends!"/>
        </div>
        <div className="solution-card-content">
          <h3>Finances and Goals</h3>
          <ul>
            <li>Is there something financial </li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solution;
