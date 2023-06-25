import React from 'react'
import '../IntroSection/IntroSection.css';
import IntroImage from '../../Images/wanderer.jpg';

export default function IntroSection() {
  return (
    <section className='IntroSection-section'>
      <h2 className='IntroSection-h2'>Men's Support Network.</h2>
      <div className='IntroSection-main-container'>
        <div className='IntroSection-mission-div'>
          <img className="IntroImage" src={IntroImage} alt="Man looking at the horizen" />
          <p>We aim to be the number one men's support network in the world. Our mission is to connect men from across the globe, regardless of their race, job status, goals or finances, and to help them form their own brotherhood of support. Click below to see our key features:</p>
        </div>
      </div>
          <button className='button-style'>Brotherhood.</button>
    </section>
  )
}
