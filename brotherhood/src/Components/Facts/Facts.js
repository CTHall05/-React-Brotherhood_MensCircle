import { useState } from 'react';
import '../Facts/Facts.css';
import ManThinking from '../../Images/manthinking.jpg';
import Divorce from '../../Images/divorce.jpg';
import Card from './Card/Card';

export default function Facts() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const handleCardClick = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? -1 : index);
  };

  return (
    <section id="facts" className="facts-container">
      <h2 className="facts-container-h2">Facts</h2>
      <div className="mens-facts-card">
        <Card
          title="Male Suicide"
          image={ManThinking}
          content={
            <ul>
              <li>75% of all suicides are attempted by Men.</li>
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
              <li>In the 2022 the divorce rates in the world was at 48%</li>
              <li>Fathers gain sole custody in approximately 10% of all cases. In around 11% of cases, they are the primary custodial parent. They share custody in about 7% of cases.</li>
            </ul>
          }
          isExpanded={expandedCardIndex === 1}
          onClick={() => handleCardClick(1)}
        />
        {/* Add more Card components here */}
      </div>
    </section>
  );
}
