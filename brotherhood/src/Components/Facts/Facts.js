import React, { useState } from 'react';
import '../Facts/Facts.css';
import ManThinking from '../../Images/manthinking.jpg';
import GroupOfFriends from '../../Images/men-friends.jpg';
import Menhugging from '../../Images/men-hugging.jpg';

const SolutionComponent = () => {
  return (
    <div className="solution-component">
        <h2>Form a Brotherhood.</h2>
      <section className='solution-container'>
        <div className='solutions-container-text'>
          <p className='solution-p-tag'>- We believe that men need to recconect with their masculine energy and celebrate it! <br/> - And this starts by surrounding themselves with likeminded men that want support each other in achieving their goals and dreams.<br/>
          - Regular Exercise, it can be anything that gets your body moving.<br/>
          - Good presentation, wearing clothes that fit you and complement your body.<br/>
          - Being honest in what you want from your life and actively seeking a way to achieve it.</p>
          <img className='facts-component-image' src={GroupOfFriends} alt="A group of guy friends laughing together." />
        </div>
        <div className='solutions-container-images'>
          <img className='facts-component-image' src={Menhugging} alt="Two men hugging." />
        </div>
              
      </section>
    </div>
  );
};

export default function Facts() {
  const [showSolution, setShowSolution] = useState(false);

  const handleClickSolution = () => {
    setShowSolution(true);
    document.getElementById('facts-header').textContent = "The Solution";
  };

  return (
    <section id="facts" className="facts-container">
      <h2 id="facts-header" className="facts-container-h2">Facts</h2>
      {!showSolution ? (
        <div className="mens-facts-card">
          <div className="facts-containers">
            <div className="mens-suicide-facts-container">
              <h3>Some unfortunate facts that men face today:</h3>
              <h3>Male Suicide</h3>
              <ul>
                <li>75% of all suicides are attempted by Men.</li>
                <li>Suicide is the biggest killer of men under the age of 45.</li>
                <li>Males aged 85 and over experience the highest age-specific rate of suicide in the west.</li>
              </ul>
            </div>
            <div className="mens-dating-facts-container">
              <h3>Dating & Relationships</h3>
              <ul>
                <li>
                  Fathers gain sole custody in approximately 10% of all divorce cases. In around 11% of cases, they are the primary custodial parent. They share custody in about 7% of cases.
                </li>
                <li>
                  While men swipe right on 40% of women on average, this number is only 7% for women. The same source claims that women match with 33% of people they swipe right on, while men match with only 2.5%.
                </li>
              </ul>
            </div>
          </div>
          <div className="facts-component-image-container">
            <img className="facts-component-image" src={ManThinking} alt="A Man thinking silently." />
            <button className="button-style" onClick={handleClickSolution}>
              The Solution
            </button>
          </div>
        </div>
      ) : (
        <SolutionComponent />
      )}
    </section>
  );
}
