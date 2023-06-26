import { useState } from 'react';
import '../Facts/Facts.css';
import ManThinking from '../../Images/manthinking.jpg';
import Divorce from '../../Images/divorce.jpg';
import Educatuon from '../../Images/educationmen.jpg';
import Card from './Card/Card';
import Solution from '../Solution/Solution';

export default function Facts() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);

  const handleCardClick = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? -1 : index);
  };

  const handleSolutionClick = () => {
    setShowSolution(true);
    document.getElementById('facts-h2').textContent = "The Solution";
  };

  

  return (
    <section id="facts" className="facts-container">
      
      {!showSolution && (
        <div className="mens-facts-card">
          <h2 id="facts-h2" className="facts-container-h2">Facts</h2>
          <Card
            title="Male Suicide"
            image={ManThinking}
            content={
              <ul>
                <li>80% of all suicides are attempted by Men.</li>
                <li>Suicide is the biggest killer of men under the age of 45.</li>
                <li>
                  Males aged 85 and over experience the highest age-specific rate
                  of suicide in the west.
                </li>
              </ul>
            }
            isExpanded={expandedCardIndex === 0}
            onClick={() => handleCardClick(0)}
          />
          <Card
            title="Relationships"
            image={Divorce}
            content={
              <ul>
                <li>Research indicates that over 60% of young men are currently single.</li>
                <li>Women initiate divorce in nearly 70% of cases and so tend to be better prepared to accept it.</li>
                <li>Nearly half of fathers without any visitation rights still financially support their children</li>
                <li>Fathers gain sole custody in approximately 10% of all cases. In around 11% of cases, they are the primary custodial parent. They share custody in about 7% of cases.</li>
              </ul>
            }
            isExpanded={expandedCardIndex === 1}
            onClick={() => handleCardClick(1)}
          />
          <Card
            title="Education"
            image={Educatuon}
            content={
              <ul>
                <li>Research indicates that over 60% of young men are currently single.</li>
                <li>Women initiate divorce in nearly 70% of cases and so tend to be better prepared to accept it.</li>
                <li>Nearly half of fathers without any visitation rights still financially support their children</li>
                <li>Fathers gain sole custody in approximately 10% of all cases. In around 11% of cases, they are the primary custodial parent. They share custody in about 7% of cases.</li>
              </ul>
            }
            isExpanded={expandedCardIndex === 1}
            onClick={() => handleCardClick(1)}
          />
          {/* Add more Card components here */}
          <button className="button-style" onClick={handleSolutionClick}>The Solution</button>
        </div>
      )}
      {showSolution && <Solution />}
    </section>
  );
}
