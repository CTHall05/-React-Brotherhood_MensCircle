import React from 'react'
import ManLookingAtMap from '../../Images/Features-Images/manlookingatmap.jpg';
import '../Features/Features.css';

export default function Features() {
  return (
    <>
      <section className='Features-Component-Container'>
        <h2 className='Features-Component-h2'>Features</h2>
        <div className='Features-Search&Connect-div'>
          <div className='Features-SearchConnect-Card'>
            <h3>Search and Connect</h3>
            <p>Connect with men on the same path</p>
            <h3>1.</h3>
            <img className='Features-Component-Img' src={ManLookingAtMap} alt="A man looking at a map!" />
            <p>After you create a profile, you can use our search filter to find likeminded men that have similar interests, values and goals</p>
          </div>
          
        </div>
      </section>
    </>
  )
}
