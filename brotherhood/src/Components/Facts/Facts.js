import React from 'react';
import '../Facts/Facts.css';
import ManThinking from '../../Images/manthinking.jpg';

export default function Facts() {
  return (
    <section id="facts" className='facts-container'>
      <h2 className="facts-container-h2">Facts</h2>
        <h3>Some unfortunate facts that men face today:</h3>
      <div className='mens-facts-card'>
        <div className='facts-containers'>
          <div className='mens-suicide-facts-container'>
            <h3>Male Suicide</h3>
            <ul>
              <li>75% of all suicides are attempted by Men.</li>
              <li>Suicide is the biggest killer of men under the age of 45.</li>
              <li>Males aged 85 and over experience the highest age-specific rate of suicide in the west.</li>
            </ul>
          </div>
          <div className='mens-dating-facts-container'>
            <h3>Dating & Relationships</h3>
            <ul>
              <li>Fathers gain sole custody in approximately 10% of all divorce cases. In around 11% of cases, they are the primary custodial parent. They share custody in about 7% of cases.</li>
              <li>While men swipe right on 40% of women on average, this number is only 7% for women. The same source claims that women match with 33% of people they swipe right on, while men match with only 2.5%.</li>
            </ul>
          </div>
        </div>
        <img className="facts-component-image" src={ManThinking} alt="A Man thinking silently." />
      </div>
    </section>
  )
}
