import React from 'react'
import ManLookingAtMap from '../../Images/Features-Images/manlookingatmap.jpg';
import MenOnARoadTrip from '../../Images/Features-Images/menonaroadtrip.jpg';
import '../Features/Features.css';

export default function Features() {
  return (
    <>
      <section id='features' className='Features-Component-Container'>
        <h2 className='Features-Component-h2'>Features</h2>
        <div className='Features-div'>
          <div className='Features-Component-Card'>
            <div className='Features-SearchConnect-Title'>
              <h3>Search and Connect</h3>
              <p>Connect with men on the same path</p>
            </div>
            <h3>1.</h3>
            <img className='Features-Component-Img' src={ManLookingAtMap} alt="A man looking at a map!" />
            <p>After you create a profile, you can use our search filter to find likeminded men that have similar interests, values and goals</p>
          </div>
          <div className='Features-Component-Card'>
            <div className='Features-SearchConnect-Title'>
              <h3>Search and Connect</h3>
              <p>Connect with men on the same path</p>
            </div>
            <h3>2.</h3>
            <img className='Features-Component-Img' src={MenOnARoadTrip} alt="A man looking at a map!" />
            <p>After you create a profile, you can use our search filter to find likeminded men that have similar interests, values and goals</p>
          </div>
        </div>
      </section>
    </>
  )
}
