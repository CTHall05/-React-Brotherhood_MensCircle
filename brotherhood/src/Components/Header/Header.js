import React from 'react'
import './Header.css';

export default function Header() {

  const scrollToSection = (event) => {
    event.preventDefault();
    const factsSection = document.getElementById('facts');
    factsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header-container'>
      <h1>Brotherhood.</h1>
      <div className='header-nav-anchors'>
        <a onClick={scrollToSection} href='#facts'>Facts</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </header>
  )
}
